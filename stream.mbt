// 流式扫描：不构造网格，单遍算出所有统计量。
//
// 为什么值得单独写一遍：**一个三角形在内存里的开销远大于它在文件里的开销**。
//
//   文件里（二进制 STL）    3 个坐标 + 1 个法线 = 12 个 float32 = 50 字节
//   内存里（Triangle）      4 个 Vec3 = 12 个 Double      = 96 字节
//
// 也就是说解析一个 480 MB 的模型，光是"把三角形存下来"就要再吃掉 960 MB。
// 渲染库必须存下来——它们的顶点最终要上传到 GPU，所以这是结构性的，
// 不是"它们没做优化"。
//
// 但做**统计**不需要存：体积、表面积、包围盒都能一边读一边累加。
// 只有需要拓扑的两项（水密性、绕向）才麻烦，下面单独说怎么办。

///|
/// 流式扫描的结果。
///
/// 字段和 `ValidationReport` 有意保持一致，方便并排显示。
pub(all) struct StreamReport {
  /// 三角形总数
  triangle_count : Int
  /// 文件里写了多少个顶点（二进制 STL 就是三角形数 × 3）
  raw_vertex_count : Int
  /// 去重之后剩下多少个不同的顶点
  unique_vertex_count : Int
  /// 只被一个面用到的边。大于零说明有破洞
  boundary_edge_count : Int
  /// 被三个及以上面共用的边
  non_manifold_edge_count : Int
  /// 体积
  volume : Double
  /// 表面积
  surface_area : Double
  /// 轴对齐包围盒
  bbox : Aabb?
}

///|
/// 网格是不是水密的。判据和全量校验一致。
pub fn StreamReport::is_watertight(self : StreamReport) -> Bool {
  self.boundary_edge_count == 0 && self.non_manifold_edge_count == 0
}

///|
/// 流式扫描二进制 STL。
///
/// 二进制格式天生适合流式：每个三角形固定 50 字节，顺序读就行，
/// 不需要回头。ASCII 格式要逐行扫，见 `stream_stl_ascii`。
pub fn stream_stl_binary(data : Bytes) -> Result[StreamReport, String] {
  if data.length() < 84 {
    return Err(
      "二进制 STL 至少要 84 字节（80 字节文件头 + 4 字节三角形数），" +
      "这个文件只有 \{data.length()} 字节",
    )
  }
  let count_u = read_u32_le(data, 80)
  let expected = 84UL + count_u.to_uint64() * 50UL
  if expected > data.length().to_uint64() {
    return Err(
      "二进制 STL 头部声称有 \{count_u} 个三角形（需要 \{expected} 字节），" +
      "但文件只有 \{data.length()} 字节，文件被截断了",
    )
  }
  let count = count_u.reinterpret_as_int()
  if count == 0 {
    return Err("这个二进制 STL 里一个三角形都没有")
  }

  // 累加器。这些都不需要保留中间结果，扫到哪算到哪
  let mut volume = 0.0
  let mut area = 0.0
  let mut min : Vec3? = None
  let mut max : Vec3? = None

  // 需要保留的两样东西：
  //   1. 顶点去重表 —— 只存「量化坐标 → 编号」，不存三角形本身
  //   2. 边表 —— 只存每条边的两个端点编号，最后排序统计
  let weld : Map[UInt64, Int] = Map([])
  let edges : Array[UInt64] = []
  let mut unique_vertices = 0

  for i = 0; i < count; i = i + 1 {
    let base = 84 + i * 50
    // 法线那 12 字节直接跳过 —— 统计用不上，我们自己算
    let a = read_vec3_f32(data, base + 12)
    let b = read_vec3_f32(data, base + 24)
    let c = read_vec3_f32(data, base + 36)

    // 体积：三角形与原点构成的四面体的有符号体积，累加
    volume = volume + a.dot(b.cross(c)) / 6.0
    // 表面积：两条边叉乘模长的一半
    area = area + b.sub(a).cross(c.sub(a)).length() / 2.0
    // 包围盒：逐个比大小
    for v in [a, b, c] {
      let (lo, hi) = expand_bbox(min, max, v)
      min = lo
      max = hi
    }

    // 顶点焊接。三个顶点各自查表拿编号
    let ia = weld_vertex(weld, a)
    let ib = weld_vertex(weld, b)
    let ic = weld_vertex(weld, c)
    // 查表时新分配了编号就说明是个新顶点
    let after = weld.length()
    if after > unique_vertices {
      unique_vertices = after
    }

    // 三条边压成 UInt64 存进数组，最后统一排序统计。
    //
    // 用「排序 + 扫描」而不是哈希表：哈希表每项的开销（键 + 值 + 桶）
    // 比一个 8 字节的整数大好几倍，而这个数组是紧凑的。
    // 1500 万条边只需要 120 MB，哈希表要 400 MB 以上。
    if ia != ib {
      edges.push(pack_edge(ia, ib))
    }
    if ib != ic {
      edges.push(pack_edge(ib, ic))
    }
    if ic != ia {
      edges.push(pack_edge(ic, ia))
    }
  }

  let (boundary, non_manifold) = count_edges(edges)

  Ok(StreamReport::{
    triangle_count: count,
    raw_vertex_count: count * 3,
    unique_vertex_count: unique_vertices,
    boundary_edge_count: boundary,
    non_manifold_edge_count: non_manifold,
    volume: volume.abs(),
    surface_area: area,
    bbox: match (min, max) {
      (Some(lo), Some(hi)) => Some(Aabb::{ min: lo, max: hi, })
      _ => None
    },
  })
}

///|
/// 把一个顶点查表拿编号，没有就分配一个新的。
///
/// 量化方式和全量校验那边一致（`validate.mbt` 的 `quantize`），
/// 这样两条路径对「两个点算不算同一个」的判断是一样的。
fn weld_vertex(table : Map[UInt64, Int], v : Vec3) -> Int {
  let key = pack_position(v)
  match table.get(key) {
    Some(id) => id
    None => {
      let id = table.length()
      table.set(key, id)
      id
    }
  }
}

///|
/// 逐分量取小。
fn vec_min(a : Vec3, b : Vec3) -> Vec3 {
  Vec3::{ x: a.x.min(b.x), y: a.y.min(b.y), z: a.z.min(b.z) }
}

///|
/// 逐分量取大。
fn vec_max(a : Vec3, b : Vec3) -> Vec3 {
  Vec3::{ x: a.x.max(b.x), y: a.y.max(b.y), z: a.z.max(b.z) }
}

///|
/// 把一个点并进包围盒。
///
/// 抽成函数是因为「在循环里写嵌套的结构体字面量」MoonBit 会报歧义
/// （`ambiguous_block`），写成命名函数最省事。
fn expand_bbox(min : Vec3?, max : Vec3?, v : Vec3) -> (Vec3?, Vec3?) {
  match (min, max) {
    (Some(lo), Some(hi)) => (Some(vec_min(lo, v)), Some(vec_max(hi, v)))
    _ => (Some(v), Some(v))
  }
}
///|
/// 容差，和全量校验保持一致。
const WELD_QUANTUM : Double = 1.0e-6

///|
/// 把三个量化后的坐标打包成一个 64 位的键。
///
/// 每个坐标量化成 21 位整数（约 ±100 万，按 1e-6 毫米的精度够覆盖
/// ±1 米的模型），三个拼起来 63 位，正好塞进 UInt64。
///
/// 用整数当键比字符串省得多——字符串键光是每个字符就要一个字节，
/// 加上对象头，一个键轻松超过 20 字节；这里只要 8 字节。
fn pack_position(v : Vec3) -> UInt64 {
  let x = (v.x / WELD_QUANTUM).round().to_int()
  let y = (v.y / WELD_QUANTUM).round().to_int()
  let z = (v.z / WELD_QUANTUM).round().to_int()
  // 每个坐标取低 21 位，避免负数扩展把邻位污染
  let mask = 0x1FFFFFUL
  ((x.reinterpret_as_uint().to_uint64() & mask) << 42) |
  ((y.reinterpret_as_uint().to_uint64() & mask) << 21) |
  (z.reinterpret_as_uint().to_uint64() & mask)
}

///|
/// 把一条边的两个端点编号打包成一个 64 位的整数。
///
/// 无向边：小的编号放高位，这样 (a,b) 和 (b,a) 得到同一个键。
fn pack_edge(a : Int, b : Int) -> UInt64 {
  let lo = if a < b { a } else { b }
  let hi = if a < b { b } else { a }
  (lo.to_uint64() << 32) | hi.to_uint64()
}

///|
/// 把边数组排序后扫描一遍，数出边界边和非流形边。
///
/// 排序之后同一条边必然挨在一起，扫一遍数连续相同的个数就行，
/// 不需要哈希表。
fn count_edges(edges : Array[UInt64]) -> (Int, Int) {
  if edges.length() == 0 {
    return (0, 0)
  }
  edges.sort()
  let mut boundary = 0
  let mut non_manifold = 0
  let mut run = 1
  for i = 1; i < edges.length(); i = i + 1 {
    if edges[i] == edges[i - 1] {
      run = run + 1
    } else {
      if run == 1 {
        boundary = boundary + 1
      } else if run > 2 {
        non_manifold = non_manifold + 1
      }
      run = 1
    }
  }
  // 最后一段
  if run == 1 {
    boundary = boundary + 1
  } else if run > 2 {
    non_manifold = non_manifold + 1
  }
  (boundary, non_manifold)
}

///|
/// 流式扫描 ASCII STL。
///
/// 逐行扫，同样是累加不保留。ASCII 文件本身比二进制大好几倍，
/// 流式的意义反而更大。
pub fn stream_stl_ascii(text : String) -> Result[StreamReport, String] {
  let mut volume = 0.0
  let mut area = 0.0
  let mut min : Vec3? = None
  let mut max : Vec3? = None
  let weld : Map[UInt64, Int] = Map([])
  let edges : Array[UInt64] = []
  let mut unique_vertices = 0
  let mut triangles = 0
  let mut raw_vertices = 0

  // 当前面攒到的三个顶点
  let mut va = Vec3::zero()
  let mut vb = Vec3::zero()
  let mut vc = Vec3::zero()
  let mut have = 0
  let mut line_no = 0

  for raw_line in text.split("\n") {
    line_no = line_no + 1
    let tokens : Array[StringView] = []
    for raw_token in raw_line.split(" ") {
      let token = strip_cr(raw_token)
      if token.length() > 0 {
        tokens.push(token)
      }
    }
    match tokens {
      ["vertex", x, y, z] => {
        let v = match parse_vec3(x, y, z, line_no) {
          Ok(v) => v
          Err(msg) => return Err(msg)
        }
        if have == 0 {
          va = v
        } else if have == 1 {
          vb = v
        } else if have == 2 {
          vc = v
        }
        have = have + 1
        raw_vertices = raw_vertices + 1
      }
      ["endfacet", ..] => {
        if have == 3 {
          triangles = triangles + 1
          volume = volume + va.dot(vb.cross(vc)) / 6.0
          area = area + vb.sub(va).cross(vc.sub(va)).length() / 2.0
          for v in [va, vb, vc] {
            let (lo, hi) = expand_bbox(min, max, v)
            min = lo
            max = hi
          }
          let ia = weld_vertex(weld, va)
          let ib = weld_vertex(weld, vb)
          let ic = weld_vertex(weld, vc)
          if weld.length() > unique_vertices {
            unique_vertices = weld.length()
          }
          if ia != ib {
            edges.push(pack_edge(ia, ib))
          }
          if ib != ic {
            edges.push(pack_edge(ib, ic))
          }
          if ic != ia {
            edges.push(pack_edge(ic, ia))
          }
        }
        have = 0
      }
      _ => ()
    }
  }

  if triangles == 0 {
    return Err("这个 ASCII STL 里一个三角形都没有，可能不是 STL 文件")
  }
  let (boundary, non_manifold) = count_edges(edges)
  Ok(StreamReport::{
    triangle_count: triangles,
    raw_vertex_count: raw_vertices,
    unique_vertex_count: unique_vertices,
    boundary_edge_count: boundary,
    non_manifold_edge_count: non_manifold,
    volume: volume.abs(),
    surface_area: area,
    bbox: match (min, max) {
      (Some(lo), Some(hi)) => Some(Aabb::{ min: lo, max: hi, })
      _ => None
    },
  })
}

// ── 分块扫描 ────────────────────────────────────────────────────────────
//
// 上面那两个 `stream_stl_*` 仍然是「整个文件都在内存里」。要真正把文件
// 那份内存也省掉，得能**分块读**——这需要 `moonbitlang/async/fs` 的
// `File::read_at`，而那是异步的。
//
// 所以这里把解析逻辑抽成一个「喂数据块」的扫描器：它本身是纯同步的、
// 不依赖任何外部库，调用方（命令行工具）负责用异步 IO 把文件一块块读进来。
// 这样库本体仍然是零第三方依赖。

///|
/// 分块扫描二进制 STL 的状态机。
///
/// 用法：反复 `feed` 数据块，最后 `finish` 出报告。
/// 内部只保留「没凑够一个完整记录的零头」和统计需要的那两张表，
/// **不保留三角形本身**，所以内存不随模型规模增长。
pub(all) struct StlScanner {
  /// 上一次喂进来、还没凑够一个完整记录的零头
  priv tail : Array[Byte]
  /// 文件头读完了没有
  priv mut started : Bool
  /// 头部声称的三角形数
  priv mut declared : Int
  /// 已经处理了多少个三角形
  priv mut done : Int
  priv mut volume : Double
  priv mut area : Double
  priv mut min : Vec3?
  priv mut max : Vec3?
  /// 顶点去重表
  priv weld : Map[UInt64, Int]
  /// 边表，最后统一排序统计
  priv edges : Array[UInt64]
  /// 读到的总字节数，用来核对文件长度
  priv mut consumed : UInt64
}

///|
/// 二进制 STL 的文件头长度：80 字节说明 + 4 字节三角形数。
const STL_HEADER_SIZE : Int = 84

///|
/// 二进制 STL 每个三角形固定 50 字节。
const STL_RECORD_SIZE : Int = 50

///|
pub fn StlScanner::new() -> StlScanner {
  StlScanner::{
    tail: [],
    started: false,
    declared: 0,
    done: 0,
    volume: 0.0,
    area: 0.0,
    min: None,
    max: None,
    weld: Map([]),
    edges: [],
    consumed: 0UL,
  }
}

///|
/// 喂一块数据进去。
///
/// 块的大小随意，不要求对齐到 50 字节——零头会在内部攒着，
/// 和下一块拼起来。调用方按 64 KB 之类的尺寸读就行。
pub fn StlScanner::feed(self : StlScanner, chunk : Bytes) -> Unit {
  self.consumed = self.consumed + chunk.length().to_uint64()
  for i = 0; i < chunk.length(); i = i + 1 {
    self.tail.push(chunk[i])
  }
  self.drain()
}

///|
/// 把 tail 里已经凑够整记录的部分处理掉。
fn StlScanner::drain(self : StlScanner) -> Unit {
  let mut pos = 0
  // 先处理文件头
  if !self.started {
    if self.tail.length() < STL_HEADER_SIZE {
      return
    }
    // 三角形数量在偏移 80 处，小端
    let head = Bytes::from_array(self.tail[:STL_HEADER_SIZE])
    self.declared = read_u32_le(head, 80).reinterpret_as_int()
    self.started = true
    pos = STL_HEADER_SIZE
  }
  // 再逐个处理完整的记录
  while self.tail.length() - pos >= STL_RECORD_SIZE {
    let rec = Bytes::from_array(self.tail[pos:pos + STL_RECORD_SIZE])
    self.absorb(rec)
    self.done = self.done + 1
    pos = pos + STL_RECORD_SIZE
  }
  if pos > 0 {
    // 把已处理的部分丢掉，只留零头。
    // 这里不能直接 `self.tail = self.tail[pos:]`——那样每块都要重建数组，
    // 攒够一次再截。
    let rest : Array[Byte] = []
    for i = pos; i < self.tail.length(); i = i + 1 {
      rest.push(self.tail[i])
    }
    self.tail.clear()
    for b in rest {
      self.tail.push(b)
    }
  }
}

///|
/// 处理一个 50 字节的三角形记录。
fn StlScanner::absorb(self : StlScanner, rec : Bytes) -> Unit {
  // 前 12 字节是法线，跳过——统计用不上
  let a = read_vec3_f32(rec, 12)
  let b = read_vec3_f32(rec, 24)
  let c = read_vec3_f32(rec, 36)

  self.volume = self.volume + a.dot(b.cross(c)) / 6.0
  self.area = self.area + b.sub(a).cross(c.sub(a)).length() / 2.0
  for v in [a, b, c] {
    let (lo, hi) = expand_bbox(self.min, self.max, v)
    self.min = lo
    self.max = hi
  }
  let ia = weld_vertex(self.weld, a)
  let ib = weld_vertex(self.weld, b)
  let ic = weld_vertex(self.weld, c)
  if ia != ib {
    self.edges.push(pack_edge(ia, ib))
  }
  if ib != ic {
    self.edges.push(pack_edge(ib, ic))
  }
  if ic != ia {
    self.edges.push(pack_edge(ic, ia))
  }
}

///|
/// 结束扫描，出报告。
pub fn StlScanner::finish(self : StlScanner) -> Result[StreamReport, String] {
  if !self.started {
    return Err(
      "文件太短，连 84 字节的文件头都没读全（只读到 \{self.consumed} 字节）",
    )
  }
  if self.done != self.declared {
    return Err(
      "文件被截断了：头部声称有 \{self.declared} 个三角形，实际只读到 \{self.done} 个",
    )
  }
  if self.done == 0 {
    return Err("这个二进制 STL 里一个三角形都没有")
  }
  let (boundary, non_manifold) = count_edges(self.edges)
  Ok(StreamReport::{
    triangle_count: self.done,
    raw_vertex_count: self.done * 3,
    unique_vertex_count: self.weld.length(),
    boundary_edge_count: boundary,
    non_manifold_edge_count: non_manifold,
    volume: self.volume.abs(),
    surface_area: self.area,
    bbox: match (self.min, self.max) {
      (Some(lo), Some(hi)) => Some(Aabb::{ min: lo, max: hi, })
      _ => None
    },
  })
}
