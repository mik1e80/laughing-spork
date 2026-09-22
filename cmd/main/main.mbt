// 命令行入口。
//
// 参数解析交给官方库 moonbitlang/core/argparse，文件读取交给
// moonbitlang/x/fs，退出码用 moonbitlang/x/sys。
//
// 目前只有一条命令：info —— 读一个 STL 文件，报告它的基本情况。
// 后面的 check（校验）、convert（转换）、preview（预览）陆续加。

///|
/// 命令行定义。
///
/// 和上个项目一样特意关掉 argparse 自带的 `--help`：它内部直接调 wasi 的
/// proc_exit 结束进程，退出码和输出都不受我们控制。换成一枚普通 flag
/// 自己处理，这样还能在参数表后面接一段中文示例。
fn command() -> @argparse.Command {
  @argparse.Command(
    "stlkit",
    about="STL / OBJ 三维网格工具链——解析、校验、分析 3D 打印模型",
    positionals=[
      @argparse.PositionArg(
        "file",
        about="要处理的 STL 文件路径",
        num_args=@argparse.ValueRange(lower=0, upper=1),
      ),
    ],
    flags=[
      @argparse.FlagArg("help", short='h', about="显示这份帮助"),
    ],
    disable_help_flag=true,
  )
}

///|
/// 帮助文本：argparse 渲染的参数表，加上中文示例。
fn help_text(cmd : @argparse.Command) -> String {
  cmd.render_help() +
  "\n示例：\n" +
  "  stlkit model.stl            读一个模型，报告三角形数、体积、包围盒\n" +
  "  stlkit                      不带参数时打印这份帮助\n" +
  "\n" +
  "模型从哪来：直接给文件路径即可，ASCII 和二进制两种 STL 都能认。\n"
}

///|
/// 把浮点数格式化成固定小数位。
///
/// 直接用 Double 的默认输出会得到 0.9999999999999999 这种，对看报告的
/// 人没有意义——网格数据本身就带浮点误差，显示上保留几位就够。
fn fmt(value : Double, digits : Int) -> String {
  let mut scale = 1.0
  for _i = 0; _i < digits; _i = _i + 1 {
    scale = scale * 10.0
  }
  let rounded = (value * scale).round() / scale
  rounded.to_string()
}

///|
/// 处理一个 STL 文件，把报告打印出来。
fn report(path : String) -> Result[Unit, String] {
  let data = @fs.read_file_to_bytes(path) catch {
    @fs.IOError(msg) => return Err("读不了文件「\{path}」：\{msg}")
  }
  let format_name = match @stlkit.detect_format(data) {
    @stlkit.Binary => "二进制"
    @stlkit.Ascii => "ASCII"
    @stlkit.Unknown => "认不出"
  }
  let mesh = match @stlkit.parse_stl(data) {
    Ok(mesh) => mesh
    Err(msg) => return Err(msg)
  }

  println(path)
  println("  格式      \{format_name} STL")
  println("  三角形    \{mesh.triangle_count()}")
  println("  顶点      \{mesh.vertices().length()} 个（未去重）")
  match mesh.bounding_box() {
    Some(box) => {
      let size = box.size()
      println(
        "  包围盒    \{fmt(size.x, 3)} × \{fmt(size.y, 3)} × \{fmt(size.z, 3)} mm",
      )
    }
    None => ()
  }
  println("  体积      \{fmt(mesh.volume(), 3)} mm³")
  println("  表面积    \{fmt(mesh.surface_area(), 3)} mm²")
  Ok(())
}

///|
/// 入口逻辑。错误以 `Err` 返回，由 `main` 统一打印并定退出码。
fn run() -> Result[Unit, String] raise {
  let cmd = command()
  let matches = cmd.parse()
  if matches.flags.get("help") == Some(true) {
    println(help_text(cmd))
    return Ok(())
  }
  let path = match matches.values.get("file") {
    Some([first, ..]) => first
    _ => {
      println(help_text(cmd))
      return Ok(())
    }
  }
  report(path)
}

///|
/// 命令行入口。出错时以退出码 1 结束，方便脚本判断。
fn main {
  let result = run() catch { err => Err(err.to_string()) }
  match result {
    Ok(_) => ()
    Err(msg) => {
      println("错误：\{msg}")
      @sys.exit(1)
    }
  }
}
