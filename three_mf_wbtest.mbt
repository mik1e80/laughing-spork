// 白盒测试：3MF 解析。
//
// 测试样本全部**在内存里现拼**，不依赖仓库里的二进制文件：
// 用 fzip 的 `zip_sync` 把几段 XML 打成 ZIP，就是一个合法 3MF 了。
// 这样每个用例想改哪一处就改哪一处，比读固定文件清楚得多。
//
// 单位立方体仍然是基准：12 个三角形、体积 1、表面积 6。

///|
/// OPC 规定的部件类型表。内容对解析没影响，但真实文件都有，
/// 少了它就不是一个合法的 OPC 包了。
fn content_types_xml() -> String {
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
  "<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">" +
  "<Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/>" +
  "<Default Extension=\"model\" ContentType=\"application/vnd.ms-package.3dmanufacturing-3dmodel+xml\"/>" +
  "</Types>"
}

///|
/// 关系表，指向模型部件。
///
/// Target 特意写成带前导斜杠的 `/3D/3dmodel.model`——这是规范里的写法，
/// 而压缩包里的名字没有前导斜杠，解析时得归一化。
fn rels_xml() -> String {
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
  "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">" +
  "<Relationship Target=\"/3D/3dmodel.model\" Id=\"rel0\" " +
  "Type=\"http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel\"/>" +
  "</Relationships>"
}

///|
/// 把一段模型 XML 打包成一个 3MF。
fn mf_bytes(model_xml : String) -> Bytes {
  mf_bytes_with_rels(model_xml, rels_xml())
}

///|
/// 同上，但关系表换成自定义的。用来构造各种「关系表不对劲」的包。
fn mf_bytes_with_rels(model_xml : String, rels : String) -> Bytes {
  let files : Array[(String, FixedArray[Byte])] = [
    ("[Content_Types].xml", @utf8.encode(content_types_xml()).to_fixedarray()),
    ("_rels/.rels", @utf8.encode(rels).to_fixedarray()),
    ("3D/3dmodel.model", @utf8.encode(model_xml).to_fixedarray()),
  ]
  Bytes::from_array(@fzip.zip_sync(files))
}

///|
/// 单位立方体的 8 个共享顶点。
///
/// 注意这是 3MF 和 STL 最大的区别：**8 个顶点就够**。
/// STL 要把每个三角形的三个顶点各写一遍，36 条记录。
fn cube_vertices_xml() -> String {
  let mut s = ""
  for v in [
    (0, 0, 0),
    (1, 0, 0),
    (1, 1, 0),
    (0, 1, 0),
    (0, 0, 1),
    (1, 0, 1),
    (1, 1, 1),
    (0, 1, 1),
  ] {
    let (x, y, z) = v
    s = s + "<vertex x=\"\{x}\" y=\"\{y}\" z=\"\{z}\"/>"
  }
  s
}

///|
/// 单位立方体的 12 个三角形，存的是顶点表下标。
fn cube_triangles_xml() -> String {
  let mut s = ""
  for t in [
    (0, 1, 2),
    (0, 2, 3),
    (4, 6, 5),
    (4, 7, 6),
    (0, 4, 5),
    (0, 5, 1),
    (3, 2, 6),
    (3, 6, 7),
    (0, 3, 7),
    (0, 7, 4),
    (1, 5, 6),
    (1, 6, 2),
  ] {
    let (a, b, c) = t
    s = s + "<triangle v1=\"\{a}\" v2=\"\{b}\" v3=\"\{c}\"/>"
  }
  s
}

///|
/// 拼一个单对象的立方体 3MF。`item` 是 `<build>` 里的内容。
fn cube_model_xml(unit : String, item : String) -> String {
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
  "<model unit=\"" +
  unit +
  "\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
  "<resources><object id=\"1\" type=\"model\"><mesh><vertices>" +
  cube_vertices_xml() +
  "</vertices><triangles>" +
  cube_triangles_xml() +
  "</triangles></mesh></object></resources><build>" +
  item +
  "</build></model>"
}

///|
/// 取包围盒。空网格没有包围盒，测试里遇到就是失败。
fn bbox_of(mesh : Mesh) -> Aabb raise {
  match mesh.bounding_box() {
    Some(b) => b
    None => fail("这个网格没有包围盒")
  }
}

// ── 正常路径 ────────────────────────────────────────────────────────────

///|
test "3MF 立方体解析出和 STL 一样的几何" {
  let data = mf_bytes(cube_model_xml("millimeter", "<item objectid=\"1\"/>"))
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 12)
  assert_true(close(mesh.volume(), 1.0))
  assert_true(close(mesh.surface_area(), 6.0))
}

///|
test "3MF 的共享顶点被正确展开" {
  // 12 个三角形引用 8 个顶点。校验时焊接后应该正好是 8 个——
  // 如果下标解析错了（比如偏移一位），这里会得到一个完全不同的数
  let data = mf_bytes(cube_model_xml("millimeter", "<item objectid=\"1\"/>"))
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  let report = validate_default(mesh)
  assert_eq(report.raw_vertex_count, 36)
  assert_eq(report.unique_vertex_count, 8)
  // 3MF 的拓扑本来就是准确的，不该有边界边
  assert_true(report.is_watertight())
}

///|
test "3MF 用内容认出来" {
  let data = mf_bytes(cube_model_xml("millimeter", "<item objectid=\"1\"/>"))
  assert_true(detect_format(data) is ThreeMF)
  assert_true(is_3mf(data))
  // 统一入口也要能走对分支
  let mesh = match parse_mesh(data) {
    Ok(m) => m
    Err(msg) => fail("parse_mesh 失败：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 12)
}

// ── 单位 ────────────────────────────────────────────────────────────────

///|
test "3MF 的单位换算成毫米" {
  // 同一个立方体，写成英寸就是 25.4 倍边长，体积差 25.4³
  let inch = mf_bytes(cube_model_xml("inch", "<item objectid=\"1\"/>"))
  let mesh = match parse_3mf(inch) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  let expected = 25.4 * 25.4 * 25.4
  assert_true(close(mesh.volume(), expected))
  // 表面积是平方关系
  assert_true(close(mesh.surface_area(), 6.0 * 25.4 * 25.4))
}

///|
test "3MF 的厘米和米" {
  let cm = mf_bytes(cube_model_xml("centimeter", "<item objectid=\"1\"/>"))
  let mesh = match parse_3mf(cm) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  assert_true(close(mesh.volume(), 1000.0))
}

///|
test "3MF 不认识的单位要报错" {
  // 宁可报错也不猜——猜错了体积会差几个数量级，比报错难查得多
  let data = mf_bytes(cube_model_xml("furlong", "<item objectid=\"1\"/>"))
  match parse_3mf(data) {
    Ok(_) => fail("不认识的单位不该成功")
    Err(msg) => assert_true(msg.contains("furlong"))
  }
}

// ── 变换 ────────────────────────────────────────────────────────────────

///|
test "build 里的平移变换生效" {
  // 沿着 x 平移 10（矩阵最后三个数是平移）
  let data = mf_bytes(
    cube_model_xml(
      "millimeter",
      "<item objectid=\"1\" transform=\"1 0 0 0 1 0 0 0 1 10 0 0\"/>",
    ),
  )
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  // 平移不改变体积和面积
  assert_true(close(mesh.volume(), 1.0))
  let bbox = bbox_of(mesh)
  assert_true(close(bbox.min.x, 10.0))
  assert_true(close(bbox.max.x, 11.0))
}

///|
test "缩放变换会改变体积" {
  // 每个方向放大 2 倍 → 体积 8 倍
  let data = mf_bytes(
    cube_model_xml(
      "millimeter",
      "<item objectid=\"1\" transform=\"2 0 0 0 2 0 0 0 2 0 0 0\"/>",
    ),
  )
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  assert_true(close(mesh.volume(), 8.0))
}

///|
test "transform 个数不对要报错" {
  // 少一个数会让整条装配链错位，而错位后模型「看起来有东西」但体积不对，
  // 是最难查的那种错，必须在解析阶段就拦下来
  let data = mf_bytes(
    cube_model_xml("millimeter", "<item objectid=\"1\" transform=\"1 0 0 0 1 0\"/>"),
  )
  match parse_3mf(data) {
    Ok(_) => fail("个数不对的 transform 不该成功")
    Err(msg) => assert_true(msg.contains("12"))
  }
}

// ── 装配体（组件） ──────────────────────────────────────────────────────

///|
/// 一个由组件拼出来的对象：引用同一个立方体两次，各平移一段。
fn two_cubes_xml() -> String {
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
  "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
  "<resources>" +
  "<object id=\"1\" type=\"model\"><mesh><vertices>" +
  cube_vertices_xml() +
  "</vertices><triangles>" +
  cube_triangles_xml() +
  "</triangles></mesh></object>" +
  "<object id=\"2\" type=\"model\"><components>" +
  "<component objectid=\"1\" transform=\"1 0 0 0 1 0 0 0 1 0 0 0\"/>" +
  "<component objectid=\"1\" transform=\"1 0 0 0 1 0 0 0 1 10 0 0\"/>" +
  "</components></object>" +
  "</resources><build><item objectid=\"2\"/></build></model>"
}

///|
test "组件拼出来的装配体" {
  let data = mf_bytes(two_cubes_xml())
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  // 两个立方体：24 个三角形，体积加起来是 2
  assert_eq(mesh.triangle_count(), 24)
  assert_true(close(mesh.volume(), 2.0))
  let bbox = bbox_of(mesh)
  assert_true(close(bbox.min.x, 0.0))
  assert_true(close(bbox.max.x, 11.0))
}

///|
test "组件变换和 build 变换会叠加" {
  // 组件自己平移 10，build 里再平移 5，最终应该在 15
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
    "<resources>" +
    "<object id=\"1\" type=\"model\"><mesh><vertices>" +
    cube_vertices_xml() +
    "</vertices><triangles>" +
    cube_triangles_xml() +
    "</triangles></mesh></object>" +
    "<object id=\"2\" type=\"model\"><components>" +
    "<component objectid=\"1\" transform=\"1 0 0 0 1 0 0 0 1 10 0 0\"/>" +
    "</components></object>" +
    "</resources><build>" +
    "<item objectid=\"2\" transform=\"1 0 0 0 1 0 0 0 1 5 0 0\"/>" +
    "</build></model>"
  let mesh = match parse_3mf(mf_bytes(xml)) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  let bbox = bbox_of(mesh)
  // 两个变换的方向不能反：反了会得到 10 而不是 15
  assert_true(close(bbox.min.x, 15.0))
  assert_true(close(bbox.max.x, 16.0))
}

///|
test "循环引用不会把栈撑爆" {
  // 两个对象互相引用。坏文件里真会出现，必须有深度上限拦着
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
    "<resources>" +
    "<object id=\"1\" type=\"model\"><components>" +
    "<component objectid=\"2\"/></components></object>" +
    "<object id=\"2\" type=\"model\"><components>" +
    "<component objectid=\"1\"/></components></object>" +
    "</resources><build><item objectid=\"1\"/></build></model>"
  match parse_3mf(mf_bytes(xml)) {
    Ok(_) => fail("循环引用不该成功")
    Err(msg) => assert_true(msg.contains("循环引用"))
  }
}

// ── 坏文件 ──────────────────────────────────────────────────────────────

///|
test "顶点下标越界要报错" {
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
    "<resources><object id=\"1\" type=\"model\"><mesh><vertices>" +
    cube_vertices_xml() +
    "</vertices><triangles><triangle v1=\"0\" v2=\"1\" v3=\"99\"/>" +
    "</triangles></mesh></object></resources>" +
    "<build><item objectid=\"1\"/></build></model>"
  match parse_3mf(mf_bytes(xml)) {
    Ok(_) => fail("越界的下标不该成功")
    Err(msg) => assert_true(msg.contains("越界"))
  }
}

///|
test "引用了不存在的对象要报错" {
  let data = mf_bytes(
    cube_model_xml("millimeter", "<item objectid=\"7\"/>"),
  )
  match parse_3mf(data) {
    Ok(_) => fail("不存在的对象不该成功")
    Err(msg) => assert_true(msg.contains("id=7"))
  }
}

///|
test "build 是空的要报错" {
  let data = mf_bytes(cube_model_xml("millimeter", ""))
  match parse_3mf(data) {
    Ok(_) => fail("空 build 不该成功")
    Err(msg) => assert_true(msg.contains("没有列任何对象"))
  }
}

///|
test "不是 ZIP 就报错" {
  match parse_3mf(@utf8.encode("这不是一个 ZIP")) {
    Ok(_) => fail("不是 ZIP 不该成功")
    Err(msg) => assert_true(msg.contains("ZIP 解不开"))
  }
}

///|
test "ZIP 里没有模型部件要报错" {
  // 一个合法 ZIP，但里面是别的东西
  let files : Array[(String, FixedArray[Byte])] = [
    ("readme.txt", @utf8.encode("hello").to_fixedarray()),
  ]
  let data = Bytes::from_array(@fzip.zip_sync(files))
  // 但它仍然会被识别成 3MF（因为魔数是 PK），所以错误要在解析时给出
  assert_true(is_3mf(data))
  match parse_3mf(data) {
    Ok(_) => fail("没有模型部件不该成功")
    Err(msg) => assert_true(msg.contains(".model"))
  }
}

///|
test "关系表合法但没有 3dmodel 关系：要能退出，并退回按文件名找" {
  // 这是最容易挂死的一种包：`_rels/.rels` 存在、是合法 XML，
  // 但里面没有任何 Type 以 /3dmodel 结尾的关系。
  // 现实中长的就是「把 .docx 改名成 .3mf」的样子。
  //
  // 解析器必须**退出**这个查找循环，再退回去按 .model 文件名找。
  // 曾经这里是个死循环：读不到匹配的关系就一直读，而读完了还接着读，
  // 表现是 CPU 空转、命令行卡死、网页卡死标签页，永远等不到报错。
  let rels = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">" +
    "<Relationship Target=\"/word/document.xml\" Id=\"rId1\" Type=\"" +
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\"/>" +
    "</Relationships>"
  let data = mf_bytes_with_rels(
    cube_model_xml("millimeter", "<item objectid=\"1\"/>"),
    rels,
  )
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("应该退回按文件名找到模型部件，却报错：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 12)
}

///|
test "关系表里 3dmodel 那条缺 Target：也不能挂死" {
  // 另一条死循环路径：Type 对得上，但没有 Target 属性。
  // 修的时候是把「找不到就继续找」改成「找不到也要能结束」，
  // 两条路径都得盯住
  let rels = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">" +
    "<Relationship Id=\"rel0\" Type=\"" +
    "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel\"/>" +
    "</Relationships>"
  let data = mf_bytes_with_rels(
    cube_model_xml("millimeter", "<item objectid=\"1\"/>"),
    rels,
  )
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("缺 Target 时应该退回按文件名找，却报错：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 12)
}

// ── 压缩包条目名 ────────────────────────────────────────────────────────

///|
test "压缩包里用反斜杠分隔路径也能认" {
  // ZIP 规范要求条目名用正斜杠，但 Windows 上一些打包工具
  // （比如 PowerShell 的 Compress-Archive）会写成反斜杠。
  // 不归一化的话，一个结构完好的包会因为 `3D\3dmodel.model` 匹配不上
  // `3D/3dmodel.model` 而被判成「没有模型部件」——报错完全指错了方向
  let files : Array[(String, FixedArray[Byte])] = [
    ("_rels\\.rels", @utf8.encode(rels_xml()).to_fixedarray()),
    (
      "3D\\3dmodel.model",
      @utf8
        .encode(cube_model_xml("millimeter", "<item objectid=\"1\"/>"))
        .to_fixedarray(),
    ),
  ]
  let mesh = match parse_3mf(Bytes::from_array(@fzip.zip_sync(files))) {
    Ok(m) => m
    Err(msg) => fail("反斜杠路径不该导致失败：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 12)
}

// ── 命名空间 ────────────────────────────────────────────────────────────

///|
test "切片扩展里的二维顶点不会被当成三维顶点" {
  // 3MF 的切片扩展里有 `<s:vertices><s:vertex x=".." y=".."/></s:vertices>`，
  // 那是**二维**顶点，规范只定义了 x 和 y，**没有 z**。
  //
  // 只看本地名的话，`<s:vertex>` 会被当成核心的三维 `<vertex>`，
  // 走进解析坐标那条路，报一句「少了坐标属性 z」——
  // 于是一份完全合法的文件整个读不了
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\" " +
    "xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\" " +
    "xmlns:s=\"http://schemas.microsoft.com/3dmanufacturing/slice/2015/07\">" +
    "<resources>" +
    "<s:slicestack id=\"10\" ztop=\"1\">" +
    "<s:slice ztop=\"1\"><s:vertices>" +
    "<s:vertex x=\"0\" y=\"0\"/><s:vertex x=\"1\" y=\"0\"/><s:vertex x=\"0\" y=\"1\"/>" +
    "</s:vertices></s:slice></s:slicestack>" +
    "<object id=\"1\" type=\"model\"><mesh><vertices>" +
    cube_vertices_xml() +
    "</vertices><triangles>" +
    cube_triangles_xml() +
    "</triangles></mesh></object></resources>" +
    "<build><item objectid=\"1\"/></build></model>"
  let mesh = match parse_3mf(mf_bytes(xml)) {
    Ok(m) => m
    Err(msg) => fail("合法的切片文件不该解析失败：\{msg}")
  }
  // 切片那堆顶点一个都不该混进来
  assert_eq(mesh.triangle_count(), 12)
  assert_eq(validate_default(mesh).unique_vertex_count, 8)
}

// ── 数值把关 ────────────────────────────────────────────────────────────

///|
test "非整数的顶点下标要报错，不能静默取整" {
  // parse_double 收得比整数字面量宽得多。不把关的话 `v1="nan"` 会静默
  // 变成下标 0，用户拿到一个由错顶点拼出来的网格，而且毫无提示
  for bad in ["nan", "inf", "1.5", "-2.9"] {
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
      "<resources><object id=\"1\" type=\"model\"><mesh><vertices>" +
      cube_vertices_xml() +
      "</vertices><triangles><triangle v1=\"" +
      bad +
      "\" v2=\"1\" v3=\"2\"/></triangles></mesh></object></resources>" +
      "<build><item objectid=\"1\"/></build></model>"
    match parse_3mf(mf_bytes(xml)) {
      Ok(_) => fail("下标「\{bad}」不该被接受")
      Err(msg) => assert_true(msg.contains("不是个整数"))
    }
  }
}

///|
test "非整数的对象 id 要报错" {
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
    "<resources><object id=\"1.7\" type=\"model\"><mesh><vertices>" +
    cube_vertices_xml() +
    "</vertices><triangles>" +
    cube_triangles_xml() +
    "</triangles></mesh></object></resources>" +
    "<build><item objectid=\"1\"/></build></model>"
  match parse_3mf(mf_bytes(xml)) {
    Ok(_) => fail("小数 id 不该被接受")
    Err(msg) => assert_true(msg.contains("不是个整数"))
  }
}

///|
test "无穷大和 NaN 的坐标要报错" {
  // 放进网格里，包围盒和体积会变成一堆垃圾，而且从报告上看不出是文件坏了
  for bad in ["inf", "nan", "-inf"] {
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
      "<model unit=\"millimeter\" xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\">" +
      "<resources><object id=\"1\" type=\"model\"><mesh><vertices>" +
      "<vertex x=\"" +
      bad +
      "\" y=\"0\" z=\"0\"/><vertex x=\"1\" y=\"0\" z=\"0\"/>" +
      "<vertex x=\"0\" y=\"1\" z=\"0\"/></vertices>" +
      "<triangles><triangle v1=\"0\" v2=\"1\" v3=\"2\"/></triangles>" +
      "</mesh></object></resources>" +
      "<build><item objectid=\"1\"/></build></model>"
    match parse_3mf(mf_bytes(xml)) {
      Ok(_) => fail("坐标「\{bad}」不该被接受")
      Err(msg) => assert_true(msg.contains("有限的数字"))
    }
  }
}

// ── 报错措辞 ────────────────────────────────────────────────────────────

///|
test "beam lattice 的报错要说清是不支持，而不是说文件坏了" {
  // Beam Lattice 扩展规定：挂了 beamlattice 的 mesh **可以一个三角形都没有**
  // （规范原话 MAY consist of no triangles），几何全写在扩展元素里。
  // 这种文件是合法的，只是本工具处理不了。
  // 报错不能写成「没有网格数据」——那听起来像文件坏了，会把人带偏
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\" " +
    "xmlns=\"http://schemas.microsoft.com/3dmanufacturing/core/2015/02\" " +
    "xmlns:b=\"http://schemas.microsoft.com/3dmanufacturing/beamlattice/2017/02\">" +
    "<resources><object id=\"1\" type=\"model\"><mesh><vertices>" +
    cube_vertices_xml() +
    "</vertices><b:beamlattice radius=\"1\" minlength=\"0.1\"><b:beams>" +
    "<b:beam v1=\"0\" v2=\"1\"/></b:beams></b:beamlattice>" +
    "</mesh></object></resources>" +
    "<build><item objectid=\"1\"/></build></model>"
  match parse_3mf(mf_bytes(xml)) {
    Ok(_) => fail("只处理三角网格，不该成功")
    Err(msg) => assert_true(msg.contains("beam lattice"))
  }
}

///|
test "XML 坏掉要报错并带上行号" {
  // 故意写成多行，第 3 行的标签对不上——行号要是报错了，
  // 拿这个信息去定位文件里哪出问题就成了误导
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<model unit=\"millimeter\">\n" +
    "<resources></model>"
  match parse_3mf(mf_bytes(xml)) {
    Ok(_) => fail("坏的 XML 不该成功")
    Err(msg) => {
      assert_true(msg.contains("XML"))
      assert_true(msg.contains("第 3 行"))
    }
  }
}

// ── 和 STL 走同一套下游 ─────────────────────────────────────────────────

///|
test "3MF 解析出来的网格能走校验和修复" {
  // 3MF 本身是共享顶点的，但下游（校验、修复、预览、导出）
  // 全都是基于三角形数组的，所以要确认接口真的接得上
  let data = mf_bytes(cube_model_xml("millimeter", "<item objectid=\"1\"/>"))
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  let check = validate_default(mesh)
  assert_true(check.is_watertight())
  let svg = render_svg(mesh, PreviewOptions::default())
  assert_true(svg.contains("<svg"))
  // 再导出成二进制 STL，读回来应该还是同一个立方体
  let round = match parse_stl_binary(write_stl_binary(mesh)) {
    Ok(m) => m
    Err(msg) => fail("回读失败：\{msg}")
  }
  assert_true(close(round.volume(), 1.0))
}

///|
test "流式扫描也能用 3MF 解析出来的网格" {
  // 流式扫描本身只吃二进制 STL 的字节流，但和 3MF 的结论必须一致
  let data = mf_bytes(cube_model_xml("millimeter", "<item objectid=\"1\"/>"))
  let mesh = match parse_3mf(data) {
    Ok(m) => m
    Err(msg) => fail("解析失败：\{msg}")
  }
  let stream = match stream_stl_binary(write_stl_binary(mesh)) {
    Ok(r) => r
    Err(msg) => fail("流式扫描失败：\{msg}")
  }
  assert_true(close(stream.volume, 1.0))
  assert_true(stream.is_watertight())
}
