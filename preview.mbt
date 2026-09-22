// 把网格画成 SVG 等轴测图。
//
// 做法是「画家算法」：把每个三角形投影到屏幕上，按离眼睛的远近排序，
// 远的先画近的后画，近的自然盖住远的。这是最古老的消隐方法，对凸的、
// 不怎么自遮挡的模型够用——3D 打印模型基本都属于这类。
//
// 真正准确的消隐要 Z-buffer，那得上光栅化，对这个项目是杀鸡用牛刀。
//
// 输出 SVG 而不是位图，有两个好处：矢量在任何尺寸下都清楚，而且是纯
// 文本，可以直接塞进网页、也能在终端里看（SVG 能转成 data URI）。

///|
/// 渲染参数。
pub(all) struct PreviewOptions {
  /// 输出宽度（像素）
  width : Int
  /// 输出高度（像素）
  height : Int
  /// 绕竖直轴旋转的角度（度）。调这个能从不同侧面看模型
  yaw : Double
  /// 俯仰角（度）。0 是正对着看，90 是从正上方往下看
  pitch : Double
  /// 线框颜色
  stroke : String
  /// 线框粗细
  stroke_width : Double
}

///|
/// 默认渲染参数：从一个斜上方 45 度的常见视角看。
pub fn PreviewOptions::default() -> PreviewOptions {
  {
    width: 480,
    height: 480,
    yaw: 35.0,
    pitch: 30.0,
    stroke: "#1f2430",
    stroke_width: 0.6,
  }
}

///|
/// 把网格渲染成一张 SVG 图。
///
/// 空网格返回一张空图而不是报错——调用方（网页）在文件还没上传时
/// 需要有个东西显示。
pub fn render_svg(mesh : Mesh, options : PreviewOptions) -> String {
  if mesh.is_empty() {
    return "<!-- 空网格 -->"
  }

  let radians = @math.PI / 180.0
  let yaw = options.yaw * radians
  let pitch = options.pitch * radians

  // 先把模型挪到原点。不居中的话模型会跑到画布外面去。
  let center = match mesh.bounding_box() {
    Some(box) => {
      let size = box.size()
      Vec3::new(
        box.min.x + size.x / 2.0,
        box.min.y + size.y / 2.0,
        box.min.z + size.z / 2.0,
      )
    }
    None => Vec3::zero()
  }

  // 旋转，不含缩放和平移。先绕 Y 轴（竖直方向）转 yaw，再绕 X 轴转 pitch。
  // 返回旋转后的坐标，第三个分量就是深度（越大越远）。
  let rotate = fn(v : Vec3) -> (Double, Double, Double) {
    let x = v.x - center.x
    let y = v.y - center.y
    let z = v.z - center.z
    let x1 = x * @math.cos(yaw) + z * @math.sin(yaw)
    let z1 = -x * @math.sin(yaw) + z * @math.cos(yaw)
    let y2 = y * @math.cos(pitch) - z1 * @math.sin(pitch)
    let z2 = y * @math.sin(pitch) + z1 * @math.cos(pitch)
    (x1, y2, z2)
  }

  // 第一遍：先按「1 像素 = 1 单位」投影一遍，量出旋转之后实际占多大。
  //
  // 不能拿模型的最大边长当缩放依据——旋转之后投影范围会变大，
  // 对角线方向最多能到 √3 倍。按边长算会导致模型撑出画布，
  // 这个坑踩过一次（立方体四角都跑到框外去了）。
  let mut min_x = 1.0e18
  let mut max_x = -1.0e18
  let mut min_y = 1.0e18
  let mut max_y = -1.0e18
  for v in mesh.vertices() {
    let (rx, ry, _) = rotate(v)
    if rx < min_x {
      min_x = rx
    }
    if rx > max_x {
      max_x = rx
    }
    if ry < min_y {
      min_y = ry
    }
    if ry > max_y {
      max_y = ry
    }
  }
  let span_x = max_x - min_x
  let span_y = max_y - min_y
  // 退化情况（所有点重合）给个兜底，免得除零
  let span_x = if span_x < 1.0e-9 { 1.0 } else { span_x }
  let span_y = if span_y < 1.0e-9 { 1.0 } else { span_y }

  // 留 12% 的边距，免得模型的角顶在画布边缘上。
  // 取两个方向里更紧的那个约束，保证宽高都不溢出。
  let fit_x = options.width.to_double() * 0.88 / span_x
  let fit_y = options.height.to_double() * 0.88 / span_y
  let scale = if fit_x < fit_y { fit_x } else { fit_y }

  // 第二遍：按算好的缩放和平移投影。
  let offset_x = (min_x + max_x) / 2.0
  let offset_y = (min_y + max_y) / 2.0
  let half_w = options.width.to_double() / 2.0
  let half_h = options.height.to_double() / 2.0

  // 屏幕 Y 轴向下，所以竖直方向要取负
  let project = fn(v : Vec3) -> (Double, Double, Double) {
    let (rx, ry, rz) = rotate(v)
    (half_w + (rx - offset_x) * scale, half_h - (ry - offset_y) * scale, rz)
  }

  // 光源方向（已单位化）。放在左上偏前，画出来有立体感。
  let light = Vec3::new(-0.4, 0.7, 0.6).normalize()

  // 每个三角形算好投影后的三个点、深度、明暗
  let faces : Array[(Double, String)] = []
  for triangle in mesh.triangles {
    let (ax, ay, az) = project(triangle.a)
    let (bx, by, bz) = project(triangle.b)
    let (cx, cy, cz) = project(triangle.c)

    // 背面剔除：投影后三个点的绕向如果是顺时针，说明这个面背对观察者。
    // 叉乘的符号就是判据。
    let cross = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax)
    if cross > 0.0 {
      continue
    }

    // 明暗：法线和光源方向夹角的余弦。取绝对值是因为有些面的顶点
    // 顺序是反的，硬按有符号算会有整片全黑。
    let normal = triangle.computed_normal()
    let mut brightness = normal.dot(light).abs()
    // 压一下对比度：全黑的面看不清楚结构，全白的又糊成一片
    brightness = 0.45 + 0.55 * brightness

    let shade = (brightness * 235.0).to_int()
    let fill = "rgb(\{shade},\{shade},\{shade})"

    // 深度用三个顶点旋转后 Z 的平均值。画家算法要「远的先画」，
    // 而这里 Z 越大越远，所以排序时升序。
    let depth = (az + bz + cz) / 3.0

    faces.push(
      (
        depth,
        "<polygon points=\"\{ax},\{ay} \{bx},\{by} \{cx},\{cy}\" " +
        "fill=\"\{fill}\" stroke=\"\{options.stroke}\" " +
        "stroke-width=\"\{options.stroke_width}\" stroke-linejoin=\"round\"/>",
      ),
    )
  }

  // 按深度排序，远的在前（先画）
  faces.sort_by(fn(a, b) {
    if a.0 < b.0 {
      -1
    } else if a.0 > b.0 {
      1
    } else {
      0
    }
  })

  let body : Array[String] = []
  for face in faces {
    body.push(face.1)
  }

  "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 " +
  "\{options.width} \{options.height}\" width=\"\{options.width}\" " +
  "height=\"\{options.height}\">" +
  "<rect width=\"100%\" height=\"100%\" fill=\"#f6f7f9\"/>" +
  body.join("") +
  "</svg>"
}
