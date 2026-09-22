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
    flags=[@argparse.FlagArg("help", short='h', about="显示这份帮助")],
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
  let check = @stlkit.validate_default(mesh)

  println(path)
  println("  格式      \{format_name} STL")
  println("  三角形    \{mesh.triangle_count()} 个")
  println(
    "  顶点      \{check.raw_vertex_count} 个（去重后 \{check.unique_vertex_count} 个）",
  )
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
  println("")
  print_findings(check)
  Ok(())
}

///|
/// 打印校验结果。
///
/// 每一条「不通过」都要说清楚**为什么这是问题**，不能只报一个数字。
/// 看到「有 3 条边界边」的人不知道这意味着什么，看到「切片软件分不清
/// 哪里是外面」才知道要修。
fn print_findings(check : @stlkit.ValidationReport) -> Unit {
  let mut problems = 0

  if check.boundary_edge_count > 0 {
    problems = problems + 1
    println(
      "  ✗ 不是水密网格 —— 有 \{check.boundary_edge_count} 条边只被一个面共用",
    )
    println(
      "    网格上有破洞，切片软件分不清哪里是实心哪里是空的，直接打印会失败",
    )
  }
  if check.non_manifold_edge_count > 0 {
    problems = problems + 1
    println(
      "  ✗ 有 \{check.non_manifold_edge_count} 条边被三个以上的面共用（非流形边）",
    )
    println("    这种地方切片软件无法判断该往哪一侧填材料")
  }
  if check.degenerate_count > 0 {
    problems = problems + 1
    println(
      "  ✗ 有 \{check.degenerate_count} 个退化三角形（三个点共线，没有面积）",
    )
    println("    会让切片软件算出零面积的层，产生碎片")
  }
  if check.wrong_normal_count > 0 {
    problems = problems + 1
    println(
      "  ⚠ 有 \{check.wrong_normal_count} 个三角形的法线朝向和顶点顺序不一致",
    )
    println(
      "    多数切片软件会自己重算，但依赖文件里法线的工具会画错",
    )
  }

  if problems == 0 {
    println("  ✓ 水密网格，拓扑上没有阻碍打印的问题")
  } else if check.is_watertight() {
    println("")
    println(
      "  结论：拓扑是闭合的，可以打印，但上面的问题建议先修",
    )
  } else {
    println("")
    println("  结论：直接打印会失败，需要先修复")
  }
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
