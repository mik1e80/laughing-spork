// 白盒测试：绕向一致性。
//
// 这一块存在的理由就是「水密不等于几何正确」——每条边都被两个面共用
// 的闭合曲面，如果某个面顶点顺序写反了，体积照样是错的。测试的重点
// 就是这个：**坏数据要能被查出来，也要能被修好**。

///|
/// 造一个「某个面绕向反了」的立方体。
fn cube_with_flipped_face() -> Mesh {
  let triangles : Array[Triangle] = []
  let mut i = 0
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    if i == 11 {
      // 对调 b、c，这个面的绕向就反了
      triangles.push(Triangle::from_vertices(a, c, b))
    } else {
      triangles.push(Triangle::from_vertices(a, b, c))
    }
    i = i + 1
  }
  Mesh::new(triangles)
}

///|
/// 造一个「整体朝里」的立方体：所有面都反过来。
fn cube_inside_out() -> Mesh {
  let triangles : Array[Triangle] = []
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    triangles.push(Triangle::from_vertices(a, c, b))
  }
  Mesh::new(triangles)
}

// ── 检查 ────────────────────────────────────────────────────────────────

///|
test "完好的立方体绕向一致" {
  let report = check_winding(cube_mesh(), default_weld_tolerance())
  assert_eq(report.flipped_faces, 0)
  assert_true(report.consistent)
}

///|
test "翻转一个面能被查出来" {
  let report = check_winding(cube_with_flipped_face(), default_weld_tolerance())
  assert_eq(report.flipped_faces, 1)
  assert_false(report.consistent)
}

///|
test "翻转一个面的立方体水密检查看不出问题" {
  // 这条是这个模块存在的理由：拓扑上它完全合法，每条边都被两个面共用。
  // 水密性检查说没问题，但几何是坏的（体积错了）
  let mesh = cube_with_flipped_face()
  let v = validate_default(mesh)
  assert_true(v.is_watertight())
  assert_eq(v.boundary_edge_count, 0)
  // 但体积确实错了
  assert_false(close(mesh.volume(), 1.0))
}

///|
test "整体朝里的立方体有符号体积为负" {
  let report = check_winding(cube_inside_out(), default_weld_tolerance())
  // 所有面朝向一致，只是集体朝里 —— 这不是「写错了」而是「方向反了」
  assert_eq(report.flipped_faces, 0)
  assert_true(report.signed_volume < 0.0)
}

// ── 修复 ────────────────────────────────────────────────────────────────

///|
test "统一绕向之后体积恢复正确" {
  // 这是最关键的用例：修之前体积 0.667，修之后必须回到 1
  let broken = cube_with_flipped_face()
  assert_false(close(broken.volume(), 1.0))

  let fixed = repair(broken, RepairOptions::default())
  assert_eq(fixed.flipped_faces, 1)
  assert_true(close(fixed.mesh.volume(), 1.0))
}

///|
test "翻转的面被翻回来了" {
  let fixed = repair(cube_with_flipped_face(), RepairOptions::default())
  let report = check_winding(fixed.mesh, default_weld_tolerance())
  assert_eq(report.flipped_faces, 0)
  assert_true(report.signed_volume > 0.0)
}

///|
test "整体朝里的网格被翻成朝外" {
  let fixed = repair(cube_inside_out(), RepairOptions::default())
  let report = check_winding(fixed.mesh, default_weld_tolerance())
  assert_true(report.signed_volume > 0.0)
  assert_true(close(fixed.mesh.volume(), 1.0))
  // 整体翻转不算「有面写错了」
  assert_eq(fixed.flipped_faces, 0)
}

///|
test "完好的立方体不会被绕向修复动到" {
  // 回归：不该把本来就对的网格改坏
  let fixed = repair(cube_mesh(), RepairOptions::default())
  assert_eq(fixed.flipped_faces, 0)
  assert_true(close(fixed.mesh.volume(), 1.0))
  assert_eq(fixed.mesh.triangle_count(), 12)
}

///|
test "关掉绕向统一就不动它" {
  let fixed = repair(cube_with_flipped_face(), {
    ..RepairOptions::default(),
    unify_winding: false,
    recompute_normals: false,
    fill_holes: false,
  })
  assert_eq(fixed.flipped_faces, 0)
  // 体积仍然是错的
  assert_false(close(fixed.mesh.volume(), 1.0))
}

///|
test "只修法线的模式不动绕向" {
  // normals_only 的语义是「只改文件里写的法线，不动拓扑」，
  // 绕向属于拓扑，不该被它动
  let fixed = repair(cube_with_flipped_face(), RepairOptions::normals_only())
  assert_eq(fixed.flipped_faces, 0)
  assert_false(close(fixed.mesh.volume(), 1.0))
}

// ── 和别的修复一起 ──────────────────────────────────────────────────────

///|
test "破洞加绕向反了能一起修" {
  // 拿走一个三角形，再把另一个面的绕向反过来
  let triangles : Array[Triangle] = []
  let mut i = 0
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    if i > 0 {
      // 特意挑第 2 个面来翻转。前面几个面都有顶点落在原点上，
      // 它们的四面体体积本来就是 0，翻了体积也不变 —— 那样就测不出
      // 绕向到底有没有被修好
      if i == 2 {
        triangles.push(Triangle::from_vertices(a, c, b))
      } else {
        triangles.push(Triangle::from_vertices(a, b, c))
      }
    }
    i = i + 1
  }
  let broken = Mesh::new(triangles)
  assert_false(validate_default(broken).is_watertight())
  assert_false(close(broken.volume(), 1.0))

  let fixed = repair(broken, RepairOptions::default())
  assert_true(validate_default(fixed.mesh).is_watertight())
  assert_true(close(fixed.mesh.volume(), 1.0))
  assert_true(fixed.filled_holes > 0)
  assert_true(fixed.flipped_faces > 0)
}
