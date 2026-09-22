// 三维向量。
//
// 网格处理需要的数学出乎意料地少：点的减法、叉乘（算面积和法线）、
// 点乘（判朝向和共线）、模长。没有矩阵、没有坐标变换、没有投影，
// 所以整个库的几何基础就这一个结构体。

///|
/// 三维向量。
///
/// 坐标用 `Double`，即使 STL 二进制格式里存的是 32 位浮点。原因是后面
/// 要做的体积求和是几十万项累加，用 32 位会在累加过程里越飘越远；
/// 读进来就转成双精度，误差只来自原始数据本身。
pub(all) struct Vec3 {
  x : Double
  y : Double
  z : Double
}

///|
pub fn Vec3::new(x : Double, y : Double, z : Double) -> Vec3 {
  { x, y, z, }
}

///|
/// 零向量，累加包围盒之类的场景当起点用。
pub fn Vec3::zero() -> Vec3 {
  { x: 0.0, y: 0.0, z: 0.0, }
}

///|
/// `self - other`：从 other 指向 self 的向量。
///
/// 计算三角形法线时用到：两条边向量相减得到同一个起点出发的两条边。
pub fn Vec3::sub(self : Vec3, other : Vec3) -> Vec3 {
  { x: self.x - other.x, y: self.y - other.y, z: self.z - other.z, }
}

///|
/// 叉乘。
///
/// 这个库用得最多的运算：
/// - 两条边向量叉乘得到三角形法线
/// - 法线模长的一半就是三角形面积
/// - 法线与视线点乘可以判断面朝向
pub fn Vec3::cross(self : Vec3, other : Vec3) -> Vec3 {
  {
    x: self.y * other.z - self.z * other.y,
    y: self.z * other.x - self.x * other.z,
    z: self.x * other.y - self.y * other.x,
  }
}

///|
/// 点乘。
pub fn Vec3::dot(self : Vec3, other : Vec3) -> Double {
  self.x * other.x + self.y * other.y + self.z * other.z
}

///|
/// 模长。
pub fn Vec3::length(self : Vec3) -> Double {
  self.dot(self).sqrt()
}

///|
/// 单位化。零向量原样返回——网格里出现零长度法线时不该让整个流程崩掉，
/// 交给校验环节去报告。
pub fn Vec3::normalize(self : Vec3) -> Vec3 {
  let len = self.length()
  if len == 0.0 {
    self
  } else {
    { x: self.x / len, y: self.y / len, z: self.z / len, }
  }
}

///|
/// 判断是否为零向量（在给定容差内）。
///
/// 退化检测要用：三角形两条边叉乘结果接近零，说明三个点共线，
/// 这个面没有面积。
pub fn Vec3::is_zero(self : Vec3, tolerance : Double) -> Bool {
  self.length() <= tolerance
}
