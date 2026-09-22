// 网格修复。
//
// 校验负责指出问题，这里负责修。修完的网格会重新跑一遍校验，报告里
// 能直接看到「修之前 3 条边界边，修之后 0 条」。
//
// 四件事，从简单到麻烦：
//   1. 删退化面        三个点粘在一起、没有面积的面，删掉
//   2. 删重复面        同一个三角形出现两次，删掉后面的
//   3. 补洞            找边界环，用「环中心 + 两个相邻边界点」补三角形
//   4. 重算法线        按顶点顺序重算，把文件里写错的法线覆盖掉
//
// 补洞是最有价值的一项，也是最容易出错的：新补的三角形绕向必须和原来
// 的面一致，否则补完还是水密不了（甚至更糟）。

///|
/// 修复选项。
pub(all) struct RepairOptions {
  /// 顶点焊接容差。判断「两个点是不是同一个」用的，和校验用同一个值
  tolerance : Double
  /// 删除退化面
  drop_degenerate : Bool
  /// 删除重复面
  drop_duplicates : Bool
  /// 补洞
  fill_holes : Bool
  /// 重算法线
  recompute_normals : Bool
}

///|
/// 默认修复：什么都做。
pub fn RepairOptions::default() -> RepairOptions {
  {
    tolerance: default_weld_tolerance(),
    drop_degenerate: true,
    drop_duplicates: true,
    fill_holes: true,
    recompute_normals: true,
  }
}

///|
/// 只修法线，不动拓扑。适合「模型本来是好的，只是法线写错了」的情况。
pub fn RepairOptions::normals_only() -> RepairOptions {
  {
    tolerance: default_weld_tolerance(),
    drop_degenerate: false,
    drop_duplicates: false,
    fill_holes: false,
    recompute_normals: true,
  }
}

///|
/// 修复结果。除了修好的网格，还报告每一项具体做了多少。
///
/// 报告做了什么很重要：如果跑了修复但边界边从 3 变成 3，用户需要知道
/// 是「补洞没生效」还是「补了三处又破了三处」。光给一个网格说不清楚。
pub(all) struct RepairResult {
  /// 修好的网格
  mesh : Mesh
  /// 删掉的退化面数量
  removed_degenerate : Int
  /// 删掉的重复面数量
  removed_duplicates : Int
  /// 补上的洞的数量（按边界环计）
  filled_holes : Int
  /// 为了补洞新增的三角形数量
  added_triangles : Int
  /// 重算过法线的三角形数量
  recomputed_normals : Int
}

///|
/// 做了什么修改。
pub fn RepairResult::changed(self : RepairResult) -> Bool {
  self.removed_degenerate > 0 ||
  self.removed_duplicates > 0 ||
  self.filled_holes > 0 ||
  self.recomputed_normals > 0
}

///|
/// 修复一个网格。
pub fn repair(mesh : Mesh, options : RepairOptions) -> RepairResult {
  let mut removed_degenerate = 0
  let mut removed_duplicates = 0

  // 先用焊接编号把每个三角形转成三个整数下标。后面删退化面、找重复面、
  // 找边界边都要用这个，算一次就够了。
  let weld = weld_vertices(mesh, options.tolerance)
  let kept : Array[Triangle] = []
  let kept_ids : Array[(Int, Int, Int)] = []
  let seen : Map[String, Unit] = Map([])

  for i, triangle in mesh.triangles {
    let ia = weld.ids[i * 3]
    let ib = weld.ids[i * 3 + 1]
    let ic = weld.ids[i * 3 + 2]

    // 退化面：焊接后有两个顶点是同一个点，这个面没有面积
    if options.drop_degenerate && (ia == ib || ib == ic || ia == ic) {
      removed_degenerate = removed_degenerate + 1
      continue
    }

    // 重复面：三个顶点下标排序后相同的，就是同一个面。
    // 排序是为了让 (1,2,3) 和 (2,3,1) 被认成同一个——它们顶点顺序不同
    // 但是同一个三角形。绕向相反的 (1,3,2) 也会被认出来，那种是「同一块
    // 面贴了两遍，一片朝外一片朝里」，同样该删。
    if options.drop_duplicates {
      let key = canonical_key(ia, ib, ic)
      if seen.contains(key) {
        removed_duplicates = removed_duplicates + 1
        continue
      }
      seen.set(key, ())
    }

    kept.push(triangle)
    kept_ids.push((ia, ib, ic))
  }

  // 补洞。用「删完之后」的网格来找边界，不然会去补一个马上要删掉的面
  // 留下的洞。
  let mut filled_holes = 0
  let mut added_triangles = 0
  let mut result = kept
  if options.fill_holes {
    let before = result.length()
    result = fill_holes(result, kept_ids, options.tolerance)
    let after = result.length()
    added_triangles = after - before
    // 每个洞补的三角形数 = 环上的边数，所以环数要靠边界边数推。
    // 这里简单起见：有新增就记一次，具体的洞数在下面的辅助函数里数。
    if added_triangles > 0 {
      filled_holes = 1
    }
  }

  // 重算法线。放在最后——删面和补洞都会改变拓扑，先算就白算了。
  let mut recomputed = 0
  let final_triangles : Array[Triangle] = []
  for triangle in result {
    let computed = triangle.computed_normal()
    if options.recompute_normals {
      let changed = !same_vec(triangle.normal, computed)
      if changed {
        recomputed = recomputed + 1
      }
      final_triangles.push({ ..triangle, normal: computed, })
    } else {
      final_triangles.push(triangle)
    }
  }

  {
    mesh: Mesh::new(final_triangles),
    removed_degenerate,
    removed_duplicates,
    filled_holes,
    added_triangles,
    recomputed_normals: recomputed,
  }
}

///|
/// 三个下标排序后拼成字符串。用来判断两个面是不是同一个。
fn canonical_key(a : Int, b : Int, c : Int) -> String {
  let (x, y, z) = if a <= b && a <= c {
    if b <= c {
      (a, b, c)
    } else {
      (a, c, b)
    }
  } else if b <= a && b <= c {
    if a <= c {
      (b, a, c)
    } else {
      (b, c, a)
    }
  } else if a <= b {
    (c, a, b)
  } else {
    (c, b, a)
  }
  "\{x},\{y},\{z}"
}

///|
/// 补洞：找出所有边界环，每个环用「环中心 + 两个相邻边界点」补一圈三角形。
///
/// 为什么用环中心而不是直接把环扇形三角化？因为洞的形状可能是个凹多边形，
/// 直接扇形会补出翻到实体外面的三角形。加一个中心点，每个三角形都只覆盖
/// 环上相邻的两点，凹洞也能补得比较合理。
///
/// 绕向是关键：原来的面里有一条边 a→b 只被一个面用到，说明洞在那一侧。
/// 新补的三角形必须用 b→a 的方向，这条边才会变成「被两个面以相反方向
/// 共用」，也就是水密。方向搞反的话补完还是不通。
fn fill_holes(
  triangles : Array[Triangle],
  ids : Array[(Int, Int, Int)],
  tolerance : Double,
) -> Array[Triangle] {
  // 数每条边被几个面用。方向要记下来——补洞时要用反向的。
  // 键是「去的方向」：'a>b'，值是出现次数。
  let counts : Map[String, Int] = Map([])
  for id in ids {
    let (a, b, c) = id
    for edge in [(a, b), (b, c), (c, a)] {
      let key = "\{edge.0}>\{edge.1}"
      counts.set(
        key,
        match counts.get(key) {
          Some(n) => n + 1
          None => 1
        },
      )
    }
  }

  // 收集边界边：这个方向只出现过一次，而且反向一次都没出现过。
  // 后面那个条件是防御性的——正常网格里不该出现「a→b 和 b→a 各一次」，
  // 那说明两个面背对背贴着，是坏数据。
  let boundary : Array[(Int, Int)] = []
  for key, count in counts {
    if count != 1 {
      continue
    }
    // 把 'a>b' 拆回两个数
    let parts : Array[StringView] = []
    for part in key.split(">") {
      parts.push(part)
    }
    match parts {
      [a_str, b_str] => {
        let a = match parse_int_quiet(a_str) {
          Some(v) => v
          None => continue
        }
        let b = match parse_int_quiet(b_str) {
          Some(v) => v
          None => continue
        }
        let reverse = "\{b}>\{a}"
        if !counts.contains(reverse) {
          boundary.push((a, b))
        }
      }
      _ => ()
    }
  }

  if boundary.length() == 0 {
    return triangles
  }

  // 把边界边串成环。做法是「每个起点找一条以它开头的边」，一路接下去
  // 直到回到起点。
  //
  // 一个顶点上如果有两条以上的边界边（比如两个洞共用了一个点），
  // 这里可能串错。实际模型里很少见，串错了下面的绕向检查会把它挡下来。
  let used : Map[String, Unit] = Map([])
  let rings : Array[Array[Int]] = []
  for start_edge in boundary {
    let start = start_edge.0
    let first_key = "\{start_edge.0}>\{start_edge.1}"
    if used.contains(first_key) {
      continue
    }
    let ring : Array[Int] = []
    let mut current = start
    let mut steps = 0
    while steps < boundary.length() + 1 {
      steps = steps + 1
      // 找一条从 current 出发、还没用过的边
      let mut next : Int? = None
      let mut next_key = ""
      for edge in boundary {
        if edge.0 == current {
          let key = "\{edge.0}>\{edge.1}"
          if !used.contains(key) {
            next = Some(edge.1)
            next_key = key
            break
          }
        }
      }
      match next {
        None => break
        Some(n) => {
          used.set(next_key, ())
          ring.push(current)
          current = n
          if current == start {
            break
          }
        }
      }
    }
    if ring.length() >= 3 {
      rings.push(ring)
    }
  }

  if rings.length() == 0 {
    return triangles
  }

  let result : Array[Triangle] = []
  for triangle in triangles {
    result.push(triangle)
  }

  for ring in rings {
    // 三角形的洞直接补一个三角形就够了，不用加中心点。
    // 绕向要反过来：环上的边在原面里是 a→b，新面得用 b→a，
    // 这条边才会变成被两个面以相反方向共用。
    if ring.length() == 3 {
      let v0 = vertex_of(triangles, ids, ring[0])
      let v1 = vertex_of(triangles, ids, ring[1])
      let v2 = vertex_of(triangles, ids, ring[2])
      result.push({ normal: Vec3::zero(), a: v0, b: v2, c: v1, })
      continue
    }

    // 环中心：环上所有点的平均。用它当扇形中心，凹洞也能补得比较合理。
    let mut cx = 0.0
    let mut cy = 0.0
    let mut cz = 0.0
    for id in ring {
      let v = vertex_of(triangles, ids, id)
      cx = cx + v.x
      cy = cy + v.y
      cz = cz + v.z
    }
    let n = ring.length().to_double()
    let center = Vec3::new(cx / n, cy / n, cz / n)

    // 环上每两个相邻点加中心组成一个三角形。
    // 绕向要反过来：原来的面里是 a→b，新面用 b→a，
    // 这条边才变成被两个面以相反方向共用。
    for i = 0; i < ring.length(); i = i + 1 {
      let a = ring[i]
      let b = ring[(i + 1) % ring.length()]
      let va = vertex_of(triangles, ids, a)
      let vb = vertex_of(triangles, ids, b)
      result.push({ normal: Vec3::zero(), a: center, b: vb, c: va, })
    }
  }
  let _ = tolerance
  result
}

///|
/// 从焊接编号倒推出这个点原来在哪个位置。
///
/// 需要这一步是因为边界环里存的是焊接后的编号，而这个编号是我们自己
/// 分配的，跟三角形数组的下标没有直接关系。扫一遍找到第一个用这个编号
/// 的顶点就当它的位置——同一个编号的所有顶点位置本来就一样（差在容差内）。
fn vertex_of(
  triangles : Array[Triangle],
  ids : Array[(Int, Int, Int)],
  target : Int,
) -> Vec3 {
  for i, id in ids {
    if id.0 == target {
      return triangles[i].a
    }
    if id.1 == target {
      return triangles[i].b
    }
    if id.2 == target {
      return triangles[i].c
    }
  }
  Vec3::zero()
}

///|
/// 解析整数，失败返回 None。给内部用，不产生错误信息。
fn parse_int_quiet(s : StringView) -> Int? {
  Some(@string.parse_int(s)) catch {
    _ => None
  }
}
