// 3MF 解析。
//
// 3MF（3D Manufacturing Format）是现代切片软件实际使用的格式——PrusaSlicer、
// Bambu Studio、Cura 导出的都是它，定位上就是 STL 的正式替代品。
//
// 它和 STL 有两处根本不同：
//
//   1. **它是个 ZIP 包**（OPC 容器），模型数据装在里面一个 XML 部件里，
//      通常叫 3D/3dmodel.model。
//   2. **顶点是共享的**。三角形存的是顶点表下标，和 OBJ 一样，
//      而不是像 STL 那样每个三角形把自己的三个顶点重写一遍。
//
// 第二点对「能不能打印」这个问题特别重要：**拓扑关系是现成的**。
// STL 里「哪些三角形共用同一个顶点」得靠容差焊接去猜（差 1e-9 的算不算同一个点？），
// 3MF 直接写清楚了。所以同一个模型，3MF 的水密性判断比 STL 更可靠。
//
// 代价是格式复杂得多：要解 ZIP、要解 XML，对象还能互相引用拼成装配体。

///|
/// 一个 3MF 对象。
///
/// 两种形态二选一：要么自带网格（顶点表 + 三角形索引），要么是一组组件
/// （引用别的对象，各带一个变换矩阵）。用两个数组共存来表示，
/// 比套一层枚举少绕几下——解析时本来就是一个一个往里塞。
priv struct MfObject {
  /// 共享顶点表
  vertices : Array[Vec3]
  /// 三角形，存的是顶点表下标
  triangles : Array[(Int, Int, Int)]
  /// 组件：引用的对象 id + 变换矩阵
  components : Array[(Int, FixedArray[Double]?)]
}

///|
/// 3MF 是个 ZIP 包。只看魔数，真正的校验在 `parse_3mf` 里做——
/// 「打开才知道」的检查不该塞进一个只看开头的判断函数。
pub fn is_3mf(data : Bytes) -> Bool {
  data.length() >= 4 &&
  data[0] == b'P' &&
  data[1] == b'K' &&
  // 空 ZIP 的开头是 PK\x05\x06，这里要的是有内容的那种
  data[2] == b'\x03' &&
  data[3] == b'\x04'
}

///|
/// 解析 3MF：解 ZIP → 找模型部件 → 解 XML → 按 build 里列的对象拼出网格。
pub fn parse_3mf(data : Bytes) -> Result[Mesh, String] {
  // 解 ZIP。fzip 自带 zip bomb 防护（解压比超过 1000 倍直接拒绝）
  // 和不安全路径拒绝（绝对路径、`..` 一律不收）——解析用户传上来的文件，
  // 这两道防线是必须的，自己写很容易漏。
  let entries = @fzip.unzip_sync(data.to_fixedarray()) catch {
    @fzip.FzipError(message~, ..) =>
      return Err("这不是一个合法的 3MF：ZIP 解不开——\{message}")
  }
  let xml = match find_model_part(entries) {
    Ok(text) => text
    Err(msg) => return Err(msg)
  }
  parse_model_xml(xml)
}

///|
/// 从压缩包里找出模型部件。
///
/// 正规做法是读 `_rels/.rels`，里面记着哪个部件是模型。绝大多数文件确实就叫
/// `3D/3dmodel.model`。两条路都走：先按规范查关系表，查不到再退化成
/// 「找唯一一个 .model 文件」——有些导出器写的关系表不规范，但文件名是对的。
fn find_model_part(
  entries : Array[(String, FixedArray[Byte])],
) -> Result[String, String] {
  let target = match find_entry(entries, "_rels/.rels") {
    Some(raw) => rels_model_target(@utf8.decode_lossy(Bytes::from_array(raw)))
    None => None
  }
  match target {
    Some(path) => match find_entry(entries, path) {
      Some(raw) => Ok(@utf8.decode_lossy(Bytes::from_array(raw)))
      None => Err("3MF 的关系表指向「\{path}」，但包里没有这个部件")
    }
    None => {
      // 退路：找 .model 文件
      let models : Array[String] = []
      for entry in entries {
        let (name, _) = entry
        if name.to_lower().has_suffix(".model") {
          models.push(name)
        }
      }
      if models.length() == 0 {
        Err("这个 ZIP 里没有 3D 模型部件（找不到 .model 文件），不是 3MF 文件")
      } else if models.length() > 1 {
        Err(
          "这个 3MF 里有 \{models.length()} 个 .model 部件，关系表也没说是哪个，认不出来",
        )
      } else {
        match find_entry(entries, models[0]) {
          Some(raw) => Ok(@utf8.decode_lossy(Bytes::from_array(raw)))
          None => Err("读不到模型部件「\{models[0]}」")
        }
      }
    }
  }
}

///|
/// 从 `_rels/.rels` 里找出模型部件路径。
///
/// 关系表长这样：
///
/// ```xml
/// <Relationship Target="/3D/3dmodel.model" Id="rel0"
///   Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
/// ```
///
/// 认的是 Type 后缀而不是 Id——Id 是随便起的。
fn rels_model_target(xml : String) -> String? {
  let reader = @xml.Reader::from_string(xml)
  let mut found : String? = None
  while found is None {
    let event = reader.read_event() catch {
      // 关系表坏了不该让整个解析失败，退回去按文件名找就行
      _ => break
    }
    let element = match event.kind {
      @xml.EventKind::Start(e) | @xml.EventKind::Empty(e) => e
      // **必须在这里停下来。**
      //
      // 读到文件末尾之后，`read_event` 会一直返回 `Eof` 而不会抛错。
      // 少了这个分支，一个「关系表是合法 XML、但里面没有 3dmodel 关系」的包
      // 就会在这里无限空转——CPU 跑满，命令行和网页都卡死，而且永远等不到报错。
      // 现实中把 .docx 改名成 .3mf 就是这个样子。
      @xml.EventKind::Eof => break
      _ => continue
    }
    if local_name(element.name) != "Relationship" {
      continue
    }
    let kind = match element.get("Type") {
      Some(t) => t
      None => continue
    }
    if !kind.has_suffix("/3dmodel") {
      continue
    }
    // 关系对上了但没有 Target——文件不规范，不算数，继续往后找
    match element.get("Target") {
      Some(t) => found = Some(normalize_part_path(t))
      None => ()
    }
  }
  found
}

///|
/// OPC 里的路径可能写成 `/3D/3dmodel.model` 这种带前导斜杠的，
/// 而压缩包里存的是 `3D/3dmodel.model`。统一去掉前导斜杠。
fn normalize_part_path(path : String) -> String {
  if path.has_prefix("/") {
    path[1:].to_owned()
  } else {
    path
  }
}

///|
/// 按名字找一个部件。
///
/// 大小写不敏感——OPC 的部件名在规范里不区分大小写，
/// 实际文件里 `3D/3dmodel.model` 和 `3d/3DModel.model` 都出现过。
fn find_entry(
  entries : Array[(String, FixedArray[Byte])],
  name : String,
) -> FixedArray[Byte]? {
  let want = normalize_entry_name(name)
  for entry in entries {
    let (entry_name, bytes) = entry
    if normalize_entry_name(entry_name) == want {
      return Some(bytes)
    }
  }
  None
}

///|
/// 把压缩包里的条目名规范化，好用来比对。
///
/// 两件事：
///
/// 1. **转小写**——OPC 的部件名不区分大小写。
/// 2. **反斜杠换成正斜杠**——ZIP 规范要求条目名用正斜杠，但 Windows 上一些
///    打包工具（比如 PowerShell 的 `Compress-Archive`）会写成反斜杠。
///    不归一化的话，一个结构完好的包会因为 `3D\3dmodel.model` 匹配不上
///    `3D/3dmodel.model` 而被判成「没有模型部件」——报错完全指错了方向。
fn normalize_entry_name(name : String) -> String {
  let lower = name.to_lower()
  if lower.contains("\\") {
    lower.replace_all(old="\\", new="/")
  } else {
    lower
  }
}

///|
/// 去掉命名空间前缀，只留本地名。
///
/// 3MF 的 XML 用默认命名空间，正常情况下标签就是 `<vertex>`。
/// 但规范允许写前缀形式 `<m:vertex xmlns:m="...">`，
/// 那就得把 `m:` 切掉才能按名字匹配。
fn local_name(name : String) -> String {
  let mut last : StringView = name[:]
  for part in name.split(":") {
    last = part
  }
  last.to_owned()
}

///|
/// 取命名空间前缀。没有冒号就是空串（默认命名空间）。
fn prefix_of(name : String) -> String {
  match name.find(":") {
    Some(i) => name[:i].to_owned()
    None => ""
  }
}

///|
/// 3MF 核心命名空间的识别特征。
///
/// 不写死完整 URI 是因为后面可能跟版本号（规范的命名空间是
/// `http://schemas.microsoft.com/3dmanufacturing/core/2015/02`）。
const CORE_NS_MARK : String = "3dmanufacturing/core"

///|
/// 从根元素的命名空间声明里找出**核心命名空间用的是哪个前缀**。
///
/// 为什么需要这个：只看本地名会把别的命名空间的同名元素也认成核心元素。
/// 最现实的例子是 3MF 的切片扩展——里面有 `<s:vertices>` / `<s:vertex>`，
/// 那是**二维**顶点，规范只定义了 x 和 y，**没有 z**。不区分命名空间的话
/// 它会被当成核心的三维顶点，报一句「少了坐标属性 z」，
/// 结果是一份完全合法的文件整个解析不了。
///
/// 返回 `None` 表示根元素上没有声明核心命名空间，那就退回老规矩：
/// 不带前缀的元素都算核心的。
fn detect_core_prefix(element : @xml.XmlElement) -> String? {
  for attr in element.attributes {
    if !attr.value.contains(CORE_NS_MARK) {
      continue
    }
    // 默认命名空间写成 xmlns="..."，前缀是空串
    if attr.name == "xmlns" {
      return Some("")
    }
    if attr.name.has_prefix("xmlns:") {
      return Some(attr.name[6:].to_owned())
    }
  }
  None
}

///|
/// 解析 3D/3dmodel.model。
///
/// 关心的标签只有几个：`model`（拿单位）、`object`（攒顶点和三角形）、
/// `component`（装配体引用）、`item`（build 里列出要打印的对象）。
/// 其余（metadata、basematerials、切片信息……）全部跳过——
/// 它们和「能不能打印」没关系。
fn parse_model_xml(xml : String) -> Result[Mesh, String] {
  let reader = @xml.Reader::from_string(xml)
  let objects : Map[Int, MfObject] = Map([])
  // build 里列出的 (对象 id, 变换)
  let build : Array[(Int, FixedArray[Double]?)] = []

  // 单位换算到毫米。STL 没有单位概念，3MF 有，不换算的话
  // 一个以英寸建模的模型体积会差 25.4³ ≈ 16387 倍
  let mut unit_scale = 1.0

  // 核心命名空间用的是哪个前缀。`None` = 还没见到根元素
  let mut core_prefix : String? = None

  // 当前正在攒的对象
  let mut cur_id : Int? = None
  let mut cur_vertices : Array[Vec3] = []
  let mut cur_triangles : Array[(Int, Int, Int)] = []
  let mut cur_components : Array[(Int, FixedArray[Double]?)] = []

  while !reader.is_eof() {
    let event = reader.read_event() catch {
      err =>
        return Err("3MF 的模型 XML 解析失败（第 \{reader.line()} 行）：\{err}")
    }
    let element = match event.kind {
      @xml.EventKind::Start(e) | @xml.EventKind::Empty(e) => e
      @xml.EventKind::End(name) => {
        // 对象在这里收尾。但自闭合的 `<object/>` 不会走到这——
        // 那种情况由下一次 object 开始时的 flush 兜住。
        // 同样要认命名空间：`</s:object>` 不是核心的 object
        let end_is_core = match core_prefix {
          Some(p) => prefix_of(name) == p
          None => prefix_of(name) == ""
        }
        if end_is_core && local_name(name) == "object" {
          flush_object(objects, cur_id, cur_vertices, cur_triangles, cur_components)
          cur_id = None
          cur_vertices = []
          cur_triangles = []
          cur_components = []
        }
        continue
      }
      _ => continue
    }
    let tag = local_name(element.name)

    if tag == "model" {
      // 根元素上声明了核心命名空间，记下它用的前缀
      core_prefix = detect_core_prefix(element)
    }

    // 只处理核心命名空间的元素。
    //
    // 带别的前缀（比如切片扩展的 `s:`）一律跳过——它们的本地名可能和核心元素
    // 撞车，但语义完全不同。最典型的是 `<s:vertex>`：那是**二维**顶点，
    // 只有 x 和 y，当成三维顶点就会报「少了坐标属性 z」，整份合法文件都读不了。
    let prefix = prefix_of(element.name)
    let is_core = match core_prefix {
      Some(p) => prefix == p
      // 根元素上没声明命名空间，退回老规矩：不带前缀的当核心元素
      None => prefix == ""
    }
    if !is_core {
      continue
    }

    if tag == "model" {
      // 单位：micron / millimeter / centimeter / inch / foot / meter
      match element.get("unit") {
        Some(u) =>
          unit_scale = match unit_scale_of(u) {
            Ok(v) => v
            Err(msg) => return Err(msg)
          }
        None => ()
      }
    } else if tag == "object" {
      // 开始一个新对象。先把上一个收尾——这样自闭合的、漏了结束标签的
      // 坏文件也能解析出大部分内容，而不是丢掉整个模型
      flush_object(objects, cur_id, cur_vertices, cur_triangles, cur_components)
      let id = match attribute_int(element, "id", "object") {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      cur_id = Some(id)
      cur_vertices = []
      cur_triangles = []
      cur_components = []
    } else if tag == "vertex" {
      let v = match attribute_vec3(element) {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      cur_vertices.push(v)
    } else if tag == "triangle" {
      // 三角形存的是顶点表下标，不是坐标
      let a = match attribute_int(element, "v1", "triangle") {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      let b = match attribute_int(element, "v2", "triangle") {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      let c = match attribute_int(element, "v3", "triangle") {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      cur_triangles.push((a, b, c))
    } else if tag == "component" {
      let id = match attribute_int(element, "objectid", "component") {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      let tf = match attribute_transform(element) {
        Ok(t) => t
        Err(msg) => return Err(msg)
      }
      cur_components.push((id, tf))
    } else if tag == "item" {
      let id = match attribute_int(element, "objectid", "item") {
        Ok(v) => v
        Err(msg) => return Err(msg)
      }
      let tf = match attribute_transform(element) {
        Ok(t) => t
        Err(msg) => return Err(msg)
      }
      build.push((id, tf))
    }
  }
  // 最后一个对象
  flush_object(objects, cur_id, cur_vertices, cur_triangles, cur_components)

  if build.length() == 0 {
    return Err("这个 3MF 的 build 里没有列任何对象，没有东西可以打印")
  }

  // 按 build 列出的对象拼出最终网格
  let triangles : Array[Triangle] = []
  for (id, tf) in build {
    // item 不带 transform 就是原样放进去
    let transform = match tf {
      Some(t) => t
      None => identity_transform()
    }
    let body = match build_object(objects, id, transform, 0) {
      Ok(v) => v
      Err(msg) => return Err(msg)
    }
    for tri in body {
      triangles.push(tri)
    }
  }

  if triangles.length() == 0 {
    // 措辞要说清楚两种可能，别让人以为文件坏了。
    // 3MF 的 Beam Lattice 扩展明确规定：挂了 beamlattice 的 mesh
    // **可以一个三角形都没有**（规范原话：MAY consist of no triangles），
    // 几何全写在扩展元素里。这种文件是合法的，只是本工具处理不了
    return Err(
      "这个 3MF 的 build 引用的对象里没有三角形——可能是空对象，" +
      "也可能是几何写在扩展元素里的对象（比如 beam lattice，本工具只处理三角网格）",
    )
  }
  Ok(Mesh::new(scale_mesh(triangles, unit_scale)))
}

///|
/// 把一个对象的当前状态收进对象表。
///
/// 抽成函数是因为「收尾」要在两个地方发生：遇到结束标签时，
/// 以及开始下一个对象之前。后一处是给自闭合或者结构不完整的文件兜底的。
fn flush_object(
  objects : Map[Int, MfObject],
  id : Int?,
  vertices : Array[Vec3],
  triangles : Array[(Int, Int, Int)],
  components : Array[(Int, FixedArray[Double]?)],
) -> Unit {
  match id {
    Some(i) =>
      objects.set(i, MfObject::{ vertices, triangles, components })
    None => ()
  }
}

///|
/// 把所有顶点乘一个系数。
///
/// 单位换算单独走一遍，而不是在解析顶点时乘——因为变换矩阵里的平移量
/// 也是同一个单位的长度，两处都得乘。统一到最后做，不会漏。
fn scale_mesh(triangles : Array[Triangle], scale : Double) -> Array[Triangle] {
  if scale == 1.0 {
    return triangles
  }
  let out : Array[Triangle] = []
  for t in triangles {
    out.push({
      normal: t.normal,
      a: t.a.scale(scale),
      b: t.b.scale(scale),
      c: t.c.scale(scale),
    })
  }
  out
}

///|
/// 把一个对象（可能是装配体）展开成三角形，顺便套上变换。
///
/// `depth` 是递归深度。3MF 允许对象互相引用，**引用成环是坏文件，
/// 但真会出现**，不设上限就会栈溢出。
fn build_object(
  objects : Map[Int, MfObject],
  id : Int,
  transform : FixedArray[Double],
  depth : Int,
) -> Result[Array[Triangle], String] {
  if depth > 32 {
    return Err("3MF 的对象引用套得太深（超过 32 层），可能是循环引用")
  }
  let obj = match objects.get(id) {
    Some(o) => o
    None => return Err("3MF 里引用了不存在的对象 id=\{id}")
  }
  let out : Array[Triangle] = []
  if obj.triangles.length() > 0 {
    // 共享顶点表：三角形存的是下标，到这里才真正取出坐标
    let n = obj.vertices.length()
    for (i, j, k) in obj.triangles {
      if i < 0 || j < 0 || k < 0 || i >= n || j >= n || k >= n {
        return Err(
          "3MF 对象 id=\{id} 里有三角形的顶点下标越界（顶点表只有 \{n} 个，" +
          "引用到了 \{i}/\{j}/\{k}）",
        )
      }
      let a = apply_transform(obj.vertices[i], transform)
      let b = apply_transform(obj.vertices[j], transform)
      let c = apply_transform(obj.vertices[k], transform)
      out.push(Triangle::from_vertices(a, b, c))
    }
  }
  for (child_id, child_tf) in obj.components {
    // 组件自己的变换要先做，再套外层的——顺序反了位置就错了
    let combined = match child_tf {
      Some(t) => compose_transform(t, transform)
      None => transform
    }
    let sub = match build_object(objects, child_id, combined, depth + 1) {
      Ok(v) => v
      Err(msg) => return Err(msg)
    }
    for tri in sub {
      out.push(tri)
    }
  }
  Ok(out)
}

///|
/// 3MF 里的长度单位换算成毫米。
///
/// STL 没有单位概念，一路按毫米处理；3MF 有，不换算的话
/// 一个以英寸建模的模型体积会差 25.4³ ≈ 16387 倍，报告里的数字全是错的。
fn unit_scale_of(unit : String) -> Result[Double, String] {
  match unit {
    "micron" => Ok(0.001)
    "millimeter" => Ok(1.0)
    "centimeter" => Ok(10.0)
    "inch" => Ok(25.4)
    "foot" => Ok(304.8)
    "meter" => Ok(1000.0)
    _ =>
      Err(
        "3MF 里写了一个不认识的单位「\{unit}」，" +
        "规范里只有 micron / millimeter / centimeter / inch / foot / meter",
      )
  }
}

///|
/// 单位矩阵。build 里的 item 和 component 都可以不带 transform，
/// 不带就是原样放。
fn identity_transform() -> FixedArray[Double] {
  [1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0]
}

///|
/// 把一个点按 3MF 的变换矩阵变换。
///
/// 3MF 写的是 12 个数，代表一个 4×3 矩阵，按行排：
///
/// ```text
/// m00 m01 m02
/// m10 m11 m12
/// m20 m21 m22
/// m30 m31 m32      ← 平移
/// ```
///
/// 用的是**行向量**约定：点当作 1×4 的 `[x y z 1]` 去右乘矩阵：
///
/// ```text
/// x' = x·m00 + y·m10 + z·m20 + m30
/// y' = x·m01 + y·m11 + z·m21 + m31
/// z' = x·m02 + y·m12 + z·m22 + m32
/// ```
///
/// 注意平移在 m30/m31/m32，也就是数组的第 9/10/11 个——**不是前三个**。
/// 按列优先、或者把平移放前面，都会得到完全错误的位置。
fn apply_transform(v : Vec3, m : FixedArray[Double]) -> Vec3 {
  Vec3::{
    x: v.x * m[0] + v.y * m[3] + v.z * m[6] + m[9],
    y: v.x * m[1] + v.y * m[4] + v.z * m[7] + m[10],
    z: v.x * m[2] + v.y * m[5] + v.z * m[8] + m[11],
  }
}

///|
/// 先把点按 `first` 变换、再按 `second` 变换，合成一个矩阵。
///
/// 行向量约定下「先 A 后 B」就是 A×B。4×3 的矩阵要隐式补上第 4 列
/// （前三行填 0、最后一行填 1）才能相乘。
fn compose_transform(first : FixedArray[Double], second : FixedArray[Double]) -> FixedArray[Double] {
  let out : Array[Double] = []
  for i = 0; i < 4; i = i + 1 {
    for j = 0; j < 3; j = j + 1 {
      let mut sum = 0.0
      for k = 0; k < 3; k = k + 1 {
        sum = sum + first[i * 3 + k] * second[k * 3 + j]
      }
      // 第 4 行（i=3）还要加上 second 自己的平移
      if i == 3 {
        sum = sum + second[9 + j]
      }
      out.push(sum)
    }
  }
  [
    out[0], out[1], out[2], out[3], out[4], out[5], out[6], out[7], out[8],
    out[9], out[10], out[11],
  ]
}

///|
/// 读一个整数属性。
///
/// `parse_double` 收的比整数字面量宽得多：`1.5`、`1e3`、`2_0`、`nan`、`inf`
/// 它都认。所以这里必须自己把关——不把关的话 `<triangle v1="nan" .../>` 会
/// 静默变成下标 0，用户拿到一个由错顶点拼出来的网格，而且毫无提示。
///
/// 注意 `inf` 要单独判：`inf.round()` 还是 `inf`，光比 `value != value.round()`
/// 拦不住它。
fn attribute_int(
  element : @xml.XmlElement,
  name : String,
  tag : String,
) -> Result[Int, String] {
  match element.get(name) {
    Some(raw) => {
      let value = @string.parse_double(raw) catch {
        _ => return Err("3MF 的 <\{tag}> 里 \{name}=\"\{raw}\" 不是个整数")
      }
      if value.is_nan() || value.is_inf() || value != value.round() {
        return Err("3MF 的 <\{tag}> 里 \{name}=\"\{raw}\" 不是个整数")
      }
      Ok(value.to_int())
    }
    None => Err("3MF 的 <\{tag}> 少了一个必需的属性 \{name}")
  }
}

///|
/// 读 x / y / z 三个坐标属性。
///
/// 坐标也要查有限性：`x="inf"` 或 `x="nan"` 会让包围盒和体积算出一堆垃圾，
/// 而且从报告上看不出是文件坏了——数字就是难看点而已，不如直接报错。
fn attribute_vec3(element : @xml.XmlElement) -> Result[Vec3, String] {
  let out : Array[Double] = []
  for name in ["x", "y", "z"] {
    let raw = match element.get(name) {
      Some(v) => v
      None => return Err("3MF 的 <vertex> 少了坐标属性 \{name}")
    }
    let value = @string.parse_double(raw) catch {
      _ => return Err("3MF 的 <vertex> 里 \{name}=\"\{raw}\" 不是个数字")
    }
    if value.is_nan() || value.is_inf() {
      return Err("3MF 的 <vertex> 里 \{name}=\"\{raw}\" 不是个有限的数字")
    }
    out.push(value)
  }
  Ok(Vec3::new(out[0], out[1], out[2]))
}

///|
/// 读可选的位置变换属性。
///
/// 12 个数，空格分隔。个数不对就报错——少一个数会让整条装配链错位，
/// 而错位后的模型看起来「有东西」但体积完全不对，是最难查的那种错。
fn attribute_transform(element : @xml.XmlElement) -> Result[FixedArray[Double]?, String] {
  let raw = match element.get("transform") {
    Some(v) => v
    None => return Ok(None)
  }
  let out : Array[Double] = []
  for token in raw.split(" ") {
    if token.length() == 0 {
      continue
    }
    let value = @string.parse_double(token) catch {
      _ => return Err("3MF 的 transform 里『\{token}』不是个数字")
    }
    out.push(value)
  }
  if out.length() != 12 {
    return Err(
      "3MF 的 transform 应该有 12 个数（4 行 3 列的矩阵），实际有 \{out.length()} 个",
    )
  }
  Ok(
    Some([
      out[0], out[1], out[2], out[3], out[4], out[5], out[6], out[7], out[8],
      out[9], out[10], out[11],
    ]),
  )
}
