// 给网页用的导出层。
//
// 这一层不做任何网格处理，只负责把库的 `Result` 翻译成 JavaScript 接得住
// 的形状，再把结果排成好解析的文本。转换逻辑全在 mik1e80/stlkit 里。
//
// 文件字节用 base64 传：JS 那边把 FileReader 读到的 ArrayBuffer 编成
// base64 字符串，这边解回字节。走字符串是因为 MoonBit 的 Bytes 过不了
// JS 边界（它是编译器的内部表示），而字符串两边都认。

///|
/// 分析一个模型文件，返回一份「每行一个 `字段|值`」的报告。
///
/// 为什么不用 JSON：库这边没有公开的 JSON 造值构造器（core/json 只有
/// as_xxx 取值的），手拼 JSON 还要处理转义。而这个报告只有数字和几个
/// 固定的中文标签，用竖线分隔足够，JS 那边 split 两下就解开了。
///
/// 失败时返回空串，具体原因问 `analyze_error`。
pub fn analyze(file_base64 : String) -> String {
  match analyze_inner(file_base64) {
    Ok(lines) => lines.join("\n")
    Err(_) => ""
  }
}

///|
/// 同样的输入会产生的错误信息；分析成功时返回空串。
///
/// 和 `analyze` 拆成两个函数是因为 `Result` 过不了 JavaScript 边界——
/// 调用方看到 `analyze` 返回空串时再来问一次原因即可。
pub fn analyze_error(file_base64 : String) -> String {
  match analyze_inner(file_base64) {
    Ok(_) => ""
    Err(msg) => msg
  }
}

///|
/// 把模型渲染成一张 SVG 图。出错时返回空串。
///
/// 特意**不**把错误信息拼进返回值里。解析错误的文案里可能带上文件里的
/// 原文（比如 OBJ 报「『xxx』不是合法的编号」），那是不受信任的内容，
/// 拼成 HTML 塞进页面就等于开了个注入口子。错误信息交给调用方用
/// textContent 显示。
pub fn preview(file_base64 : String) -> String {
  match analyze_mesh(file_base64) {
    Ok(mesh) => @stlkit.render_svg(mesh, preview_options())
    Err(_) => ""
  }
}

///|
/// 网页用的渲染尺寸。比库的默认值大一些，因为页面上展示得比较宽。
fn preview_options() -> @stlkit.PreviewOptions {
  { ..@stlkit.PreviewOptions::default(), width: 640, height: 480, }
}

///|
/// 解码 + 解析，返回网格。
fn analyze_mesh(file_base64 : String) -> Result[@stlkit.Mesh, String] {
  let data = decode(file_base64)
  match data {
    Err(msg) => Err(msg)
    Ok(data) => @stlkit.parse_mesh(data)
  }
}

///|
/// 真正的分析逻辑。
fn analyze_inner(file_base64 : String) -> Result[Array[String], String] {
  let data = match decode(file_base64) {
    Ok(data) => data
    Err(msg) => return Err(msg)
  }
  let mesh = match @stlkit.parse_mesh(data) {
    Ok(mesh) => mesh
    Err(msg) => return Err(msg)
  }
  let check = @stlkit.validate_default(mesh)

  let lines : Array[String] = []
  lines.push("格式|\{format_name(data)}")
  lines.push("三角形|\{mesh.triangle_count()}")
  lines.push("顶点|\{check.raw_vertex_count}")
  lines.push("去重顶点|\{check.unique_vertex_count}")
  match mesh.bounding_box() {
    Some(box) => {
      let size = box.size()
      lines.push(
        "包围盒|\{round3(size.x)} × \{round3(size.y)} × \{round3(size.z)}",
      )
    }
    None => ()
  }
  lines.push("体积|\{round3(mesh.volume())}")
  lines.push("表面积|\{round3(mesh.surface_area())}")
  lines.push("水密|\{check.is_watertight()}")
  lines.push("边界边|\{check.boundary_edge_count}")
  lines.push("非流形边|\{check.non_manifold_edge_count}")
  lines.push("退化面|\{check.degenerate_count}")
  lines.push("错误法线|\{check.wrong_normal_count}")
  Ok(lines)
}

///|
/// 判断格式，给网页显示用。跟 CLI 里的逻辑一致。
fn format_name(data : Bytes) -> String {
  match @stlkit.detect_format(data) {
    @stlkit.Binary => "二进制 STL"
    @stlkit.Ascii => "ASCII STL"
    @stlkit.Unknown => "OBJ"
  }
}

///|
/// 把 base64 解成字节，失败时给中文错误。
fn decode(file_base64 : String) -> Result[Bytes, String] {
  if file_base64.length() == 0 {
    return Err("没有收到文件内容")
  }
  Ok(@base64.decode(file_base64)) catch {
    _ => Err("文件内容解码失败，可能上传时出错了")
  }
}

///|
/// 保留三位小数。网格数据本身带浮点误差，多显示的位数没有意义。
fn round3(value : Double) -> String {
  let rounded = (value * 1000.0).round() / 1000.0
  rounded.to_string()
}
