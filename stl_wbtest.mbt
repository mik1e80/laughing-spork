// 白盒测试：STL 解析与几何计算。

///|
/// 浮点比较。几何计算有累加误差，不能用 `==`。
fn close(a : Double, b : Double) -> Bool {
  (a - b).abs() < 1.0e-9
}

///|
/// 单位立方体 [0,1]³ 的 12 个三角形，按外向法线绕序。
///
/// 这个立方体是整套测试的基准：体积必然是 1、表面积必然是 6、
/// 包围盒必然是 1×1×1。任何一个环节错了，这几个数就对不上。
fn unit_cube_triangles() -> Array[(Vec3, Vec3, Vec3)] {
  let v000 = Vec3::new(0.0, 0.0, 0.0)
  let v100 = Vec3::new(1.0, 0.0, 0.0)
  let v110 = Vec3::new(1.0, 1.0, 0.0)
  let v010 = Vec3::new(0.0, 1.0, 0.0)
  let v001 = Vec3::new(0.0, 0.0, 1.0)
  let v101 = Vec3::new(1.0, 0.0, 1.0)
  let v111 = Vec3::new(1.0, 1.0, 1.0)
  let v011 = Vec3::new(0.0, 1.0, 1.0)
  [
    // 底面 z=0，法线 (0,0,-1)
    (v000, v010, v110),
    (v000, v110, v100),
    // 顶面 z=1，法线 (0,0,1)
    (v001, v101, v111),
    (v001, v111, v011),
    // 前面 y=0，法线 (0,-1,0)
    (v000, v100, v101),
    (v000, v101, v001),
    // 后面 y=1，法线 (0,1,0)
    (v010, v011, v111),
    (v010, v111, v110),
    // 左面 x=0，法线 (-1,0,0)
    (v000, v001, v011),
    (v000, v011, v010),
    // 右面 x=1，法线 (1,0,0)
    (v100, v110, v111),
    (v100, v111, v101),
  ]
}

///|
/// 把立方体写成 ASCII STL 文本，用来测解析器。
fn unit_cube_ascii() -> String {
  let parts : Array[String] = ["solid cube\n"]
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    let n = b.sub(a).cross(c.sub(a)).normalize()
    parts.push(
      "  facet normal \{n.x} \{n.y} \{n.z}\n" +
      "    outer loop\n" +
      "      vertex \{a.x} \{a.y} \{a.z}\n" +
      "      vertex \{b.x} \{b.y} \{b.z}\n" +
      "      vertex \{c.x} \{c.y} \{c.z}\n" +
      "    endloop\n" +
      "  endfacet\n",
    )
  }
  parts.push("endsolid cube\n")
  parts.join("")
}

// ── 几何计算 ────────────────────────────────────────────────────────────

///|
test "Vec3 叉乘" {
  let x = Vec3::new(1.0, 0.0, 0.0)
  let y = Vec3::new(0.0, 1.0, 0.0)
  let z = x.cross(y)
  assert_true(close(z.x, 0.0) && close(z.y, 0.0) && close(z.z, 1.0))
}

///|
test "Vec3 点乘与模长" {
  let a = Vec3::new(3.0, 4.0, 0.0)
  assert_true(close(a.length(), 5.0))
  let b = Vec3::new(1.0, 0.0, 0.0)
  assert_true(close(a.dot(b), 3.0))
}

///|
test "Vec3 单位化" {
  let v = Vec3::new(0.0, 0.0, 5.0).normalize()
  assert_true(close(v.z, 1.0))
}

///|
test "Vec3 零向量单位化不炸" {
  // 退化面会算出零法线，normalize 必须原样返回而不是产生 NaN
  let zero = Vec3::new(0.0, 0.0, 0.0).normalize()
  assert_true(close(zero.x, 0.0) && close(zero.y, 0.0) && close(zero.z, 0.0))
}

///|
test "三角形面积" {
  let t = Triangle::from_vertices(
    Vec3::new(0.0, 0.0, 0.0),
    Vec3::new(1.0, 0.0, 0.0),
    Vec3::new(0.0, 1.0, 0.0),
  )
  assert_true(close(t.area(), 0.5))
}

///|
test "退化三角形的面积是零" {
  // 三个点共线
  let t = Triangle::from_vertices(
    Vec3::new(0.0, 0.0, 0.0),
    Vec3::new(1.0, 0.0, 0.0),
    Vec3::new(2.0, 0.0, 0.0),
  )
  assert_true(close(t.area(), 0.0))
}

// ── 网格整体 ────────────────────────────────────────────────────────────

///|
test "立方体的体积是 1" {
  let triangles : Array[Triangle] = []
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    triangles.push(Triangle::from_vertices(a, b, c))
  }
  let mesh = Mesh::new(triangles)
  let mut volume = 0.0
  for t in mesh.triangles {
    volume = volume + t.signed_volume()
  }
  // 所有面的贡献累加，外部的正负抵消，剩下的就是体积
  assert_true(close(volume, 1.0))
}

///|
test "立方体的表面积是 6" {
  let triangles : Array[Triangle] = []
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    triangles.push(Triangle::from_vertices(a, b, c))
  }
  let mut area = 0.0
  for t in triangles {
    area = area + t.area()
  }
  assert_true(close(area, 6.0))
}

///|
test "立方体的包围盒是 1×1×1" {
  let triangles : Array[Triangle] = []
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    triangles.push(Triangle::from_vertices(a, b, c))
  }
  let box = match Mesh::new(triangles).bounding_box() {
    Some(b) => b
    None => fail("立方体应该有包围盒")
  }
  let size = box.size()
  assert_true(close(size.x, 1.0) && close(size.y, 1.0) && close(size.z, 1.0))
  assert_true(close(box.min.x, 0.0) && close(box.max.x, 1.0))
}

///|
test "空网格没有包围盒" {
  assert_true(Mesh::empty().bounding_box() is None)
}

// ── ASCII 解析 ──────────────────────────────────────────────────────────

///|
test "解析 ASCII STL 得到 12 个三角形" {
  let mesh = match parse_stl_ascii(unit_cube_ascii()) {
    Ok(m) => m
    Err(msg) => fail("解析不该失败：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 12)
}

///|
test "解析出来的立方体体积仍然是 1" {
  // 这一步把「解析」和「几何」串起来验证：文本读错一个顶点，体积就不对
  let mesh = match parse_stl_ascii(unit_cube_ascii()) {
    Ok(m) => m
    Err(msg) => fail("解析不该失败：\{msg}")
  }
  let mut volume = 0.0
  for t in mesh.triangles {
    volume = volume + t.signed_volume()
  }
  assert_true(close(volume, 1.0))
}

///|
test "ASCII 解析出来的法线和自己算的一致" {
  let mesh = match parse_stl_ascii(unit_cube_ascii()) {
    Ok(m) => m
    Err(msg) => fail("解析不该失败：\{msg}")
  }
  for t in mesh.triangles {
    let computed = t.computed_normal()
    assert_true(close(t.normal.x, computed.x))
    assert_true(close(t.normal.y, computed.y))
    assert_true(close(t.normal.z, computed.z))
  }
}

///|
test "ASCII 解析容忍多余空白和空行" {
  let text = "solid x\n\n\n   facet normal 0 0 1\n\t outer loop\n      vertex 0 0 0\n      vertex 1 0 0\n      vertex 0 1 0\n    endloop\n  endfacet\n\nendsolid x\n"
  let mesh = match parse_stl_ascii(text) {
    Ok(m) => m
    Err(msg) => fail("解析不该失败：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 1)
}

///|
test "ASCII 解析对坏数字给出带行号的错误" {
  let text = "solid x\n  facet normal 0 0 1\n    outer loop\n      vertex 0 0 0\n      vertex abc 0 0\n      vertex 0 1 0\n    endloop\n  endfacet\nendsolid x\n"
  match parse_stl_ascii(text) {
    Ok(_) => fail("坏数字不该解析成功")
    Err(msg) => assert_true(msg.contains("第 5 行") && msg.contains("abc"))
  }
}

///|
test "ASCII 里顶点数不对要报错" {
  let text = "solid x\n  facet normal 0 0 1\n    outer loop\n      vertex 0 0 0\n      vertex 1 0 0\n    endloop\n  endfacet\nendsolid x\n"
  match parse_stl_ascii(text) {
    Ok(_) => fail("只有两个顶点不该成功")
    Err(msg) => assert_true(msg.contains("2 个顶点"))
  }
}

///|
test "空文本不是合法的 ASCII STL" {
  match parse_stl_ascii("") {
    Ok(_) => fail("空文本不该解析成功")
    Err(msg) => assert_true(msg.contains("一个三角形都没有"))
  }
}

// ── 二进制解析 ──────────────────────────────────────────────────────────

///|
/// 把一个单三角形打包成二进制 STL 字节，用来测二进制解析。
///
/// 手写字节而不是靠编码器，是为了让测试独立于任何编码代码——
/// 如果两边用同一份实现，写错了也是「自洽」的，测不出来。
fn single_triangle_binary() -> Bytes {
  let buf : Array[Byte] = []
  // 80 字节文件头
  for i = 0; i < 80; i = i + 1 {
    buf.push(b'\x00')
  }
  // 三角形数量 = 1，小端
  buf.push(b'\x01')
  buf.push(b'\x00')
  buf.push(b'\x00')
  buf.push(b'\x00')
  // 法线 (0, 0, 1) 和三个顶点，各 4 字节小端 float32
  let floats : Array[Float] = [
    0.0, 0.0, 1.0, // 法线
     0.0, 0.0, 0.0, // a
     1.0, 0.0, 0.0, // b
     0.0, 1.0, 0.0, // c
  ]
  for f in floats {
    let bits = f.reinterpret_as_uint().reinterpret_as_int()
    buf.push((bits & 0xFF).to_byte())
    buf.push(((bits >> 8) & 0xFF).to_byte())
    buf.push(((bits >> 16) & 0xFF).to_byte())
    buf.push(((bits >> 24) & 0xFF).to_byte())
  }
  // 2 字节属性，标准里没有含义，随便填
  buf.push(b'\x00')
  buf.push(b'\x00')
  Bytes::from_array(buf)
}

///|
test "解析二进制 STL" {
  let mesh = match parse_stl_binary(single_triangle_binary()) {
    Ok(m) => m
    Err(msg) => fail("解析不该失败：\{msg}")
  }
  assert_eq(mesh.triangle_count(), 1)
  let t = mesh.triangles[0]
  assert_true(close(t.a.x, 0.0) && close(t.a.y, 0.0) && close(t.a.z, 0.0))
  assert_true(close(t.b.x, 1.0))
  assert_true(close(t.c.y, 1.0))
  assert_true(close(t.normal.z, 1.0))
}

///|
/// 把二进制 STL 头部的「三角形数量」改成别的值，用来伪造损坏文件。
fn with_claimed_count(data : Bytes, count : Int) -> Bytes {
  let arr = data.to_fixedarray()
  arr[80] = (count & 0xFF).to_byte()
  arr[81] = ((count >> 8) & 0xFF).to_byte()
  arr[82] = ((count >> 16) & 0xFF).to_byte()
  arr[83] = ((count >> 24) & 0xFF).to_byte()
  Bytes::from_array(arr)
}

///|
test "二进制 STL 长度对不上要报错" {
  // 头部说有 100 个三角形，实际只给了 1 个
  let lying = with_claimed_count(single_triangle_binary(), 100)
  match parse_stl_binary(lying) {
    Ok(_) => fail("长度对不上的文件不该解析成功")
    Err(msg) => assert_true(msg.contains("截断"))
  }
}

///|
test "头部数量对不上时不会被误判成二进制" {
  // 这个很关键：判断格式靠的就是长度校验，数量撒谎时必须落到别的分支，
  // 而不是硬按二进制读出一堆垃圾
  let lying = with_claimed_count(single_triangle_binary(), 100)
  let format = detect_format(lying)
  if format is Binary {
    fail("数量对不上却仍然判断成二进制")
  }
}

///|
test "太短的数据不是二进制 STL" {
  let tiny = Bytes::from_array([b'\x01', b'\x02', b'\x03'])
  match parse_stl_binary(tiny) {
    Ok(_) => fail("3 字节不该解析成功")
    Err(msg) => assert_true(msg.contains("84 字节"))
  }
}

// ── 格式判断 ────────────────────────────────────────────────────────────

///|
test "认得出二进制 STL" {
  assert_true(detect_format(single_triangle_binary()) is Binary)
}

///|
test "认得出 ASCII STL" {
  assert_true(detect_format(@utf8.encode(unit_cube_ascii())) is Ascii)
}

///|
test "认不出的数据" {
  let junk = Bytes::from_array([b'\x01', b'\x02', b'\x03', b'\x04', b'\x05'])
  assert_true(detect_format(junk) is Unknown)
  match parse_stl(junk) {
    Ok(_) => fail("垃圾数据不该解析成功")
    Err(msg) => assert_true(msg.contains("认不出"))
  }
}

///|
test "parse_stl 自动走对分支" {
  let from_ascii = match parse_stl(@utf8.encode(unit_cube_ascii())) {
    Ok(m) => m
    Err(msg) => fail("ASCII 不该失败：\{msg}")
  }
  assert_eq(from_ascii.triangle_count(), 12)

  let from_binary = match parse_stl(single_triangle_binary()) {
    Ok(m) => m
    Err(msg) => fail("二进制不该失败：\{msg}")
  }
  assert_eq(from_binary.triangle_count(), 1)
}
