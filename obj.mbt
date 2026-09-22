// OBJ 解析。
//
// OBJ 跟 STL 有两个根本区别，决定了这个解析器长得完全不一样：
//
// **一、OBJ 有共享顶点表。** 文件开头先把所有顶点列一遍（`v x y z`），
// 后面的面只写编号（`f 1 2 3`）。一个立方体是 8 行 v + 6 行 f，
// 而 STL 要写 36 遍顶点。所以这里得先建表再查表。
//
// **二、OBJ 的面可以是多边形。** `f 1 2 3 4` 是个四边形，甚至可以是
// 十七边形。而我们的 Mesh 只装三角形，所以要在这里做三角化——
// 用最简单可靠的扇形法：以第一个顶点为中心，跟后面每两个相邻顶点
// 各组成一个三角形。对凸多边形永远正确，对凹多边形可能出错，
// 但 3D 打印模型里的面几乎都是凸的。
//
// 另外 OBJ 的编号从 1 开始，而且可以是负数（表示从末尾往前数）。

///|
/// 解析 OBJ 文本。
///
/// 只认几何相关的关键字：`v`（顶点）、`f`（面）、`vn`（法线）会读，
/// 其余（`vt`、`g`、`o`、`s`、`mtllib`、`usemtl`、注释）跳过——
/// 它们不影响几何形状，也不影响能不能打印。
pub fn parse_obj(text : String) -> Result[Mesh, String] {
  // 顶点表。OBJ 的编号是 1 基的，为了少一次减法，这里在下标 0 处
  // 塞一个占位，让 vertices[1] 就是文件里的第 1 号顶点。
  let vertices : Array[Vec3] = [Vec3::zero()]
  // 法线表，同样是 1 基
  let normals : Array[Vec3] = [Vec3::zero()]
  let triangles : Array[Triangle] = []
  let mut line_no = 0

  for raw_line in text.split("\n") {
    line_no = line_no + 1
    let tokens : Array[StringView] = []
    for token in raw_line.split(" ") {
      if token.length() > 0 {
        tokens.push(token)
      }
    }
    match tokens {
      ["v", x, y, z, ..] =>
        match parse_vec3(x, y, z, line_no) {
          Ok(v) => vertices.push(v)
          Err(msg) => return Err(msg)
        }
      ["vn", x, y, z, ..] =>
        match parse_vec3(x, y, z, line_no) {
          Ok(v) => normals.push(v)
          Err(msg) => return Err(msg)
        }
      ["f", .. rest] =>
        match parse_face(rest, vertices, normals, line_no) {
          Ok(new_triangles) =>
            for t in new_triangles {
              triangles.push(t)
            }
          Err(msg) => return Err(msg)
        }
      _ => ()
    }
  }

  if triangles.length() == 0 {
    return Err("这个 OBJ 里一个面都没有，可能不是 OBJ 文件")
  }
  Ok(Mesh::new(triangles))
}

///|
/// 解析一个面，返回它三角化之后的三角形。
///
/// 每个顶点记号可能是 `3`、`3/5`、`3//7`、`3/5/7` 四种形式之一，
/// 分别表示「只有顶点」「顶点/纹理」「顶点//法线」「顶点/纹理/法线」。
/// 我们只关心顶点和法线，纹理坐标跳过。
fn parse_face(
  refs : ArrayView[StringView],
  vertices : Array[Vec3],
  normals : Array[Vec3],
  line_no : Int,
) -> Result[Array[Triangle], String] {
  if refs.length() < 3 {
    return Err(
      "第 \{line_no} 行：一个面至少要有 3 个顶点，这里只有 \{refs.length()} 个",
    )
  }

  // 先把这个面的所有顶点解出来
  let face_vertices : Array[Vec3] = []
  let face_normals : Array[Vec3] = []
  for vref in refs {
    match parse_face_ref(vref, vertices, normals, line_no) {
      Ok(pair) => {
        face_vertices.push(pair.0)
        face_normals.push(pair.1)
      }
      Err(msg) => return Err(msg)
    }
  }

  // 扇形三角化：以第 0 个顶点为中心，跟后面每两个相邻顶点组成一个三角形。
  // 四边形 → 2 个三角形，五边形 → 3 个，以此类推。
  let result : Array[Triangle] = []
  for i = 1; i + 1 < face_vertices.length(); i = i + 1 {
    // 法线优先用文件里写的。一个平面的三个顶点法线一样时直接用
    // （3D 打印模型里绝大多数面都是平的），不一样就留零，
    // 让校验环节去和按顶点顺序算出来的比。
    let normal = if same_vec(face_normals[0], face_normals[i]) &&
      same_vec(face_normals[i], face_normals[i + 1]) {
      face_normals[0]
    } else {
      Vec3::zero()
    }
    result.push({
      normal,
      a: face_vertices[0],
      b: face_vertices[i],
      c: face_vertices[i + 1],
    })
  }
  Ok(result)
}

///|
/// 两个向量是不是逐分量完全相等。
///
/// 用精确比较而不是带容差：这里的用途是判断「同一个面里几个顶点的法线
/// 是不是同一份数据」，它们要么来自文件里同一个 `vn` 编号（那就完全一样），
/// 要么就不是同一个。引入容差反而会把「相近但不相同」误判成相同。
fn same_vec(a : Vec3, b : Vec3) -> Bool {
  a.x == b.x && a.y == b.y && a.z == b.z
}

///|
/// 解析面里的一个顶点记号，返回（顶点, 法线）。
///
/// 法线可能没有（`f 1 2 3` 或 `f 1/1 2/2 3/3`），那就返回零向量。
fn parse_face_ref(
  vref : StringView,
  vertices : Array[Vec3],
  normals : Array[Vec3],
  line_no : Int,
) -> Result[(Vec3, Vec3), String] {
  // 按 `/` 切开，最多三段：顶点[/纹理][/法线]
  let parts : Array[StringView] = []
  for part in vref.split("/") {
    parts.push(part)
  }
  let vertex_index = match parts {
    [v, ..] => v
    [] => return Err("第 \{line_no} 行：空的顶点记号")
  }
  let vertex = match lookup(vertex_index, vertices, line_no, "顶点") {
    Ok(v) => v
    Err(msg) => return Err(msg)
  }
  // 第三段才是法线；只有两段的话那段是纹理，跳过
  let normal = match parts {
    [_, _, n, ..] =>
      if n.length() == 0 {
        Vec3::zero()
      } else {
        match lookup(n, normals, line_no, "法线") {
          Ok(v) => v
          Err(msg) => return Err(msg)
        }
      }
    _ => Vec3::zero()
  }
  Ok((vertex, normal))
}

///|
/// 把 OBJ 的编号查成表里的值。
///
/// OBJ 的编号有两个规矩：
/// - **从 1 开始**，不是从 0。所以查表时要用 `index - 1`；
///   我们的表在开头塞了个占位，正好抵消。
/// - **可以是负数**，表示从当前表的末尾往前数：-1 是最后一个，
///   -2 是倒数第二个。有些导出器喜欢这么写。
fn[T] lookup(
  token : StringView,
  table : Array[T],
  line_no : Int,
  what : String,
) -> Result[T, String] {
  let index = match parse_int(token, line_no, what) {
    Ok(i) => i
    Err(msg) => return Err(msg)
  }
  if index == 0 {
    return Err(
      "第 \{line_no} 行：\{what}编号不能是 0（OBJ 从 1 开始数）",
    )
  }
  // 表里有 n 个真实条目（下标 0 是占位），合法编号是 1..n 和 -1..-n
  let count = table.length() - 1
  let resolved = if index > 0 { index } else { count + index + 1 }
  if resolved < 1 || resolved > count {
    return Err(
      "第 \{line_no} 行：\{what}编号 \{index} 超出范围（文件里一共有 \{count} 个\{what}）",
    )
  }
  Ok(table[resolved])
}

///|
/// 解析一个整数，失败时给出中文提示。
fn parse_int(
  token : StringView,
  line_no : Int,
  what : String,
) -> Result[Int, String] {
  Ok(@string.parse_int(token)) catch {
    _ =>
      Err(
        "第 \{line_no} 行：『\{token}』不是合法的\{what}编号（OBJ 的编号必须是整数）",
      )
  }
}
