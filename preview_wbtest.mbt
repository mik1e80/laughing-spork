// 白盒测试：SVG 预览渲染。

///|
fn render_cube() -> String {
  let triangles : Array[Triangle] = []
  for t in unit_cube_triangles() {
    let (a, b, c) = t
    triangles.push(Triangle::from_vertices(a, b, c))
  }
  render_svg(Mesh::new(triangles), PreviewOptions::default())
}

///|
test "空网格渲染成一条注释" {
  let svg = render_svg(Mesh::empty(), PreviewOptions::default())
  assert_true(svg.contains("<!--"))
  assert_false(svg.contains("<polygon"))
}

///|
test "立方体渲染出若干多边形" {
  let svg = render_cube()
  assert_true(svg.contains("<svg"))
  assert_true(svg.contains("<polygon"))
  assert_true(svg.contains("</svg>"))
}

///|
test "背对观察者的面被剔除了" {
  // 从斜上方看一个立方体，只能看到三个面。三角化之后是 6 个三角形，
  // 另外 6 个背对观察者，应该被剔除掉。
  //
  // 数一下 polygon 的个数来验证。这是个侧面检查剔除逻辑的办法——
  // 如果剔除没生效，会画出 12 个。
  let svg = render_cube()
  let mut count = 0
  let needle = "<polygon"
  let mut rest = svg
  while rest.contains(needle) {
    count = count + 1
    rest = match rest.split_once(needle) {
      Some((_, after)) => after.to_owned()
      None => ""
    }
  }
  assert_eq(count, 6)
}

///|
test "模型被缩放到画布内" {
  // 所有顶点的坐标都该落在画布范围内。之前这里出过 bug：
  // 按模型的边长算缩放，没考虑旋转之后投影范围会变大，
  // 结果立方体四角都跑到框外去了。
  let svg = render_svg(cube_mesh(), {
    ..PreviewOptions::default(),
    width: 200,
    height: 200,
  })
  // 把所有 points="x,y x,y x,y" 里的数字抠出来检查范围
  let mut max_value = 0.0
  for part in svg.split("\"") {
    if part.contains(",") && part.contains(" ") {
      for token in part.split(" ") {
        for num in token.split(",") {
          match parse_double_safe(num.to_owned()) {
            Some(v) => if v > max_value { max_value = v }
            None => ()
          }
        }
      }
    }
  }
  // 给一点余量：坐标可能带小数，200 是画布边长
  assert_true(max_value <= 200.0)
}

///|
/// 试着把一个字符串解析成 Double，失败返回 None。
fn parse_double_safe(s : String) -> Double? {
  if s.length() == 0 {
    return None
  }
  Some(@string.parse_double(s)) catch {
    _ => None
  }
}
