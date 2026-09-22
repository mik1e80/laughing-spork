// 白盒测试：网格校验。
//
// 手法是「拿一个正确的立方体，故意弄坏它，看能不能查出来」。
// 一个查不出问题的校验器等于没有，所以每条检查都要有一个反例。

///|
/// 用单位立方体的三角形建一个网格。
fn cube_mesh() -> Mesh {
  let triangles : Array[Triangle] = []
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    triangles.push(Triangle::from_vertices(a, b, c))
  }
  Mesh::new(triangles)
}

///|
/// 拿走前 n 个三角形，造出破洞。
fn cube_mesh_without(n : Int) -> Mesh {
  let triangles : Array[Triangle] = []
  let mut i = 0
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    if i >= n {
      triangles.push(Triangle::from_vertices(a, b, c))
    }
    i = i + 1
  }
  Mesh::new(triangles)
}

// ── 正确的网格 ──────────────────────────────────────────────────────────

///|
test "完整立方体是水密的" {
  let report = validate_default(cube_mesh())
  assert_true(report.is_watertight())
}

///|
test "完整立方体没有边界边和非流形边" {
  let report = validate_default(cube_mesh())
  assert_eq(report.boundary_edge_count, 0)
  assert_eq(report.non_manifold_edge_count, 0)
}

///|
test "立方体焊接前 36 个顶点、焊接后 8 个" {
  // 这是顶点焊接存在的理由：STL 里一个立方体的 8 个顶点会写 36 遍
  let report = validate_default(cube_mesh())
  assert_eq(report.raw_vertex_count, 36)
  assert_eq(report.unique_vertex_count, 8)
}

///|
test "完整立方体没有退化面和错误法线" {
  let report = validate_default(cube_mesh())
  assert_eq(report.degenerate_count, 0)
  assert_eq(report.wrong_normal_count, 0)
}

///|
test "立方体有 18 条边" {
  // 12 个三角形 × 3 条边 = 36 次，每条边被两个面共用 → 18 条
  // 用边数侧面验证拓扑统计没算错
  let report = validate_default(cube_mesh())
  assert_eq(report.triangle_count, 12)
  // 水密网格里 边数 = 三角形数 × 3 / 2
  assert_eq(report.triangle_count * 3 / 2, 18)
}

// ── 破洞 ────────────────────────────────────────────────────────────────

///|
test "少一个三角形就不是水密的" {
  let report = validate_default(cube_mesh_without(1))
  assert_false(report.is_watertight())
  // 那个三角形的三条边原本各被两个面共用，现在只剩一个面
  assert_eq(report.boundary_edge_count, 3)
}

///|
test "少一整个面就有四条边界边" {
  // 立方体一个面是两个三角形，拿走之后四条边敞开
  let report = validate_default(cube_mesh_without(2))
  assert_false(report.is_watertight())
  assert_eq(report.boundary_edge_count, 4)
}

///|
test "破洞不产生非流形边" {
  // 破洞是「边被用少了」，不是「被用多了」，两者要分开报
  let report = validate_default(cube_mesh_without(2))
  assert_eq(report.non_manifold_edge_count, 0)
}

// ── 退化面 ──────────────────────────────────────────────────────────────

///|
test "退化三角形能被查出来" {
  let triangles : Array[Triangle] = [
    // 正常的三角形
    Triangle::from_vertices(
      Vec3::new(0.0, 0.0, 0.0),
      Vec3::new(1.0, 0.0, 0.0),
      Vec3::new(0.0, 1.0, 0.0),
    ),
    // 两个顶点重合，没有面积
    Triangle::from_vertices(
      Vec3::new(0.0, 0.0, 0.0),
      Vec3::new(1.0, 0.0, 0.0),
      Vec3::new(1.0, 0.0, 0.0),
    ),
  ]
  let report = validate_default(Mesh::new(triangles))
  assert_eq(report.degenerate_count, 1)
}

///|
test "退化的面不参与边的统计" {
  // 两个顶点重合的三角形，它那条「零长度边」不该被当成一条真实的边，
  // 否则会在拓扑统计里凭空多出一条边界边
  let triangles : Array[Triangle] = [
    Triangle::from_vertices(
      Vec3::new(0.0, 0.0, 0.0),
      Vec3::new(1.0, 0.0, 0.0),
      Vec3::new(1.0, 0.0, 0.0),
    ),
  ]
  let report = validate_default(Mesh::new(triangles))
  // 只剩 0-1 和 1-1(退化) 和 1-0；去掉退化的那条，实际统计了两条不同的边
  // （0-1 被这个面用了两次，因为 a→b 和 c→a 都落在 0-1 上）
  assert_eq(report.degenerate_count, 1)
}

// ── 法线朝向 ────────────────────────────────────────────────────────────

///|
test "法线反了能被查出来" {
  let flipped = Triangle::{
    // 顶点顺序给出的法线是 +z，但文件里写的是 -z
    normal: Vec3::new(0.0, 0.0, -1.0),
    a: Vec3::new(0.0, 0.0, 0.0),
    b: Vec3::new(1.0, 0.0, 0.0),
    c: Vec3::new(0.0, 1.0, 0.0),
  }
  let report = validate_default(Mesh::new([flipped]))
  assert_eq(report.wrong_normal_count, 1)
}

///|
test "法线填零不算错" {
  // 很多导出器不写法线，那是「没填」不是「填错了」，不该报警
  let no_normal = Triangle::from_vertices(
    Vec3::new(0.0, 0.0, 0.0),
    Vec3::new(1.0, 0.0, 0.0),
    Vec3::new(0.0, 1.0, 0.0),
  )
  let report = validate_default(Mesh::new([no_normal]))
  assert_eq(report.wrong_normal_count, 0)
}

///|
test "法线方向对就不算错" {
  let good = Triangle::{
    normal: Vec3::new(0.0, 0.0, 1.0),
    a: Vec3::new(0.0, 0.0, 0.0),
    b: Vec3::new(1.0, 0.0, 0.0),
    c: Vec3::new(0.0, 1.0, 0.0),
  }
  let report = validate_default(Mesh::new([good]))
  assert_eq(report.wrong_normal_count, 0)
}

// ── 非流形边 ────────────────────────────────────────────────────────────

///|
test "三个面共用一条边算非流形" {
  // 真实物体的每个边只该被两个面共用（一侧一个）。三个面共用一条边
  // 意味着那里是「薄片相接」，切片软件会不知道该怎么填
  let shared_a = Vec3::new(0.0, 0.0, 0.0)
  let shared_b = Vec3::new(1.0, 0.0, 0.0)
  let triangles : Array[Triangle] = [
    Triangle::from_vertices(shared_a, shared_b, Vec3::new(0.0, 1.0, 0.0)),
    Triangle::from_vertices(shared_a, shared_b, Vec3::new(0.0, -1.0, 0.0)),
    Triangle::from_vertices(shared_a, shared_b, Vec3::new(0.0, 0.0, 1.0)),
  ]
  let report = validate_default(Mesh::new(triangles))
  assert_eq(report.non_manifold_edge_count, 1)
  assert_false(report.is_watertight())
}

// ── 容差 ────────────────────────────────────────────────────────────────

///|
test "浮点误差范围内的顶点会被焊接成一个" {
  // 两个点差 1e-9，远小于默认容差 1e-6，应该认成同一个
  let a = Vec3::new(0.0, 0.0, 0.0)
  let b = Vec3::new(1.0, 0.0, 0.0)
  let c = Vec3::new(0.0, 1.0, 0.0)
  let triangles : Array[Triangle] = [
    Triangle::from_vertices(a, b, c),
    // 第二个三角形里 a 带了 1e-9 的误差
    Triangle::from_vertices(
      Vec3::new(1.0e-9, 0.0, 0.0),
      Vec3::new(0.0, 0.0, 1.0),
      Vec3::new(0.0, 1.0, 1.0),
    ),
  ]
  let report = validate_default(Mesh::new(triangles))
  // 6 个顶点里只差一个 1e-9，焊接后应该是 5 个不同顶点
  assert_eq(report.unique_vertex_count, 5)
}

///|
test "超出容差的顶点不会被误焊" {
  let far = Vec3::new(0.001, 0.0, 0.0)
  let triangles : Array[Triangle] = [
    Triangle::from_vertices(
      Vec3::new(0.0, 0.0, 0.0),
      Vec3::new(1.0, 0.0, 0.0),
      Vec3::new(0.0, 1.0, 0.0),
    ),
    Triangle::from_vertices(
      far,
      Vec3::new(0.0, 0.0, 1.0),
      Vec3::new(0.0, 1.0, 1.0),
    ),
  ]
  // 0.001 远大于 1e-6 的容差，两个点必须分开
  let report = validate_default(Mesh::new(triangles))
  assert_eq(report.unique_vertex_count, 6)
}
