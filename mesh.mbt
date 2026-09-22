// 网格数据结构。
//
// 有意保持最简单：一个三角形列表。
//
// 为什么不做「顶点表 + 面索引表」那种共享顶点的结构？因为 STL 格式本身
// 就是散的——每个三角形把自己的三个顶点各写一遍，同一个顶点在文件里
// 出现很多次。硬在解析阶段做去重会碰到浮点比较的问题（多少算「同一个
// 点」？），而且对校验来说，「有多少个重复顶点」本身就是一条要报告的信息。
//
// 所以解析阶段原样保留，需要拓扑信息的地方（水密性、顶点去重）单独算。

///|
/// 一个三角形。
///
/// 法线是文件里写的那个，不一定可信——很多导出器写得一塌糊涂，甚至直接
/// 填 0 0 0。所以别的地方要用朝向时，一律用 `computed_normal()` 自己算。
pub(all) struct Triangle {
  normal : Vec3
  a : Vec3
  b : Vec3
  c : Vec3
}

///|
/// 用三个顶点建三角形，法线留零，留给调用方填
/// （STL 二进制文件里有现成的法线，OBJ 需要自己算）。
pub fn Triangle::from_vertices(a : Vec3, b : Vec3, c : Vec3) -> Triangle {
  { normal: Vec3::zero(), a, b, c, }
}

///|
/// 按右手定则从顶点算出的法线（已单位化）。
///
/// 面法线 = (b - a) × (c - a)。三个点共线时叉乘为零向量，
/// `normalize` 会原样返回零向量，调用方靠这个判断退化面。
pub fn Triangle::computed_normal(self : Triangle) -> Vec3 {
  self.b.sub(self.a).cross(self.c.sub(self.a)).normalize()
}

///|
/// 三角形面积。
///
/// 两条边叉乘的模长等于这两个边张成的平行四边形面积，三角形是它的一半。
pub fn Triangle::area(self : Triangle) -> Double {
  self.b.sub(self.a).cross(self.c.sub(self.a)).length() / 2.0
}

///|
/// 有符号体积贡献。
///
/// 把「三角形 + 原点」看成一个四面体，用混合积算它的有符号体积。
/// 整个闭合网格把每个三角形的贡献加起来，原点以外的部分会正负抵消，
/// 剩下的就是这个网格的体积——这就是为什么要求网格是水密的：
/// 有破洞就抵消不干净，算出来的体积是错的。
pub fn Triangle::signed_volume(self : Triangle) -> Double {
  self.a.dot(self.b.cross(self.c)) / 6.0
}

///|
/// 三角形的三个顶点，按 a、b、c 的顺序。
pub fn Triangle::vertices(self : Triangle) -> Array[Vec3] {
  [self.a, self.b, self.c]
}

///|
/// 轴对齐包围盒。
pub(all) struct Aabb {
  min : Vec3
  max : Vec3
}

///|
/// 包围盒的尺寸（长宽高）。
pub fn Aabb::size(self : Aabb) -> Vec3 {
  self.max.sub(self.min)
}

///|
/// 网格：一个三角形列表，就这么多。
pub(all) struct Mesh {
  triangles : Array[Triangle]
}

///|
pub fn Mesh::new(triangles : Array[Triangle]) -> Mesh {
  { triangles, }
}

///|
/// 空网格。
pub fn Mesh::empty() -> Mesh {
  { triangles: [], }
}

///|
/// 三角形数量。
pub fn Mesh::triangle_count(self : Mesh) -> Int {
  self.triangles.length()
}

///|
/// 网格是不是空的（一个三角形都没有）。
pub fn Mesh::is_empty(self : Mesh) -> Bool {
  self.triangles.is_empty()
}

///|
/// 所有顶点，含重复。数量是三角形数 × 3。
///
/// 「文件里写了多少个顶点」和「实际有多少个不同的顶点」是两回事，
/// 校验环节会分别报告，所以这里不做去重。
pub fn Mesh::vertices(self : Mesh) -> Array[Vec3] {
  let result : Array[Vec3] = []
  for triangle in self.triangles {
    result.push(triangle.a)
    result.push(triangle.b)
    result.push(triangle.c)
  }
  result
}

///|
/// 网格围出的体积。
///
/// 把每个三角形的有符号体积加起来。这个算法**要求网格是水密的**：
/// 闭合曲面上各面的贡献会正负抵消，只留下包围的那块空间；有破洞就
/// 抵消不干净，算出来的数没有意义。
///
/// 所以调用方在报这个数之前，应该先看水密性校验的结果。现在还没有
/// 校验环节，先直接算；等做校验那一步，报告里会注明这个前提。
pub fn Mesh::volume(self : Mesh) -> Double {
  let mut total = 0.0
  for triangle in self.triangles {
    total = total + triangle.signed_volume()
  }
  total.abs()
}

///|
/// 网格的总表面积：所有三角形面积之和。
///
/// 这个数不受水密性影响——破洞的网格也能算出「现有这些面的总面积」，
/// 只是它不等于「这个实体的表面积」。
pub fn Mesh::surface_area(self : Mesh) -> Double {
  let mut total = 0.0
  for triangle in self.triangles {
    total = total + triangle.area()
  }
  total
}

///|
/// 轴对齐包围盒。空网格返回 `None`。
pub fn Mesh::bounding_box(self : Mesh) -> Aabb? {
  match self.triangles {
    [] => None
    _ => {
      let mut min = Vec3::zero()
      let mut max = Vec3::zero()
      let mut first = true
      for triangle in self.triangles {
        for v in triangle.vertices() {
          if first {
            min = v
            max = v
            first = false
          } else {
            min = { x: min.x.min(v.x), y: min.y.min(v.y), z: min.z.min(v.z), }
            max = { x: max.x.max(v.x), y: max.y.max(v.y), z: max.z.max(v.z), }
          }
        }
      }
      Some({ min, max, })
    }
  }
}
