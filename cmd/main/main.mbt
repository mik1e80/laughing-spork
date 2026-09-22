// 命令行入口。
//
// 参数解析交给官方库 moonbitlang/core/argparse，文件读取交给
// moonbitlang/x/fs，退出码用 moonbitlang/x/sys。
//
// 给一个 STL 或 OBJ 文件，打印它的体检报告：几何数据加四项校验结论。
// 可选 --svg 导出等轴测预览图，--fix 修复并存到指定文件。

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
        about="要处理的模型文件路径（STL 或 OBJ）",
        num_args=@argparse.ValueRange(lower=0, upper=1),
      ),
    ],
    options=[
      @argparse.OptionArg(
        "svg",
        about="把等轴测预览图导出成 SVG 文件",
      ),
      @argparse.OptionArg(
        "fix",
        about="修复网格并存到指定文件（按后缀选格式：.stl 或 .obj）",
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
  "  stlkit model.stl                  读一个模型，出体检报告\n" +
  "  stlkit model.stl --fix fixed.stl  修复并存到 fixed.stl\n" +
  "  stlkit model.stl --svg a.svg      顺便导出等轴测预览图\n" +
  "  stlkit                            不带参数时打印这份帮助\n" +
  "\n" +
  "格式：二进制 STL、ASCII STL、OBJ 三种都能认，按文件内容判断，\n" +
  "不看扩展名——从别处拷来的文件经常带着错的扩展名。\n"
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
/// 处理一个模型文件，把报告打印出来。
///
/// `svg_path` 给了的话，顺便导出一张等轴测预览图。
/// `fix_path` 给了的话，修一遍网格存到那里，并把修复前后的校验结果对照着打出来。
fn report(
  path : String,
  svg_path : String,
  fix_path : String,
) -> Result[Unit, String] {
  let data = @fs.read_file_to_bytes(path) catch {
    @fs.IOError(msg) => return Err("读不了文件「\{path}」：\{msg}")
  }
  let format_name = match @stlkit.detect_format(data) {
    @stlkit.Binary => "二进制 STL"
    @stlkit.Ascii => "ASCII STL"
    // STL 的两个分支都不认，那就当 OBJ 试。用内容判断而不是看扩展名——
    // 从别处拷来的文件经常带着错的扩展名。
    @stlkit.Unknown => "OBJ"
  }
  let mesh = match @stlkit.parse_mesh(data) {
    Ok(mesh) => mesh
    Err(msg) => return Err(msg)
  }
  let check = @stlkit.validate_default(mesh)

  println(path)
  println("  格式      \{format_name}")
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

  if fix_path != "" {
    return fix_and_save(mesh, check, fix_path)
  }

  if svg_path != "" {
    let svg = @stlkit.render_svg(mesh, @stlkit.PreviewOptions::default())
    @fs.write_string_to_file(svg_path, svg) catch {
      @fs.IOError(msg) =>
        return Err("写不了预览图「\{svg_path}」：\{msg}")
    }
    println("")
    println("  预览图已导出到 \{svg_path}")
  }
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
/// 修一遍网格，存到指定文件，把修复前后的校验结果对照着打出来。
///
/// 对照着打是有意的：只报「修复完成」没法让人判断到底修好了没有。
/// 显示「边界边 3 → 0」才叫证据。
fn fix_and_save(
  mesh : @stlkit.Mesh,
  before : @stlkit.ValidationReport,
  fix_path : String,
) -> Result[Unit, String] {
  if before.is_watertight() &&
    before.degenerate_count == 0 &&
    before.wrong_normal_count == 0 {
    println("")
    println("这个网格没有问题，不用修。")
    return Ok(())
  }

  let fixed = @stlkit.repair(mesh, @stlkit.RepairOptions::default())
  let after = @stlkit.validate_default(fixed.mesh)

  println("")
  println("修复：")
  if fixed.removed_degenerate > 0 {
    println("  删掉 \{fixed.removed_degenerate} 个退化三角形")
  }
  if fixed.removed_duplicates > 0 {
    println("  删掉 \{fixed.removed_duplicates} 个重复三角形")
  }
  if fixed.added_triangles > 0 {
    println("  补洞：新增 \{fixed.added_triangles} 个三角形")
  }
  if fixed.recomputed_normals > 0 {
    println("  重算 \{fixed.recomputed_normals} 个三角形的法线")
  }
  if !fixed.changed() {
    println(
      "  没能改动任何东西 —— 这个网格的问题修复功能处理不了",
    )
    return Err("修复没有产生任何改动")
  }

  println("")
  println(
    "  修复前 边界边 \{before.boundary_edge_count}  非流形边 \{before.non_manifold_edge_count}  退化面 \{before.degenerate_count}",
  )
  println(
    "  修复后 边界边 \{after.boundary_edge_count}  非流形边 \{after.non_manifold_edge_count}  退化面 \{after.degenerate_count}",
  )

  let bytes = match @stlkit.write_mesh(fixed.mesh, fix_path) {
    Ok(bytes) => bytes
    Err(msg) => return Err(msg)
  }
  @fs.write_bytes_to_file(fix_path, bytes) catch {
    @fs.IOError(msg) => return Err("写不了文件「\{fix_path}」：\{msg}")
  }

  println("")
  if after.is_watertight() {
    println(
      "  已存到 \{fix_path}（\{bytes.length()} 字节），现在可以切片打印了",
    )
  } else {
    println(
      "  已存到 \{fix_path}，但还有 \{after.boundary_edge_count} 条边界边没补上 —— 洞的形状太复杂，自动补洞处理不了",
    )
  }
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
  let svg_path = match matches.values.get("svg") {
    Some([first, ..]) => first
    _ => ""
  }
  let fix_path = match matches.values.get("fix") {
    Some([first, ..]) => first
    _ => ""
  }
  report(path, svg_path, fix_path)
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
