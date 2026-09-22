// 网格导出。
//
// 修完的模型得能存下来才有用，所以这里写两个格式的导出器。
//
// 二进制 STL 是默认选择：占空间小（每个三角形固定 50 字节，ASCII 要
// 两百多字节），而且所有切片软件都认。OBJ 用在需要人眼看的场合。

///|
/// 把一个 Double 写成 4 字节小端 float32，追加到缓冲区。
///
/// 用 `reinterpret_as_uint` 按位取，而不是做数值换算——IEEE 754 的位
/// 模式直接搬过去就行。注意这里会把双精度截成单精度，因为 STL 二进制
/// 格式里就是 32 位。这是格式本身的限制，不是我们丢精度。
fn push_f32(buf : Array[Byte], value : Double) -> Unit {
  let bits = Float::from_double(value)
    .reinterpret_as_uint()
    .reinterpret_as_int()
  buf.push((bits & 0xFF).to_byte())
  buf.push(((bits >> 8) & 0xFF).to_byte())
  buf.push(((bits >> 16) & 0xFF).to_byte())
  buf.push(((bits >> 24) & 0xFF).to_byte())
}

///|
/// 追加一个小端 32 位无符号整数。
fn push_u32(buf : Array[Byte], value : Int) -> Unit {
  buf.push((value & 0xFF).to_byte())
  buf.push(((value >> 8) & 0xFF).to_byte())
  buf.push(((value >> 16) & 0xFF).to_byte())
  buf.push(((value >> 24) & 0xFF).to_byte())
}

///|
/// 导出成二进制 STL。
///
/// 写之前会把法线重算一遍——文件里存的那份可能是错的，而导出的文件
/// 是要拿去打印的，不能把错误带出去。
pub fn write_stl_binary(mesh : Mesh) -> Bytes {
  let buf : Array[Byte] = []

  // 80 字节文件头。标准里说是「任意内容」，惯例是写一句来源说明。
  // 注意不能用 "solid" 开头——有些老软件靠这个判断是不是 ASCII 格式，
  // 会被骗到。
  let header = "stlkit - 由 MoonBit 生成"
  let header_bytes = @utf8.encode(header)
  let header_len = if header_bytes.length() > 80 {
    80
  } else {
    header_bytes.length()
  }
  for i = 0; i < header_len; i = i + 1 {
    buf.push(header_bytes[i])
  }
  for i = header_len; i < 80; i = i + 1 {
    buf.push(b'\x00')
  }

  push_u32(buf, mesh.triangle_count())

  for triangle in mesh.triangles {
    // 法线现算，不用文件里的
    let n = triangle.computed_normal()
    push_f32(buf, n.x)
    push_f32(buf, n.y)
    push_f32(buf, n.z)
    push_f32(buf, triangle.a.x)
    push_f32(buf, triangle.a.y)
    push_f32(buf, triangle.a.z)
    push_f32(buf, triangle.b.x)
    push_f32(buf, triangle.b.y)
    push_f32(buf, triangle.b.z)
    push_f32(buf, triangle.c.x)
    push_f32(buf, triangle.c.y)
    push_f32(buf, triangle.c.z)
    // 2 字节属性。标准里没有定义含义，惯例填 0。
    buf.push(b'\x00')
    buf.push(b'\x00')
  }

  Bytes::from_array(buf)
}

///|
/// 导出成 ASCII STL。人眼能读，但体积是二进制版的好几倍。
pub fn write_stl_ascii(mesh : Mesh, name : String) -> String {
  let parts : Array[String] = ["solid \{name}\n"]
  for triangle in mesh.triangles {
    let n = triangle.computed_normal()
    parts.push("  facet normal \{n.x} \{n.y} \{n.z}\n")
    parts.push("    outer loop\n")
    for v in triangle.vertices() {
      parts.push("      vertex \{v.x} \{v.y} \{v.z}\n")
    }
    parts.push("    endloop\n")
    parts.push("  endfacet\n")
  }
  parts.push("endsolid \{name}\n")
  parts.join("")
}

///|
/// 导出成 OBJ。
///
/// OBJ 有共享顶点表，所以这里要先按位置去重再写——不然就白费了 OBJ
/// 的格式优势，写出来比 STL 还大。
///
/// 注意：去重会让拓扑变成共享顶点的形式，这个文件重新读进来之后
/// 「有多少重复顶点」那条校验信息就跟原来不一样了。这是格式本身的
/// 差别，不是数据丢了。
pub fn write_obj(mesh : Mesh) -> String {
  let lookup : Map[String, Int] = Map([])
  // OBJ 的编号从 1 开始
  let vertex_lines : Array[String] = []
  let face_lines : Array[String] = []
  let mut next_id = 1

  let key_of = fn(v : Vec3) -> String { "\{v.x},\{v.y},\{v.z}" }

  for triangle in mesh.triangles {
    let ids : Array[Int] = []
    for v in triangle.vertices() {
      let key = key_of(v)
      let id = match lookup.get(key) {
        Some(id) => id
        None => {
          let id = next_id
          lookup.set(key, id)
          next_id = next_id + 1
          vertex_lines.push("v \{v.x} \{v.y} \{v.z}\n")
          id
        }
      }
      ids.push(id)
    }
    // 顶点的编号就是它在 vertex_lines 里的序号（从 1 开始），
    // 因为每遇到一个新顶点就立刻 push 一行。
    face_lines.push("f \{ids[0]} \{ids[1]} \{ids[2]}\n")
  }

  let parts : Array[String] = ["# 由 stlkit 生成\n"]
  for line in vertex_lines {
    parts.push(line)
  }
  for line in face_lines {
    parts.push(line)
  }
  parts.join("")
}

///|
/// 按文件名后缀选格式导出。
///
/// 这里是**唯一**一处看扩展名的地方，别处判断格式都看内容。因为导出
/// 必须由用户指定格式——同一个网格既可以写成 STL 也可以写成 OBJ，
/// 没有内容可看。
pub fn write_mesh(mesh : Mesh, path : String) -> Result[Bytes, String] {
  if ends_with_ignore_case(path, ".obj") {
    Ok(@utf8.encode(write_obj(mesh)))
  } else if ends_with_ignore_case(path, ".stl") {
    Ok(write_stl_binary(mesh))
  } else {
    Err(
      "认不出要导出成什么格式：文件名「\{path}」既不以 .stl 结尾也不以 .obj 结尾",
    )
  }
}

///|
/// 判断字符串是否以某个后缀结尾（忽略大小写）。
///
/// 手写而不是用现成函数，是因为 `String` 的下标是按码元算的，
/// 直接比较尾部要小心；这里两个参数都是短字符串，逐字符比最省心。
fn ends_with_ignore_case(s : String, suffix : String) -> Bool {
  let n = s.length()
  let m = suffix.length()
  if m > n {
    return false
  }
  for i = 0; i < m; i = i + 1 {
    let a = lower(s.code_unit_at(n - m + i))
    let b = lower(suffix.code_unit_at(i))
    if a != b {
      return false
    }
  }
  true
}

///|
/// 把一个 UTF-16 码元转成小写（只处理 ASCII 字母，够用了）。
fn lower(c : UInt16) -> UInt16 {
  if c >= 65 && c <= 90 {
    c + 32
  } else {
    c
  }
}
