// 命令行入口。
//
// 参数解析交给官方库 moonbitlang/core/argparse，文件读取交给
// moonbitlang/x/fs，退出码用 moonbitlang/x/sys。
//
// 给一个 STL / OBJ / 3MF 文件，打印它的体检报告：几何数据加四项校验结论。
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
    about="STL / OBJ / 3MF 三维网格工具链——解析、校验、分析 3D 打印模型",
    positionals=[
      @argparse.PositionArg(
        "file",
        about="要处理的模型文件路径（STL / OBJ / 3MF）",
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
    flags=[
      @argparse.FlagArg(
        "strict",
        about="模型有问题时以退出码 1 结束（给 CI 用）",
      ),
      @argparse.FlagArg(
        "bench",
        about="跑基准测试，对比全量解析和流式扫描的耗时与内存",
      ),
      @argparse.FlagArg("help", short='h', about="显示这份帮助"),
    ],
    disable_help_flag=true,
  )
}


// ── 基准测试 ────────────────────────────────────────────────────────────
//
// 回答一个问题：处理超大模型时，**不保留网格**能省多少。
//
// 内存数字是**按数据结构大小算的**，不是操作系统实测的进程内存——
// wasm 的线性内存按页增长、还会预留，直接看进程 RSS 不准。
// 算的是「程序自己分配了多少字节」，公式写在下面的注释里，可以核对。

///|
/// 全量解析的内存占用（字节）。
///
/// - 文件字节：读进来之后一直在内存里
/// - Triangle 数组：每个 Triangle 是 4 个 Vec3 = 12 个 Double = 96 字节，
///   加上 Array 本身的元素指针（8 字节），合计 104 字节/三角形
fn full_memory(file_size : Int, triangles : Int) -> Int {
  file_size + triangles * 104
}

///|
/// 流式扫描的内存占用（字节）。
///
/// - 文件字节：同上（没有分块读的 API，这一份省不掉）
/// - 顶点表：Map 的链表哈希表，每项 = 8 字节键 + 4 字节值 + 链表指针和桶的开销，估 24 字节
/// - 边数组：紧凑的 UInt64 数组，8 字节/条
fn stream_memory(file_size : Int, vertices : Int, edges : Int) -> Int {
  file_size + vertices * 24 + edges * 8
}

///|
/// 把字节数格式化成好读的样子。
fn fmt_bytes(n : Int) -> String {
  let mb = 1024.0 * 1024.0
  let kb = 1024.0
  let d = n.to_double()
  if d >= mb {
    "\{fmt(d / mb, 2)} MB"
  } else if d >= kb {
    "\{fmt(d / kb, 2)} KB"
  } else {
    "\{n} 字节"
  }
}

///|
/// 跑两种解析方式，对比耗时和内存。
///|
/// 分块读取文件并流式扫描。
///
/// **整个过程文件不进内存**，只有一块固定大小的缓冲区在循环复用。
/// 这是和上面两种模式的本质区别：那两种都得先把文件整个读进来。
///
/// 走 `moonbitlang/async/fs` 是因为 `moonbitlang/x/fs` 只有
/// `read_file_to_bytes`（一次读完），没有带偏移量的读取。
async fn scan_chunked(path : String) -> Result[@stlkit.StreamReport, String] {
  let file = @asyncfs.open(path, mode=@asyncfs.Mode::ReadOnly) catch {
    err => return Err("打不开文件「\{path}」：\{err}")
  }
  let size = file.size() catch {
    err => {
      let _ = file.close()
      return Err("读不了文件大小：\{err}")
    }
  }
  let scanner = @stlkit.StlScanner::new()
  // 256 KB 一块。这是权衡：太小了系统调用次数多，太大了缓冲区本身占内存。
  // 关键是它**固定**——文件再大也不会变大
  let chunk = 262144
  let buf : FixedArray[Byte] = FixedArray::make(chunk, b'\x00')
  let mut pos = 0L
  let mut failure : String? = None
  while pos < size && failure is None {
    let remain = (size - pos).to_int()
    let want = if remain < chunk { remain } else { chunk }
    let n = file.read_at(buf, position=pos, offset=0, len=want) catch {
      err => {
        failure = Some("读文件失败：\{err}")
        0
      }
    }
    if n <= 0 {
      break
    }
    // 把这一块读到的部分交给扫描器
    let part : Array[Byte] = []
    for i = 0; i < n; i = i + 1 {
      part.push(buf[i])
    }
    scanner.feed(Bytes::from_array(part))
    pos = pos + n.to_int64()
  }
  let _ = file.close()
  match failure {
    Some(msg) => Err(msg)
    None => scanner.finish()
  }
}

///|
/// 跑三种解析方式，对比耗时和内存。
///
/// 内存数字是**按各自需要的数据结构算出来的**，不是操作系统实测的进程内存——
/// wasm 的线性内存按页增长、还会预留，直接看进程占用不准。公式可以在
/// `full_memory` / `stream_memory` 的注释里核对。
async fn bench(path : String) -> Result[Bool, String] {
  // ── 先做分块流式：这一步不碰整个文件，测出来的才是真流式 ──
  //
  // 分块扫描目前只支持**二进制** STL——那边每个三角形固定 50 字节，
  // 切块就是数数；ASCII 格式的记录是变长的文本行，得另写一套按行的缓冲。
  // 所以先试一下，不是二进制就跳过这一档，并在报告里说明原因，
  // 而不是让整个基准测试失败。
  let t2 = @bench.monotonic_clock_start()
  let chunked : @stlkit.StreamReport? = match scan_chunked(path) {
    Ok(r) => Some(r)
    Err(_) => None
  }
  let chunked_us = @bench.monotonic_clock_end(t2)

  // ── 后面两种都要整个文件在内存里 ──
  let data = @fs.read_file_to_bytes(path) catch {
    @fs.IOError(msg) => return Err("读不了文件「\{path}」：\{msg}")
  }
  let file_size = data.length()

  // 3MF 是个 ZIP 包，里面那段 deflate 流必须**整个解开**才知道内容，
  // 没有「边读边算」的余地——这个格式天生不支持流式。
  // 与其让它跑到后面报一句「全量和流式的结论对不上」，不如在这里说清楚。
  if @stlkit.detect_format(data) is @stlkit.ThreeMF {
    return Err(
      "--bench 比的是流式扫描和全量解析，3MF 是 ZIP 包、必须整个解开才能算，不适用。" +
      "拿一个 STL 文件来跑，或者直接不带 --bench 看体检报告",
    )
  }

  // 全量：解析出完整网格，能校验、能修复
  let t0 = @bench.monotonic_clock_start()
  let mesh = match @stlkit.parse_mesh(data) {
    Ok(mesh) => mesh
    Err(msg) => return Err(msg)
  }
  let check = @stlkit.validate_default(mesh)
  let winding = @stlkit.check_winding_default(mesh)
  let full_us = @bench.monotonic_clock_end(t0)

  // 流式：不保留网格，但文件还在内存里
  let t1 = @bench.monotonic_clock_start()
  let stream = match @stlkit.detect_format(data) {
    @stlkit.Ascii =>
      match @stlkit.stream_stl_ascii(@utf8.decode_lossy(data)) {
        Ok(r) => r
        Err(msg) => return Err(msg)
      }
    _ =>
      match @stlkit.stream_stl_binary(data) {
        Ok(r) => r
        Err(msg) => return Err(msg)
      }
  }
  let stream_us = @bench.monotonic_clock_end(t1)

  // 结论必须一致，不然快也没意义
  if check.triangle_count != stream.triangle_count ||
    check.boundary_edge_count != stream.boundary_edge_count {
    return Err("全量和流式的结论对不上，不能作为基准")
  }
  match chunked {
    Some(c) =>
      if c.triangle_count != stream.triangle_count ||
        c.boundary_edge_count != stream.boundary_edge_count {
        return Err("分块流式和整块流式的结论对不上，不能作为基准")
      }
    None => ()
  }

  let triangles = mesh.triangle_count()
  // 边的条数：水密网格里每条边被两个面共用，所以是三角形数的 1.5 倍
  let edges = stream.boundary_edge_count + stream.non_manifold_edge_count +
    triangles * 3 / 2
  // 分块模式的常驻内存：256 KB 缓冲 + 两张表，**不含文件**
  let chunk_bytes = 262144
  let full_mem = full_memory(file_size, triangles)
  let stream_mem = stream_memory(file_size, stream.unique_vertex_count, edges)
  let chunked_mem = match chunked {
    Some(c) => chunk_bytes + c.unique_vertex_count * 24 + edges * 8
    None => 0
  }

  println(path)
  println("  文件大小    \{fmt_bytes(file_size)}")
  println("  三角形      \{triangles}")
  println("")
  println("  全量解析（保留网格，能校验能修复）")
  println("    耗时      \{fmt(full_us / 1000.0, 1)} ms")
  println(
    "    内存      文件 \{fmt_bytes(file_size)} + 网格 \{fmt_bytes(triangles * 104)} = \{fmt_bytes(full_mem)}",
  )
  println("")
  println("  流式扫描（不保留网格，文件整块读）")
  println("    耗时      \{fmt(stream_us / 1000.0, 1)} ms")
  println(
    "    内存      文件 \{fmt_bytes(file_size)} + 顶点边表 \{fmt_bytes(edges * 8 + stream.unique_vertex_count * 24)} = \{fmt_bytes(stream_mem)}",
  )
  println("")
  println("  流式扫描（不保留网格，文件分块读）")
  match chunked {
    Some(_) => {
      println("    耗时      \{fmt(chunked_us / 1000.0, 1)} ms")
      println(
        "    内存      缓冲 \{fmt_bytes(chunk_bytes)} + 顶点边表 \{fmt_bytes(chunked_mem - chunk_bytes)} = \{fmt_bytes(chunked_mem)}",
      )
    }
    None =>
      println("    跳过      分块扫描目前只支持二进制 STL，这个文件是 ASCII 格式")
  }
  println("")

  println("  交叉验证    三角形数一致、水密性一致（通过）")
  println(
    "              绕向一致性：全量查出 \{winding.flipped_faces} 个反向面（流式做不到这项）",
  )
  println("")
  println("  说明        内存对比是公平的：差别只在要不要留下 Triangle 数组和文件本身；")
  println("              耗时对比对流式有利，因为全量还多做了绕向分析。")
  let best_mem = if chunked_mem > 0 { chunked_mem } else { stream_mem }
  let best_us = if chunked_mem > 0 { chunked_us } else { stream_us }
  let saved = full_mem - best_mem
  let pct = saved.to_double() / full_mem.to_double() * 100.0
  println(
    "  省内存      \{fmt_bytes(saved)}（\{fmt(pct, 1)}%）—— \{if chunked_mem > 0 { "分块读不占文件，" } else { "" }}流式不建网格",
  )
  if full_us > 0.0 && best_us > 0.0 {
    println("  提速        \{fmt(full_us / best_us, 1)} 倍")
  }
  Ok(false)
}

///|
/// 帮助文本：argparse 渲染的参数表，加上中文示例。
fn help_text(cmd : @argparse.Command) -> String {
  cmd.render_help() +
  "\n示例：\n" +
  "  stlkit model.stl                  读一个模型，出体检报告\n" +
  "  stlkit model.stl --fix fixed.stl  修复并存到 fixed.stl\n" +
  "  stlkit model.stl --svg a.svg      顺便导出等轴测预览图\n" +
  "  stlkit model.stl --strict         模型有问题时退出码为 1（给 CI 用）\n" +
  "  stlkit model.stl --bench          跑基准测试，对比三种解析方式的耗时与内存\n" +
  "  stlkit                            不带参数时打印这份帮助\n" +
  "\n" +
  "格式：二进制 STL、ASCII STL、OBJ、3MF 四种都能认，按文件内容判断，\n" +
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
///
/// 返回值里的 `Bool` 是「这个模型有没有问题」——`--strict` 模式要靠它定退出码。
/// 分开放而不是塞进错误里，是因为「模型有问题」不是**程序出错**：报告已经
/// 正常打印出来了，只是结论是负面的。
fn report(
  path : String,
  svg_path : String,
  fix_path : String,
) -> Result[Bool, String] {
  let data = @fs.read_file_to_bytes(path) catch {
    @fs.IOError(msg) => return Err("读不了文件「\{path}」：\{msg}")
  }
  let format_name = match @stlkit.detect_format(data) {
    @stlkit.Binary => "二进制 STL"
    @stlkit.Ascii => "ASCII STL"
    @stlkit.ThreeMF => "3MF"
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
  let winding = @stlkit.check_winding_default(mesh)
  let has_problem = !check.is_watertight() ||
    check.non_manifold_edge_count > 0 ||
    check.degenerate_count > 0 ||
    check.wrong_normal_count > 0 ||
    winding.flipped_faces > 0

  println("")
  print_findings(check, winding)

  if fix_path != "" {
    return fix_and_save(mesh, check, winding, fix_path)
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
  Ok(has_problem)
}

///|
/// 打印校验结果。
///
/// 每一条「不通过」都要说清楚**为什么这是问题**，不能只报一个数字。
/// 看到「有 3 条边界边」的人不知道这意味着什么，看到「切片软件分不清
/// 哪里是外面」才知道要修。
fn print_findings(check : @stlkit.ValidationReport, winding : @stlkit.WindingReport) -> Unit {
  let mut problems = 0

  if winding.flipped_faces > 0 {
    problems = problems + 1
    println(
      "  ✗ 有 \{winding.flipped_faces} 个面的绕向和其他面相反（顶点顺序写反了）",
    )
    println(
      "    这些面朝里了：水密性检查看不出问题，但体积会算错，切片软件也可能把实心区域填反",
    )
  }

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
    return
  }

  println("")
  if !check.is_watertight() {
    println("  结论：直接打印会失败，需要先修复")
  } else if winding.flipped_faces > 0 {
    // 绕向反了不会让切片失败（多数切片软件会自己重算朝向），
    // 但**算出来的体积是错的**，报出去的数字不能就这么算了
    println(
      "  结论：网格是闭合的，切片软件多半能打印出来，但数据本身有错 —— 上面那个体积不可信，建议先修",
    )
  } else {
    println("  结论：不影响打印，但上面的问题建议先修")
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
  winding : @stlkit.WindingReport,
  fix_path : String,
) -> Result[Bool, String] {
  if before.is_watertight() &&
    before.degenerate_count == 0 &&
    before.wrong_normal_count == 0 &&
    winding.flipped_faces == 0 {
    println("")
    println("这个网格没有问题，不用修。")
    return Ok(false)
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
  if fixed.flipped_faces > 0 {
    // 把体积的变化也打出来 —— 绕向反了是「看不出来的坏」，
    // 体积从错变对是它唯一的直接证据
    println(
      "  翻转 \{fixed.flipped_faces} 个绕向反了的面（体积从 \{fmt(mesh.volume(), 3)} 修正为 \{fmt(fixed.mesh.volume(), 3)}）",
    )
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
  Ok(!after.is_watertight())
}

///|
///|
/// 出体检报告这条常规路径。
///
/// 参数已经在 `main` 里解析过了——因为基准测试那条路是异步的，
/// 得在 `main` 里分派，没法塞进同步函数。
fn run(
  matches : @argparse.Matches,
  path : String,
) -> Result[Bool, String] {
  let svg_path = match matches.values.get("svg") {
    Some([first, ..]) => first
    _ => ""
  }
  let fix_path = match matches.values.get("fix") {
    Some([first, ..]) => first
    _ => ""
  }
  let has_problem = match report(path, svg_path, fix_path) {
    Ok(v) => v
    Err(msg) => return Err(msg)
  }

  // --strict：模型有问题就以退出码 1 结束，给 CI 用。
  // 注意这里不打印「错误：」——报告已经正常打出来了，只是结论是负面的，
  // 加个错误前缀会让人以为是程序出错。
  if matches.flags.get("strict") == Some(true) && has_problem {
    @sys.exit(1)
  }
  Ok(has_problem)
}

///|
/// 命令行入口。出错时以退出码 1 结束，方便脚本判断。
///
/// 写成 `async fn main` 是因为基准测试要分块读文件，走的是
/// `moonbitlang/async/fs`。其余路径都是同步的，只是借了这个入口分派。
async fn main {
  let result = try {
    let cmd = command()
    let matches = cmd.parse()
    let path = match matches.values.get("file") {
      Some([first, ..]) => first
      _ => ""
    }
    if matches.flags.get("help") == Some(true) || path == "" {
      println(help_text(cmd))
      Ok(false)
    } else if matches.flags.get("bench") == Some(true) {
      bench(path)
    } else {
      run(matches, path)
    }
  } catch {
    err => Err(err.to_string())
  }
  match result {
    Ok(_) => ()
    Err(msg) => {
      println("错误：\{msg}")
      @sys.exit(1)
    }
  }
}
