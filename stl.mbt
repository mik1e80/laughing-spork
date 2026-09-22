// STL 解析。
//
// STL 是 3D 打印的事实标准格式，有两种形态，内容完全一样，只是写法不同：
//
// ASCII：纯文本，一个三角形写成一坨 facet/vertex 关键字。
//        文件大（是二进制版的好几倍），但人眼能读。
//
// 二进制：80 字节文件头（内容随意，很多导出器塞一段说明文字）
//        + 4 字节小端三角形数量
//        + 每个三角形 50 字节：12 个 float32（法线 3 + 三个顶点 9）+ 2 字节属性
//
// 属性那 2 字节没有标准含义，多数导出器填 0，直接丢掉。

///|
/// 从 STL 数据解析出网格，自动判断是 ASCII 还是二进制。
///
/// 判断方法：先按二进制试——第 80 字节处读出的三角形数量如果能让总长度
/// 刚好对上（84 + 数量 × 50），那就是二进制。对不上再按文本解析。
///
/// 为什么不用「开头是不是 solid」判断？因为二进制 STL 的 80 字节文件头
/// 是随便写的，很多导出器就塞一句 "solid ..."，靠这个判断会误判。
/// 反过来，长度校验几乎不会误判。
pub fn parse_stl(data : Bytes) -> Result[Mesh, String] {
  match detect_format(data) {
    Binary => parse_stl_binary(data)
    Ascii =>
      // 用 @utf8.decode_lossy 正经解码。两个坑：
      //
      // 1. 不能用 Bytes::to_unchecked_string——那个是把字节直接当成 MoonBit
      //    字符串的内部表示（UTF-16）来重新解释，拿它解 UTF-8 会得到一堆
      //    乱码（512 字节会变成 256 个乱字符）。
      // 2. 用 lossy 而不是 decode：文件损坏时坏字节会被换成 U+FFFD，
      //    继续往下走，最后由坐标解析报出「不是一个合法的数字」，
      //    比在这里抛一个编码错误更有指向性。
      parse_stl_ascii(@utf8.decode_lossy(data))
    Unknown =>
      Err(
        "认不出这是 ASCII 还是二进制 STL：文件 \{data.length()} 字节，" +
        "既不是合法的二进制 STL（长度对不上三角形数量），开头也不像文本",
      )
  }
}

///|
/// 按内容自动判断格式并解析。STL 和 OBJ 都能读。
///
/// 判断靠内容不靠扩展名——从别处拷来的文件经常带着错的扩展名，
/// 而且二进制 STL 根本没有可靠的文本特征。
///
/// 顺序是：先试 STL 的两种形态（判断很确定，靠长度校验和关键字），
/// 都不认再当 OBJ 试。
pub fn parse_mesh(data : Bytes) -> Result[Mesh, String] {
  match detect_format(data) {
    Unknown => parse_obj(@utf8.decode_lossy(data))
    _ => parse_stl(data)
  }
}

///|
/// STL 的两种形态。
pub(all) enum StlFormat {
  Ascii
  Binary
  Unknown
}

///|
/// 判断 STL 数据是哪种形态。
pub fn detect_format(data : Bytes) -> StlFormat {
  // 二进制：长度必须正好是 84 + 数量 × 50
  if data.length() >= 84 {
    let count = read_u32_le(data, 80)
    // 用 64 位算，避免 count 很大时 32 位溢出反而「碰巧对上」
    let expected = 84UL + count.to_uint64() * 50UL
    if expected == data.length().to_uint64() {
      return Binary
    }
  }
  // ASCII：开头有 solid、里面有 facet 关键字。
  //
  // 直接在字节上找，不解码成字符串——关键字都是 ASCII，按字节比就够了。
  // 而且这样不怕把开头切在多字节字符中间（中文字节被截断会让解码失败）。
  // 只看开头 512 字节就够：关键字必然在最前面，没必要为了判断把几十 MB
  // 的整个扫一遍。
  let head_len = if data.length() < 512 { data.length() } else { 512 }
  let has_solid = bytes_contain_ascii(data, head_len, "solid")
  let has_facet = bytes_contain_ascii(data, head_len, "facet")
  let has_vertex = bytes_contain_ascii(data, head_len, "vertex")
  if has_solid && (has_facet || has_vertex) {
    return Ascii
  }
  // 有的 ASCII STL 开头不写 solid，那就只看有没有 facet/vertex 关键字
  if has_facet && has_vertex {
    return Ascii
  }
  Unknown
}

///|
/// 在前 `limit` 个字节里找 ASCII 子串。
///
/// 整个文件扫一遍是 O(n×m)，但这些关键字都很短、limit 也小，
/// 真正调用时只在前 512 字节里找，开销可以忽略。
fn bytes_contain_ascii(data : Bytes, limit : Int, needle : String) -> Bool {
  let target = @utf8.encode(needle)
  let n = target.length()
  if n == 0 {
    return true
  }
  let end = if limit < data.length() { limit } else { data.length() }
  if end < n {
    return false
  }
  for start = 0; start <= end - n; start = start + 1 {
    let mut matched = true
    for j = 0; j < n; j = j + 1 {
      if data[start + j] != target[j] {
        matched = false
        break
      }
    }
    if matched {
      return true
    }
  }
  false
}

///|
/// 解析 ASCII STL。
///
/// 逐行扫，认三种关键字：
///   `facet normal x y z`  开一个新面，记下法线
///   `vertex x y z`        往当前面里加一个顶点
///   `endfacet`            当前面结束，凑够三个顶点就收一个三角形
///
/// 其余的行（`solid`、`outer`、`loop`、`endloop`、`endsolid`）直接跳过——
/// 它们不影响几何信息。
pub fn parse_stl_ascii(text : String) -> Result[Mesh, String] {
  let triangles : Array[Triangle] = []
  let mut normal = Vec3::zero()
  let pending : Array[Vec3] = []
  let mut line_no = 0

  for raw_line in text.split("\n") {
    line_no = line_no + 1
    // 按空格切，顺便滤掉空串（行首缩进、连续空格都会产生空 token）
    let tokens : Array[StringView] = []
    for token in raw_line.split(" ") {
      if token.length() > 0 {
        tokens.push(token)
      }
    }
    match tokens {
      ["facet", "normal", x, y, z] =>
        match parse_vec3(x, y, z, line_no) {
          Ok(v) => {
            normal = v
            pending.clear()
          }
          Err(msg) => return Err(msg)
        }
      ["vertex", x, y, z] =>
        match parse_vec3(x, y, z, line_no) {
          Ok(v) => pending.push(v)
          Err(msg) => return Err(msg)
        }
      ["endfacet", ..] =>
        if pending.length() == 3 {
          triangles.push({
            normal,
            a: pending[0],
            b: pending[1],
            c: pending[2],
          })
          pending.clear()
        } else {
          return Err(
            "第 \{line_no} 行：一个面结束了，但里面只有 \{pending.length()} 个顶点，应该是 3 个",
          )
        }
      _ => ()
    }
  }

  if triangles.length() == 0 {
    return Err(
      "这个 ASCII STL 里一个三角形都没有，可能不是 STL 文件",
    )
  }
  Ok(Mesh::new(triangles))
}

///|
/// 解析二进制 STL。
pub fn parse_stl_binary(data : Bytes) -> Result[Mesh, String] {
  if data.length() < 84 {
    return Err(
      "二进制 STL 至少要 84 字节（80 字节文件头 + 4 字节三角形数），" +
      "这个文件只有 \{data.length()} 字节",
    )
  }
  let count_u = read_u32_le(data, 80)
  let expected = 84UL + count_u.to_uint64() * 50UL
  if expected > data.length().to_uint64() {
    return Err(
      "二进制 STL 头部声称有 \{count_u} 个三角形（需要 \{expected} 字节），" +
      "但文件只有 \{data.length()} 字节，文件被截断了",
    )
  }
  let count = count_u.reinterpret_as_int()
  let triangles : Array[Triangle] = []
  for i = 0; i < count; i = i + 1 {
    let base = 84 + i * 50
    triangles.push({
      normal: read_vec3_f32(data, base),
      a: read_vec3_f32(data, base + 12),
      b: read_vec3_f32(data, base + 24),
      c: read_vec3_f32(data, base + 36),
    })
  }
  if triangles.length() == 0 {
    return Err("这个二进制 STL 里一个三角形都没有")
  }
  Ok(Mesh::new(triangles))
}

///|
/// 把三个坐标 token 解析成向量，失败时给出带行号的中文错误。
///
/// 逐个解析、出错就返回，而不是三个一起解再合并错误——后者要么写得很绕，
/// 要么丢失「是哪个坐标出的错」。
fn parse_vec3(
  x : StringView,
  y : StringView,
  z : StringView,
  line_no : Int,
) -> Result[Vec3, String] {
  let x = match parse_coord(x, line_no) {
    Ok(v) => v
    Err(msg) => return Err(msg)
  }
  let y = match parse_coord(y, line_no) {
    Ok(v) => v
    Err(msg) => return Err(msg)
  }
  let z = match parse_coord(z, line_no) {
    Ok(v) => v
    Err(msg) => return Err(msg)
  }
  Ok(Vec3::new(x, y, z))
}

///|
/// 解析一个坐标。解析器的错误是英文的，这里换成带行号的中文提示。
fn parse_coord(s : StringView, line_no : Int) -> Result[Double, String] {
  Ok(@string.parse_double(s)) catch {
    _ => Err("第 \{line_no} 行：『\{s}』不是一个合法的数字")
  }
}

///|
/// 从字节里读一个小端 32 位无符号整数。
fn read_u32_le(data : Bytes, offset : Int) -> UInt {
  let b0 = data[offset].to_int() & 0xFF
  let b1 = data[offset + 1].to_int() & 0xFF
  let b2 = data[offset + 2].to_int() & 0xFF
  let b3 = data[offset + 3].to_int() & 0xFF
  (b0 | (b1 << 8) | (b2 << 16) | (b3 << 24)).reinterpret_as_uint()
}

///|
/// 从字节里读一个小端 float32，转成 Double。
///
/// 用 `Float::reinterpret_from_uint` 按位重新解释，而不是做数值转换——
/// 文件里存的就是 IEEE 754 的位模式，直接搬过来就行，不需要任何换算。
fn read_f32_le(data : Bytes, offset : Int) -> Double {
  let bits = read_u32_le(data, offset)
  Float::reinterpret_from_uint(bits).to_double()
}

///|
/// 连读三个 float32 组成一个向量。
fn read_vec3_f32(data : Bytes, offset : Int) -> Vec3 {
  Vec3::new(
    read_f32_le(data, offset),
    read_f32_le(data, offset + 4),
    read_f32_le(data, offset + 8),
  )
}
