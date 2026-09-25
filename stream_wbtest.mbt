// 白盒测试：流式扫描。
//
// 这一块的核心风险是「两条代码路径算出不同的结果」——全量解析和流式扫描
// 是两份独立实现，只要有一个环节（体积累加、顶点量化、边打包）写得不一样，
// 结果就会悄悄分叉。所以主测试就是**把所有字段逐一对照**。

///|
/// 把流式结果和全量校验结果逐项对照。
fn assert_same_as_full(
  stream : StreamReport,
  mesh : Mesh,
  label : String,
) -> Unit raise {
  let full = validate_default(mesh)
  assert_eq(stream.triangle_count, full.triangle_count)
  assert_eq(stream.raw_vertex_count, full.raw_vertex_count)
  assert_eq(stream.unique_vertex_count, full.unique_vertex_count)
  assert_eq(stream.boundary_edge_count, full.boundary_edge_count)
  assert_eq(stream.non_manifold_edge_count, full.non_manifold_edge_count)
  if !close(stream.volume, mesh.volume()) {
    fail("\{label}：体积对不上，流式 \{stream.volume} vs 全量 \{mesh.volume()}")
  }
  if !close(stream.surface_area, mesh.surface_area()) {
    fail(
      "\{label}：表面积对不上，流式 \{stream.surface_area} vs 全量 \{mesh.surface_area()}",
    )
  }
}

// ── 和全量解析对照 ──────────────────────────────────────────────────────

///|
test "流式扫描 ASCII 立方体和全量结果一致" {
  let text = unit_cube_ascii()
  let stream = match stream_stl_ascii(text) {
    Ok(r) => r
    Err(msg) => fail("流式扫描失败：\{msg}")
  }
  let mesh = match parse_stl_ascii(text) {
    Ok(m) => m
    Err(msg) => fail("全量解析失败：\{msg}")
  }
  assert_same_as_full(stream, mesh, "立方体")
}

///|
test "流式扫描二进制立方体和全量结果一致" {
  // 用全量解析器写一个二进制文件出来，再流式扫它
  let bytes = write_stl_binary(cube_mesh())
  let stream = match stream_stl_binary(bytes) {
    Ok(r) => r
    Err(msg) => fail("流式扫描失败：\{msg}")
  }
  let mesh = match parse_stl_binary(bytes) {
    Ok(m) => m
    Err(msg) => fail("全量解析失败：\{msg}")
  }
  assert_same_as_full(stream, mesh, "二进制立方体")
}

///|
/// 程序生成一个 n×n 的方格网，三角形数 = 2n²。
///
/// 不用仓库里的示例文件，是因为库包不能 import `@fs`；
/// 而且生成的网格参数可控，想看多大就多大。
fn grid_mesh(n : Int) -> Mesh {
  let triangles : Array[Triangle] = []
  for i = 0; i < n; i = i + 1 {
    for j = 0; j < n; j = j + 1 {
      let x = i.to_double()
      let y = j.to_double()
      let a = Vec3::new(x, y, 0.0)
      let b = Vec3::new(x + 1.0, y, 0.0)
      let c = Vec3::new(x + 1.0, y + 1.0, 0.0)
      let d = Vec3::new(x, y + 1.0, 0.0)
      triangles.push(Triangle::from_vertices(a, b, c))
      triangles.push(Triangle::from_vertices(a, c, d))
    }
  }
  Mesh::new(triangles)
}

///|
test "流式扫描大网格和全量结果一致" {
  // 32×32 的方格网 = 2048 个三角形，能覆盖累加过程里的各种情况。
  // 这是个开放曲面（有边界），所以顺便验证了边界边的统计
  let mesh = grid_mesh(32)
  assert_eq(mesh.triangle_count(), 2048)
  let bytes = write_stl_binary(mesh)
  let stream = match stream_stl_binary(bytes) {
    Ok(r) => r
    Err(msg) => fail("流式扫描失败：\{msg}")
  }
  assert_same_as_full(stream, mesh, "方格网")
}

///|
test "开放曲面的边界边统计正确" {
  // 一个 n×n 的方格网，外边界是 4n 条边
  let n = 8
  let mesh = grid_mesh(n)
  let stream = match stream_stl_binary(write_stl_binary(mesh)) {
    Ok(r) => r
    Err(msg) => fail("失败：\{msg}")
  }
  assert_eq(stream.boundary_edge_count, 4 * n)
  assert_false(stream.is_watertight())
}

// ── 破洞要能查出来 ──────────────────────────────────────────────────────

///|
test "流式扫描能查出水密性" {
  // 立方体少一个三角形：3 条边界边
  let mesh = cube_mesh_without(1)
  let stream = match stream_stl_binary(write_stl_binary(mesh)) {
    Ok(r) => r
    Err(msg) => fail("流式扫描失败：\{msg}")
  }
  assert_eq(stream.boundary_edge_count, 3)
  assert_false(stream.is_watertight())
  assert_same_as_full(stream, mesh, "破洞立方体")
}

///|
test "完好的立方体流式扫描说水密" {
  let stream = match stream_stl_ascii(unit_cube_ascii()) {
    Ok(r) => r
    Err(msg) => fail("失败：\{msg}")
  }
  assert_true(stream.is_watertight())
  assert_eq(stream.boundary_edge_count, 0)
  assert_eq(stream.non_manifold_edge_count, 0)
}

// ── 边界情况 ────────────────────────────────────────────────────────────

///|
test "流式扫描空二进制 STL 报错" {
  let bytes = write_stl_binary(Mesh::empty())
  match stream_stl_binary(bytes) {
    Ok(_) => fail("零个三角形不该成功")
    Err(msg) => assert_true(msg.contains("一个三角形都没有"))
  }
}

///|
test "流式扫描截断的二进制 STL 报错" {
  let bytes = write_stl_binary(cube_mesh())
  // 砍掉一半
  let half = Bytes::from_array(bytes.to_fixedarray()[:100])
  match stream_stl_binary(half) {
    Ok(_) => fail("截断的文件不该成功")
    Err(msg) => assert_true(msg.contains("截断"))
  }
}

///|
test "流式扫描空 ASCII 报错" {
  match stream_stl_ascii("") {
    Ok(_) => fail("空文本不该成功")
    Err(msg) => assert_true(msg.contains("一个三角形都没有"))
  }
}

///|
test "流式扫描退化三角形" {
  // 三个点重合的三角形，边不该被计进拓扑统计
  let text = "solid x\n  facet normal 0 0 1\n    outer loop\n      vertex 0 0 0\n      vertex 0 0 0\n      vertex 0 0 0\n    endloop\n  endfacet\nendsolid x\n"
  let stream = match stream_stl_ascii(text) {
    Ok(r) => r
    Err(msg) => fail("失败：\{msg}")
  }
  assert_eq(stream.triangle_count, 1)
  assert_eq(stream.unique_vertex_count, 1)
  // 三条边全是自环，一条都不该记
  assert_eq(stream.boundary_edge_count, 0)
}

// ── 分块扫描 ────────────────────────────────────────────────────────────

///|
/// 从字节数组里切一段出来。
fn slice_bytes(data : Bytes, from : Int, to : Int) -> Bytes {
  let out : Array[Byte] = []
  for i = from; i < to; i = i + 1 {
    out.push(data[i])
  }
  Bytes::from_array(out)
}

///|
/// 按指定的块大小喂给分块扫描器。
fn scan_in_chunks(data : Bytes, chunk : Int) -> Result[StreamReport, String] {
  let scanner = StlScanner::new()
  let mut pos = 0
  while pos < data.length() {
    let end = if pos + chunk > data.length() {
      data.length()
    } else {
      pos + chunk
    }
    scanner.feed(slice_bytes(data, pos, end))
    pos = end
  }
  scanner.finish()
}

///|
test "分块扫描和全量结果一致" {
  let mesh = cube_mesh_without(1)
  let bytes = write_stl_binary(mesh)
  let report = match scan_in_chunks(bytes, 50) {
    Ok(r) => r
    Err(msg) => fail("分块扫描失败：\{msg}")
  }
  assert_same_as_full(report, mesh, "分块扫描")
}

///|
test "块边界不对齐也能正确处理" {
  // 故意用 7 字节一块 —— 不是 50 的倍数，也不是 84 的倍数，
  // 逼着扫描器把跨块的记录拼起来。这是最容易写错的地方：
  // 如果实现里假设「每次 feed 都是完整记录」，这里就会算出垃圾
  let mesh = cube_mesh()
  let bytes = write_stl_binary(mesh)
  for chunk in [1, 3, 7, 13, 49, 51, 83, 85, 1000] {
    let report = match scan_in_chunks(bytes, chunk) {
      Ok(r) => r
      Err(msg) => fail("块大小 \{chunk} 失败：\{msg}")
    }
    assert_same_as_full(report, mesh, "块大小 \{chunk}")
  }
}

///|
test "一次喂完和分块喂结果相同" {
  let mesh = cube_mesh_without(2)
  let bytes = write_stl_binary(mesh)
  let one = match scan_in_chunks(bytes, bytes.length()) {
    Ok(r) => r
    Err(msg) => fail("失败：\{msg}")
  }
  let many = match scan_in_chunks(bytes, 11) {
    Ok(r) => r
    Err(msg) => fail("失败：\{msg}")
  }
  assert_eq(one.boundary_edge_count, many.boundary_edge_count)
  assert_true(close(one.volume, many.volume))
  assert_eq(one.unique_vertex_count, many.unique_vertex_count)
}

///|
test "分块扫描截断的文件要报错" {
  let bytes = write_stl_binary(cube_mesh())
  // 只喂前 200 字节（不到 3 个三角形）
  let scanner = StlScanner::new()
  scanner.feed(slice_bytes(bytes, 0, 200))
  match scanner.finish() {
    Ok(_) => fail("截断的文件不该成功")
    Err(msg) => assert_true(msg.contains("截断") && msg.contains("12"))
  }
}

///|
test "分块扫描空文件报错" {
  let scanner = StlScanner::new()
  match scanner.finish() {
    Ok(_) => fail("空文件不该成功")
    Err(msg) => assert_true(msg.contains("84 字节"))
  }
}

///|
test "分块扫描完好的立方体说水密" {
  let bytes = write_stl_binary(cube_mesh())
  let report = match scan_in_chunks(bytes, 37) {
    Ok(r) => r
    Err(msg) => fail("失败：\{msg}")
  }
  assert_true(report.is_watertight())
  assert_eq(report.triangle_count, 12)
  assert_eq(report.unique_vertex_count, 8)
}
