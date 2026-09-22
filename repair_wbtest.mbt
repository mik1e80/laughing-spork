// 白盒测试：网格修复。
//
// 手法和校验那边一致：拿正确的立方体故意弄坏，看能不能修回去。
// 修不好和查不出一样没用，所以每条修复都配一个「坏 → 好」的用例。

///|
fn simple_triangle(offset : Double) -> Triangle {
  Triangle::from_vertices(
    Vec3::new(offset, 0.0, 0.0),
    Vec3::new(offset + 1.0, 0.0, 0.0),
    Vec3::new(offset, 1.0, 0.0),
  )
}

// ── 补洞 ────────────────────────────────────────────────────────────────

///|
test "破洞的立方体修完变水密" {
  // 这是修复功能的头号用例：少一个三角形的立方体，补完应该重新水密
  let broken = cube_mesh_without(1)
  let before = validate_default(broken)
  assert_false(before.is_watertight())
  assert_eq(before.boundary_edge_count, 3)

  let fixed = repair(broken, RepairOptions::default())
  let after = validate_default(fixed.mesh)
  assert_true(after.is_watertight())
  assert_eq(after.boundary_edge_count, 0)
}

///|
test "补洞补上了三角形" {
  let fixed = repair(cube_mesh_without(1), RepairOptions::default())
  // 少了一个，补回来一个
  assert_eq(fixed.mesh.triangle_count(), 12)
  assert_true(fixed.filled_holes > 0)
}

///|
test "修完的体积回到正确的值" {
  // 注意：cube_mesh_without 删的第一个三角形有个顶点在原点，它的四面体
  // 体积本来就是 0，所以删掉它体积不变。换个会真正影响体积的洞来测。
  let broken = cube_mesh_without(2)
  let fixed = repair(broken, RepairOptions::default())
  assert_true(close(fixed.mesh.volume(), 1.0))
}

///|
test "少一整个面也能补回来" {
  // 拿走两个三角形，洞是个四边形
  let broken = cube_mesh_without(2)
  assert_eq(validate_default(broken).boundary_edge_count, 4)

  let fixed = repair(broken, RepairOptions::default())
  assert_true(validate_default(fixed.mesh).is_watertight())
}

///|
test "完好的网格补洞不会多出三角形" {
  // 没有洞就不该乱补。这条防止「补洞」把好网格改坏
  let fixed = repair(cube_mesh(), RepairOptions::default())
  assert_eq(fixed.mesh.triangle_count(), 12)
  assert_eq(fixed.added_triangles, 0)
  assert_eq(fixed.filled_holes, 0)
}

///|
test "关掉补洞就不动拓扑" {
  let broken = cube_mesh_without(1)
  let fixed = repair(broken, {
    ..RepairOptions::default(),
    fill_holes: false,
    recompute_normals: false,
  })
  assert_eq(fixed.mesh.triangle_count(), 11)
  assert_false(validate_default(fixed.mesh).is_watertight())
}

// ── 删退化面 ────────────────────────────────────────────────────────────

///|
test "退化面被删掉" {
  let triangles : Array[Triangle] = [
    simple_triangle(0.0),
    // 两个顶点重合
    Triangle::from_vertices(
      Vec3::new(5.0, 0.0, 0.0),
      Vec3::new(6.0, 0.0, 0.0),
      Vec3::new(6.0, 0.0, 0.0),
    ),
  ]
  let fixed = repair(Mesh::new(triangles), {
    ..RepairOptions::default(),
    fill_holes: false,
  })
  assert_eq(fixed.removed_degenerate, 1)
  assert_eq(fixed.mesh.triangle_count(), 1)
}

///|
test "关掉删退化面就留着" {
  let triangles : Array[Triangle] = [
    Triangle::from_vertices(
      Vec3::new(5.0, 0.0, 0.0),
      Vec3::new(6.0, 0.0, 0.0),
      Vec3::new(6.0, 0.0, 0.0),
    ),
  ]
  let fixed = repair(Mesh::new(triangles), {
    ..RepairOptions::default(),
    drop_degenerate: false,
  })
  assert_eq(fixed.removed_degenerate, 0)
  assert_eq(fixed.mesh.triangle_count(), 1)
}

// ── 删重复面 ────────────────────────────────────────────────────────────

///|
test "重复的面被删掉" {
  let t = simple_triangle(0.0)
  let fixed = repair(Mesh::new([t, t]), {
    ..RepairOptions::default(),
    fill_holes: false,
  })
  assert_eq(fixed.removed_duplicates, 1)
  assert_eq(fixed.mesh.triangle_count(), 1)
}

///|
test "顶点顺序不同但同一个面也算重复" {
  // (1,2,3) 和 (2,3,1) 是同一个三角形，只是从不同顶点开始写的
  let a = simple_triangle(0.0)
  let b = Triangle::from_vertices(a.b, a.c, a.a)
  let fixed = repair(Mesh::new([a, b]), {
    ..RepairOptions::default(),
    fill_holes: false,
  })
  assert_eq(fixed.removed_duplicates, 1)
}

///|
test "绕向相反的面也算重复" {
  // (1,2,3) 和 (1,3,2) 是同一块面，一片朝外一片朝里。这种「一块面贴两遍」
  // 的坏数据也该删掉
  let a = simple_triangle(0.0)
  let b = Triangle::from_vertices(a.a, a.c, a.b)
  let fixed = repair(Mesh::new([a, b]), {
    ..RepairOptions::default(),
    fill_holes: false,
  })
  assert_eq(fixed.removed_duplicates, 1)
}

///|
test "立方体没有重复面" {
  // 防止「去重」把正常网格误删
  let fixed = repair(cube_mesh(), RepairOptions::default())
  assert_eq(fixed.removed_duplicates, 0)
  assert_eq(fixed.mesh.triangle_count(), 12)
}

// ── 重算法线 ────────────────────────────────────────────────────────────

///|
test "写错的法线被重算" {
  let wrong = Triangle::{
    normal: Vec3::new(0.0, 0.0, -1.0),
    a: Vec3::new(0.0, 0.0, 0.0),
    b: Vec3::new(1.0, 0.0, 0.0),
    c: Vec3::new(0.0, 1.0, 0.0),
  }
  let fixed = repair(Mesh::new([wrong]), {
    ..RepairOptions::default(),
    fill_holes: false,
  })
  assert_eq(fixed.recomputed_normals, 1)
  // 重算之后法线应该朝 +z
  assert_true(close(fixed.mesh.triangles[0].normal.z, 1.0))
}

///|
test "修完的网格校验报告里没有错误法线" {
  let wrong = Triangle::{
    normal: Vec3::new(0.0, 0.0, -1.0),
    a: Vec3::new(0.0, 0.0, 0.0),
    b: Vec3::new(1.0, 0.0, 0.0),
    c: Vec3::new(0.0, 1.0, 0.0),
  }
  assert_eq(validate_default(Mesh::new([wrong])).wrong_normal_count, 1)
  let fixed = repair(Mesh::new([wrong]), RepairOptions::default())
  assert_eq(validate_default(fixed.mesh).wrong_normal_count, 0)
}

///|
test "关掉重算就保留原法线" {
  let wrong = Triangle::{
    normal: Vec3::new(0.0, 0.0, -1.0),
    a: Vec3::new(0.0, 0.0, 0.0),
    b: Vec3::new(1.0, 0.0, 0.0),
    c: Vec3::new(0.0, 1.0, 0.0),
  }
  let fixed = repair(Mesh::new([wrong]), {
    ..RepairOptions::default(),
    recompute_normals: false,
  })
  assert_eq(fixed.recomputed_normals, 0)
  assert_true(close(fixed.mesh.triangles[0].normal.z, -1.0))
}

///|
test "只修法线不动拓扑" {
  let fixed = repair(cube_mesh_without(1), RepairOptions::normals_only())
  // 拓扑没动，还是少一个
  assert_eq(fixed.mesh.triangle_count(), 11)
  assert_false(validate_default(fixed.mesh).is_watertight())
}

// ── 综合 ────────────────────────────────────────────────────────────────

///|
test "好网格修完还是好网格" {
  // 最重要的回归测试：修复不该把本来就对的模型改坏
  let fixed = repair(cube_mesh(), RepairOptions::default())
  let report = validate_default(fixed.mesh)
  assert_true(report.is_watertight())
  assert_eq(report.triangle_count, 12)
  assert_eq(report.unique_vertex_count, 8)
  assert_true(close(fixed.mesh.volume(), 1.0))
}

///|
test "多种毛病一起修" {
  // 一个网格同时有破洞、退化面、错误法线
  let triangles : Array[Triangle] = []
  let mut i = 0
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    if i > 0 {
      // 第一个三角形丢掉（造个洞），其余的法线故意写反
      triangles.push(Triangle::{ normal: Vec3::new(0.0, 0.0, -1.0), a, b, c, })
    }
    i = i + 1
  }
  // 再加一个退化面
  triangles.push(
    Triangle::from_vertices(
      Vec3::new(9.0, 0.0, 0.0),
      Vec3::new(9.0, 0.0, 0.0),
      Vec3::new(9.0, 0.0, 0.0),
    ),
  )

  let before = validate_default(Mesh::new(triangles))
  assert_false(before.is_watertight())
  assert_true(before.degenerate_count > 0)
  assert_true(before.wrong_normal_count > 0)

  let fixed = repair(Mesh::new(triangles), RepairOptions::default())
  let after = validate_default(fixed.mesh)
  assert_true(after.is_watertight())
  assert_eq(after.degenerate_count, 0)
  assert_eq(after.wrong_normal_count, 0)
}
