// 白盒测试：网格导出。
//
// 最重要的一条是「往返」：写出去再读回来，必须是同一个网格。
// 导出器写错字节顺序、算错偏移，光看输出是看不出来的，只有读回来才暴露。

// ── 二进制 STL ──────────────────────────────────────────────────────────

///|
test "二进制 STL 往返之后三角形数不变" {
  let original = cube_mesh()
  let bytes = write_stl_binary(original)
  let restored = match parse_stl_binary(bytes) {
    Ok(m) => m
    Err(msg) => fail("自己写的文件读不回来：\{msg}")
  }
  assert_eq(restored.triangle_count(), 12)
}

///|
test "二进制 STL 往返之后体积不变" {
  let original = cube_mesh()
  let restored = match parse_stl_binary(write_stl_binary(original)) {
    Ok(m) => m
    Err(msg) => fail("读不回来：\{msg}")
  }
  assert_true(close(restored.volume(), 1.0))
  assert_true(close(restored.surface_area(), 6.0))
}

///|
test "导出的二进制 STL 长度符合规范" {
  // 84 + 50 × 三角形数，这是格式规定的
  let bytes = write_stl_binary(cube_mesh())
  assert_eq(bytes.length(), 84 + 50 * 12)
}

///|
test "格式判断认得出自己写的二进制 STL" {
  // 这条同时验证了格式判断的长度校验是对的
  let bytes = write_stl_binary(cube_mesh())
  assert_true(detect_format(bytes) is Binary)
}

///|
test "文件头不以 solid 开头" {
  // 有些老软件靠开头是不是 solid 判断 ASCII，写了会被骗到。
  // 这条钉住这个约定
  let bytes = write_stl_binary(cube_mesh())
  let head = bytes.to_unchecked_string(offset=0, length=5)
  assert_false(head.contains("solid"))
}

///|
test "导出时空网格也能写" {
  let bytes = write_stl_binary(Mesh::empty())
  assert_eq(bytes.length(), 84)
  match parse_stl_binary(bytes) {
    Ok(_) => fail("零个三角形的文件不该解析成功")
    Err(msg) => assert_true(msg.contains("一个三角形都没有"))
  }
}

// ── ASCII STL ───────────────────────────────────────────────────────────

///|
test "ASCII STL 往返" {
  let text = write_stl_ascii(cube_mesh(), "cube")
  let restored = match parse_stl_ascii(text) {
    Ok(m) => m
    Err(msg) => fail("读不回来：\{msg}")
  }
  assert_eq(restored.triangle_count(), 12)
  assert_true(close(restored.volume(), 1.0))
}

// ── OBJ ─────────────────────────────────────────────────────────────────

///|
test "OBJ 往返之后体积不变" {
  let restored = match parse_obj(write_obj(cube_mesh())) {
    Ok(m) => m
    Err(msg) => fail("读不回来：\{msg}")
  }
  assert_eq(restored.triangle_count(), 12)
  assert_true(close(restored.volume(), 1.0))
}

///|
test "导出的 OBJ 顶点表是去重过的" {
  // 立方体 12 个三角形，去重后应该只有 8 行 v。
  // 不去重的话会写 36 行，白费了 OBJ 共享顶点表的优势
  let text = write_obj(cube_mesh())
  let mut vertex_lines = 0
  for line in text.split("\n") {
    if line.has_prefix("v ") {
      vertex_lines = vertex_lines + 1
    }
  }
  assert_eq(vertex_lines, 8)
}

///|
test "导出的 OBJ 面是三角形" {
  let text = write_obj(cube_mesh())
  let mut face_lines = 0
  for line in text.split("\n") {
    if line.has_prefix("f ") {
      face_lines = face_lines + 1
    }
  }
  assert_eq(face_lines, 12)
}

///|
test "导出的 OBJ 再读回来仍然水密" {
  // OBJ 的表里每个顶点只出现一次，读回来之后「顶点去重」那一步仍然要
  // 认得出它们是共享的——不然 12 个三角形会看成 36 个独立顶点，
  // 边数就对不上，水密判断会挂
  let restored = match parse_obj(write_obj(cube_mesh())) {
    Ok(m) => m
    Err(msg) => fail("读不回来：\{msg}")
  }
  let report = validate_default(restored)
  assert_true(report.is_watertight())
  assert_eq(report.unique_vertex_count, 8)
}

// ── 法线 ────────────────────────────────────────────────────────────────

///|
test "导出时法线按顶点顺序重算" {
  // 故意造一个法线写反的三角形
  let wrong = Triangle::{
    normal: Vec3::new(0.0, 0.0, -1.0),
    a: Vec3::new(0.0, 0.0, 0.0),
    b: Vec3::new(1.0, 0.0, 0.0),
    c: Vec3::new(0.0, 1.0, 0.0),
  }
  let restored = match parse_stl_binary(write_stl_binary(Mesh::new([wrong]))) {
    Ok(m) => m
    Err(msg) => fail("读不回来：\{msg}")
  }
  // 顶点顺序给出的法线朝 +z，导出的文件里应该是这个
  assert_true(close(restored.triangles[0].normal.z, 1.0))
}

// ── 按后缀选格式 ────────────────────────────────────────────────────────

///|
test "按后缀选导出格式" {
  // .stl 和 .obj 都要能出字节
  assert_true(write_mesh(cube_mesh(), "out.stl") is Ok(_))
  assert_true(write_mesh(cube_mesh(), "out.obj") is Ok(_))
  // 大小写不敏感
  assert_true(write_mesh(cube_mesh(), "out.STL") is Ok(_))
  assert_true(write_mesh(cube_mesh(), "out.OBJ") is Ok(_))
}

///|
test "认不出的后缀要报错" {
  match write_mesh(cube_mesh(), "out.ply") {
    Ok(_) => fail("不支持的后缀不该成功")
    Err(msg) => assert_true(msg.contains(".stl") && msg.contains(".obj"))
  }
}

// ── 修复 + 导出的完整链路 ───────────────────────────────────────────────

///|
test "修好的模型导出再读回来是水密的" {
  // 这是用户实际会走的路径：读进来 → 修复 → 存出去 → 再用别的软件打开。
  // 存出去的文件必须是好的
  let broken = cube_mesh_without(1)
  let fixed = repair(broken, RepairOptions::default())

  let restored_stl = match parse_stl_binary(write_stl_binary(fixed.mesh)) {
    Ok(m) => m
    Err(msg) => fail("STL 读不回来：\{msg}")
  }
  assert_true(validate_default(restored_stl).is_watertight())
  assert_true(close(restored_stl.volume(), 1.0))

  let restored_obj = match parse_obj(write_obj(fixed.mesh)) {
    Ok(m) => m
    Err(msg) => fail("OBJ 读不回来：\{msg}")
  }
  assert_true(validate_default(restored_obj).is_watertight())
  assert_true(close(restored_obj.volume(), 1.0))
}
