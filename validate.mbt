// 网格校验：回答「这个模型能不能打印」。
//
// 这是整个工具链的价值所在。渲染器能告诉你模型长什么样，但告诉不了你
// 它有没有破洞、法线是不是反的、有没有退化的面——那些要靠网格拓扑分析。
//
// 各项检查的原理都不复杂，难的是「两个顶点算不算同一个点」这个前置问题，
// 见下面 weld_vertices 的注释。

///|
/// 网格校验报告。
pub(all) struct ValidationReport {
  /// 三角形总数
  triangle_count : Int
  /// 文件里写了多少个顶点（等于三角形数 × 3，STL 每个面都重写一遍自己的顶点）
  raw_vertex_count : Int
  /// 焊接之后剩下多少个不同的顶点
  unique_vertex_count : Int
  /// 只被一个面用到的边。数量大于零说明网格有破洞
  boundary_edge_count : Int
  /// 被三个及以上面共用的边。这种边在真实物体上不该出现
  non_manifold_edge_count : Int
  /// 退化三角形（三个点共线，面积为零）的数量
  degenerate_count : Int
  /// 法线朝向和文件里写的明显不符的三角形数量
  wrong_normal_count : Int
}

///|
/// 网格是不是水密的。
///
/// 判据：每条边都恰好被两个面共用。这是 3D 打印能成功的必要条件——
/// 切片软件要靠这个判断哪是「里面」哪是「外面」，有破洞就分不清，
/// 算出来的实心区域是错的。
pub fn ValidationReport::is_watertight(self : ValidationReport) -> Bool {
  self.boundary_edge_count == 0 && self.non_manifold_edge_count == 0
}

///|
/// 默认的顶点焊接容差。
///
/// 1e-6 毫米 = 1 纳米。选这个量级是因为：STL 二进制里存的是 32 位浮点，
/// 有效精度大约 7 位十进制，所以同一个点在文件里重复出现时可能有
/// 1e-7 相对量级的差异。1e-6 的绝对容差能盖住这个误差，又远小于任何
/// 有意义的建模特征（3D 打印机的精度是 0.1 毫米量级）。
pub fn default_weld_tolerance() -> Double {
  1.0e-6
}

///|
/// 把一个坐标按容差量化成整数。
///
/// 这是「两个顶点算不算同一个点」的答案：把每个坐标除以容差再四舍五入，
/// 落在同一格的就算同一个点。这样把浮点比较换成了整数比较，既避免
/// 「0.1 + 0.2 != 0.3」这类问题，又能用哈希表查。
///
/// 代价是在格子边界上会分家：两个相距 1e-9 的点，如果正好一个在格子
/// 左边一个在右边，会被当成不同的点。实际影响很小——这种点本来就在
/// 容差边缘，怎么判都说得过去。
fn quantize(value : Double, tolerance : Double) -> Int {
  (value / tolerance).round().to_int()
}

///|
/// 顶点焊接的结果。
pub(all) struct WeldResult {
  /// 每个顶点焊接后的编号。第 i 个顶点的编号是 ids[i]
  ids : Array[Int]
  /// 焊接后剩下多少个不同的顶点
  unique_count : Int
}

///|
/// 把重复的顶点合并，给每个顶点一个编号。
///
/// STL 格式本身没有「顶点表」——每个三角形把自己的三个顶点各写一遍，
/// 一个立方体 8 个顶点会写 36 遍。要做拓扑分析（哪条边被几个面共用），
/// 必须先把这些重复的点认出来是同一个。
///
/// 用 Map 存「量化后的坐标 → 编号」，第一次见到的坐标分配一个新编号，
/// 之后见到的复用。坐标量化的细节见 quantize。
fn weld_vertices(mesh : Mesh, tolerance : Double) -> WeldResult {
  let lookup : Map[String, Int] = Map([])
  let ids : Array[Int] = []
  let mut next_id = 0
  for triangle in mesh.triangles {
    for v in triangle.vertices() {
      // 用字符串当键：坐标量化后是三个整数，拼起来天然可哈希、可比较。
      // 比自定义一个带 Hash 的坐标结构体省事，性能在这个量级也够。
      let key = "\{quantize(v.x, tolerance)},\{quantize(v.y, tolerance)},\{quantize(v.z, tolerance)}"
      let id = match lookup.get(key) {
        Some(id) => id
        None => {
          let id = next_id
          lookup.set(key, id)
          next_id = next_id + 1
          id
        }
      }
      ids.push(id)
    }
  }
  { ids, unique_count: next_id, }
}

///|
/// 把一条边规范化成可比较的形式。
///
/// 一条边有两个端点，但从哪个面看过来顺序可能相反（第一个面是 a→b，
/// 相邻面是 b→a）。要统计「这条边被几个面用了」，得先让两个方向
/// 表示成同一个东西：小的编号在前。
fn edge_key(a : Int, b : Int) -> (Int, Int) {
  if a < b {
    (a, b)
  } else {
    (b, a)
  }
}

///|
/// 全面校验一个网格。
pub fn validate(mesh : Mesh, tolerance : Double) -> ValidationReport {
  let weld = weld_vertices(mesh, tolerance)

  // 统计每条边被几个三角形共用。
  // 键是「小编号,大编号」拼成的字符串，值是出现次数。
  let edge_counts : Map[String, Int] = Map([])
  let mut degenerate = 0
  let mut wrong_normal = 0

  for i, triangle in mesh.triangles {
    let ia = weld.ids[i * 3]
    let ib = weld.ids[i * 3 + 1]
    let ic = weld.ids[i * 3 + 2]

    // 退化面：三个顶点焊接后有两个或以上是同一个点，说明这个面没有面积。
    // 用焊接后的编号判断而不是看面积是否为零——焊接后的判断和拓扑一致，
    // 不会因为浮点误差漏掉。
    if ia == ib || ib == ic || ia == ic {
      degenerate = degenerate + 1
    }

    // 法线朝向：拿文件里写的法线和按顶点顺序算出来的比。
    // 点乘为负说明方向相反（夹角超过 90 度），这个面在文件里是反的。
    // 文件里法线填 0 0 0 的不算——那是「没填」，不是「填错了」。
    let declared = triangle.normal
    if !declared.is_zero(1.0e-9) {
      let computed = triangle.computed_normal()
      if declared.dot(computed) < 0.0 {
        wrong_normal = wrong_normal + 1
      }
    }

    // 三个顶点里如果有重复的，说明这条边是退化的，不该计进拓扑统计
    if ia != ib {
      let k = edge_key(ia, ib)
      let key = "\{k.0},\{k.1}"
      edge_counts.set(
        key,
        match edge_counts.get(key) {
          Some(n) => n + 1
          None => 1
        },
      )
    }
    if ib != ic {
      let k = edge_key(ib, ic)
      let key = "\{k.0},\{k.1}"
      edge_counts.set(
        key,
        match edge_counts.get(key) {
          Some(n) => n + 1
          None => 1
        },
      )
    }
    if ic != ia {
      let k = edge_key(ic, ia)
      let key = "\{k.0},\{k.1}"
      edge_counts.set(
        key,
        match edge_counts.get(key) {
          Some(n) => n + 1
          None => 1
        },
      )
    }
  }

  let mut boundary = 0
  let mut non_manifold = 0
  for _, count in edge_counts {
    if count == 1 {
      boundary = boundary + 1
    } else if count > 2 {
      non_manifold = non_manifold + 1
    }
  }

  {
    triangle_count: mesh.triangle_count(),
    raw_vertex_count: mesh.triangles.length() * 3,
    unique_vertex_count: weld.unique_count,
    boundary_edge_count: boundary,
    non_manifold_edge_count: non_manifold,
    degenerate_count: degenerate,
    wrong_normal_count: wrong_normal,
  }
}

///|
/// 用默认容差校验。
pub fn validate_default(mesh : Mesh) -> ValidationReport {
  validate(mesh, default_weld_tolerance())
}
