// 绕向一致性。
//
// 为什么需要单独一个模块：**水密不等于几何正确**。
//
// 一个立方体如果把某个面的顶点顺序写反了，它仍然是「每条边恰好被两个面
// 共用」的闭合曲面——拓扑上完全合法。但那个面朝里了，体积求和时它的贡献
// 符号反了，算出来的体积是错的（实测 0.667 而不是 1）。
//
// 这种坏数据的危害在于它**藏得很深**：水密性检查说没问题、法线检查也说
// 没问题（因为按错误的绕向重算出来的法线是自洽的），但切片软件算出来的
// 实心区域是错的。所以必须专门查、专门修。

///|
/// 绕向检查报告。
pub(all) struct WindingReport {
  /// 和主体朝向相反、需要翻转的面数。0 表示所有面朝向一致
  flipped_faces : Int
  /// 是否所有面朝向一致。一致不代表朝外——还要看体积的正负
  consistent : Bool
  /// 全体面按当前绕向算出的**有符号**体积，没有取绝对值。
  /// 为负说明整个网格的朝向是朝里的，需要整体翻一遍
  signed_volume : Double
}

///|
/// 检查网格的绕向一致性。
pub fn check_winding(mesh : Mesh, tolerance : Double) -> WindingReport {
  let flags = winding_flags(mesh, tolerance)
  let mut flipped = 0
  for f in flags {
    if f {
      flipped = flipped + 1
    }
  }
  let mut signed = 0.0
  for triangle in mesh.triangles {
    signed = signed + triangle.signed_volume()
  }
  { flipped_faces: flipped, consistent: flipped == 0, signed_volume: signed }
}

///|
/// 给每个面算一个「要不要翻转」的标志，让所有相邻面朝向一致。
///
/// 做法是从一个面出发做广度优先遍历，沿着共享边往外推：相邻的两个面
/// 必须**以相反方向**使用它们共用的那条边——这是「朝向一致」的定义。
/// 顺藤摸瓜就能给每个面定下朝向。
///
/// 用的是「朝向一致」而不是「朝外」——朝里朝外是整体翻转的问题，
/// 等遍历完看有符号体积的正负再决定，见 `unify_winding`。
///
/// 返回的数组第 i 项是 true 表示第 i 个面要翻转（把 b、c 两个顶点对调）。
fn winding_flags(mesh : Mesh, tolerance : Double) -> Array[Bool] {
  let n = mesh.triangle_count()
  let flags : Array[Bool] = []
  for _i = 0; _i < n; _i = _i + 1 {
    flags.push(false)
  }
  if n == 0 {
    return flags
  }

  // 焊接编号，用来认「哪条边是共享的」
  let weld = weld_vertices(mesh, tolerance)
  let ids : Array[(Int, Int, Int)] = []
  for i = 0; i < n; i = i + 1 {
    ids.push((weld.ids[i * 3], weld.ids[i * 3 + 1], weld.ids[i * 3 + 2]))
  }

  // 无向边 → 用到它的各个面，以及各面是往哪个方向走的。
  //
  // 键把两个端点按小大排序，这样「a→b」和「b→a」落进同一个格子，
  // 才能找到彼此。方向记成 +1（小→大）或 -1（大→小）。
  //
  // **不能**只存「哪个面走了这个方向」——绕向反了的那条边上，两个面
  // 走的是**同一个方向**，后写入的会把先写入的覆盖掉，查找时还会返回
  // 自己。必须把两个都留着。
  let edge_faces : Map[String, Array[(Int, Int)]] = Map([])
  for i, id in ids {
    let (a, b, c) = id
    for e in [(a, b), (b, c), (c, a)] {
      let key = if e.0 < e.1 {
        "\{e.0},\{e.1}"
      } else {
        "\{e.1},\{e.0}"
      }
      let dir = if e.0 < e.1 { 1 } else { -1 }
      let list = match edge_faces.get(key) {
        Some(list) => list
        None => {
          let list : Array[(Int, Int)] = []
          edge_faces.set(key, list)
          list
        }
      }
      list.push((i, dir))
    }
  }

  let visited : Array[Bool] = []
  for _i = 0; _i < n; _i = _i + 1 {
    visited.push(false)
  }

  // 可能有好几块互不相连的曲面（比如两个独立的零件），每块都要遍历
  for seed = 0; seed < n; seed = seed + 1 {
    if visited[seed] {
      continue
    }
    visited[seed] = true
    let queue : Array[Int] = [seed]
    while queue.length() > 0 {
      let cur = match queue.pop() {
        Some(i) => i
        None => continue
      }
      let (a, b, c) = ids[cur]
      for e in [(a, b), (b, c), (c, a)] {
        let key = if e.0 < e.1 {
          "\{e.0},\{e.1}"
        } else {
          "\{e.1},\{e.0}"
        }
        let dir = if e.0 < e.1 { 1 } else { -1 }
        let list = match edge_faces.get(key) {
          Some(list) => list
          None => continue
        }
        // 这条边的另一个面。不能是当前面自己
        for entry in list {
          let (j, other_dir) = entry
          if j == cur || visited[j] {
            continue
          }
          visited[j] = true
          // 相邻两面「方向相反」才叫一致。方向**相同**说明其中必有
          // 一个是反的，邻面要跟着一起翻。
          //
          // 关键在于承接当前面的翻转状态：当前面翻了的话，邻面的
          // 原始方向相对它就从「相反」变成「相同」，邻面也得翻。
          // 写死 false 等于假设了要证明的东西。
          flags[j] = if dir == other_dir {
            !flags[cur]
          } else {
            flags[cur]
          }
          queue.push(j)
        }
      }
    }
  }
  flags
}

///|
/// 把网格的绕向统一，并保证整体朝外。
///
/// 两步：
///   1. 用 `winding_flags` 让所有面互相一致
///   2. 看有符号体积——为负说明整体朝里，把所有面翻一遍
///
/// 第 2 步不能省。只做第 1 步的话，一个整体朝里的网格会保持朝里，
/// 体积仍然是负的。
pub fn unify_winding(mesh : Mesh, tolerance : Double) -> Mesh {
  let flags = winding_flags(mesh, tolerance)

  let flipped : Array[Triangle] = []
  for i, triangle in mesh.triangles {
    if flags[i] {
      // 对调 b、c 两个顶点，绕向就反过来了
      flipped.push({
        normal: triangle.normal,
        a: triangle.a,
        b: triangle.c,
        c: triangle.b,
      })
    } else {
      flipped.push(triangle)
    }
  }

  // 整体朝向：有符号体积为负说明朝里，全体再翻一次
  let mut signed = 0.0
  for triangle in flipped {
    signed = signed + triangle.signed_volume()
  }
  if signed >= 0.0 {
    return Mesh::new(flipped)
  }

  let outward : Array[Triangle] = []
  for triangle in flipped {
    outward.push({
      normal: triangle.normal,
      a: triangle.a,
      b: triangle.c,
      c: triangle.b,
    })
  }
  Mesh::new(outward)
}

///|
/// 用默认容差检查绕向。
pub fn check_winding_default(mesh : Mesh) -> WindingReport {
  check_winding(mesh, default_weld_tolerance())
}
