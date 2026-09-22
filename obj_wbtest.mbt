// 白盒测试：OBJ 解析。

///|
/// 立方体的 OBJ 文本：8 个顶点 + 6 个四边形面。
///
/// 跟 STL 版对照着看能看出格式差别：STL 要写 36 行 vertex，
/// OBJ 只写 8 行 v 加 6 行 f。
fn cube_obj() -> String {
  "v 0 0 0\n" +
  "v 1 0 0\n" +
  "v 1 1 0\n" +
  "v 0 1 0\n" +
  "v 0 0 1\n" +
  "v 1 0 1\n" +
  "v 1 1 1\n" +
  "v 0 1 1\n" +
  "f 1 4 3 2\n" + // 底面
  "f 5 6 7 8\n" + // 顶面
  "f 1 2 6 5\n" + // 前面
  "f 4 8 7 3\n" + // 后面
  "f 1 5 8 4\n" + // 左面
  "f 2 3 7 6\n" + // 右面
  ""
}

///|
fn parse_or_fail(text : String) -> Mesh raise {
  match parse_obj(text) {
    Ok(mesh) => mesh
    Err(msg) => fail("解析不该失败：\{msg}")
  }
}

// ── 基本解析 ────────────────────────────────────────────────────────────

///|
test "解析最简单的三角形" {
  let mesh = parse_or_fail("v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n")
  assert_eq(mesh.triangle_count(), 1)
  assert_true(close(mesh.triangles[0].b.x, 1.0))
}

///|
test "四边形被三角化成两个三角形" {
  // 四个顶点 + 一个四边形面
  let mesh = parse_or_fail("v 0 0 0\nv 1 0 0\nv 1 1 0\nv 0 1 0\nf 1 2 3 4\n")
  assert_eq(mesh.triangle_count(), 2)
}

///|
test "五边形被三角化成三个三角形" {
  // 扇形三角化：n 个顶点的面产生 n-2 个三角形
  let mesh = parse_or_fail(
    "v 0 0 0\nv 1 0 0\nv 1 1 0\nv 0 1 0\nv -1 0.5 0\nf 1 2 3 4 5\n",
  )
  assert_eq(mesh.triangle_count(), 3)
}

///|
test "立方体的六个四边形变成十二个三角形" {
  let mesh = parse_or_fail(cube_obj())
  assert_eq(mesh.triangle_count(), 12)
}

///|
test "立方体的体积仍然是 1" {
  // 关键测试：OBJ 走的是完全不同的代码路径（查顶点表、扇形三角化），
  // 但算出来的几何必须和 STL 版一致
  let mesh = parse_or_fail(cube_obj())
  assert_true(close(mesh.volume(), 1.0))
}

///|
test "立方体是水密的" {
  let report = validate_default(parse_or_fail(cube_obj()))
  assert_true(report.is_watertight())
  assert_eq(report.unique_vertex_count, 8)
}

// ── 顶点记号的四种写法 ──────────────────────────────────────────────────

///|
test "带纹理坐标的面" {
  let mesh = parse_or_fail("v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1/1 2/2 3/3\n")
  assert_eq(mesh.triangle_count(), 1)
}

///|
test "带法线的面" {
  let mesh = parse_or_fail(
    "v 0 0 0\nv 1 0 0\nv 0 1 0\nvn 0 0 1\nf 1//1 2//1 3//1\n",
  )
  assert_eq(mesh.triangle_count(), 1)
  // 文件里三个顶点共用一个法线，应该被用上
  assert_true(close(mesh.triangles[0].normal.z, 1.0))
}

///|
test "带纹理和法线的面" {
  let mesh = parse_or_fail(
    "v 0 0 0\nv 1 0 0\nv 0 1 0\nvn 0 0 1\nf 1/1/1 2/2/1 3/3/1\n",
  )
  assert_eq(mesh.triangle_count(), 1)
  assert_true(close(mesh.triangles[0].normal.z, 1.0))
}

// ── 编号的规矩 ──────────────────────────────────────────────────────────

///|
test "编号从 1 开始" {
  // 顶点表里第 1 号是 (0,0,0)，不是第 0 号
  let mesh = parse_or_fail("v 9 9 9\nv 1 0 0\nv 0 1 0\nf 2 3 2\n")
  assert_true(close(mesh.triangles[0].a.x, 1.0))
}

///|
test "负数编号从末尾往前数" {
  // -1 是最后一个顶点，-3 是倒数第三个
  let mesh = parse_or_fail("v 0 0 0\nv 1 0 0\nv 0 1 0\nf -3 -2 -1\n")
  assert_eq(mesh.triangle_count(), 1)
  assert_true(close(mesh.triangles[0].a.x, 0.0))
  assert_true(close(mesh.triangles[0].b.x, 1.0))
}

///|
test "编号 0 是错的" {
  match parse_obj("v 0 0 0\nv 1 0 0\nv 0 1 0\nf 0 2 3\n") {
    Ok(_) => fail("编号 0 不该成功")
    Err(msg) => assert_true(msg.contains("不能是 0"))
  }
}

///|
test "编号超出范围要报错" {
  match parse_obj("v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 99\n") {
    Ok(_) => fail("超出范围不该成功")
    Err(msg) => assert_true(msg.contains("超出范围") && msg.contains("99"))
  }
}

// ── 宽松处理 ────────────────────────────────────────────────────────────

///|
test "注释、分组、材质行都跳过" {
  let mesh = parse_or_fail(
    "# 这是一个立方体\n" +
    "mtllib cube.mtl\n" +
    "v 0 0 0\n" +
    "v 1 0 0\n" +
    "v 0 1 0\n" +
    "g top\n" +
    "usemtl red\n" +
    "s 1\n" +
    "f 1 2 3\n" +
    "",
  )
  assert_eq(mesh.triangle_count(), 1)
}

///|
test "顶点多写了第四个分量也不影响" {
  // OBJ 规范里 v 可以带 w 分量（齐次坐标），实际很少见但要容忍
  let mesh = parse_or_fail("v 0 0 0 1\nv 1 0 0 1\nv 0 1 0 1\nf 1 2 3\n")
  assert_eq(mesh.triangle_count(), 1)
}

///|
test "空 OBJ 报错" {
  match parse_obj("") {
    Ok(_) => fail("空文本不该成功")
    Err(msg) => assert_true(msg.contains("一个面都没有"))
  }
}

///|
test "顶点数不足的面报错" {
  match parse_obj("v 0 0 0\nv 1 0 0\nf 1 2\n") {
    Ok(_) => fail("两个顶点不该成功")
    Err(msg) => assert_true(msg.contains("至少要有 3 个"))
  }
}
