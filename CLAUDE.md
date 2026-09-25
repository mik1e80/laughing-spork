# stlkit — 项目说明（给 AI 助手的交接文档）

> 这份文档是从上一个仓库的会话交接过来的。读完这份就能接着干活，
> 不需要再去翻历史对话。

## 一句话

用 MoonBit 写一个 **STL / OBJ 三维网格工具链**，回答一个问题：**这个 3D 模型能不能打印出来。**

## 背景：为什么是这个选题

用户参加 **MoonBit 开源大赛 - 九月黑客松**。之前的作品「JSON 转 Markdown 表格」
在 **2026-09-22 被驳回**，组委会原话：

> 申报项目方向不仅过于窄，而且与已用生态库存在重叠，审查驳回，建议更换选题。
>
> 我们建议换方向哦~通用的 json 转 markdown 库 没有太大的意义，而且太小了😊😊😊

**驳回的真实原因是「体量」**：那个项目 30 个提交只做了一个功能。同期通过审核的
同学作品是 `BigSaltyMan/moonjson-toolkit`——**一个工具箱**（格式化 + 校验 + 诊断 +
分析 + 可视化 + AI 审查 + 网页仪表盘，10+ 功能，19 个提交）。

**教训：组委会要的是「工具箱」级的项目，不是一个功能。**

**截止日期：2026-09-30**（可以修改报名表重新提交审核）。

## 选题是怎么定的

调研了 mooncakes 上全部 2439 个包（描述文本导出在 `/c/tmp/all_pkgs.txt`），结论：

**MoonBit 生态里成功项目的公式**：
> 挑一个**具体的技术标准/文件格式**，做一个完整的「解析 + 校验 + 生成 + 审计」工具链。

证据（这一串命名和结构几乎一模一样）：
```
moon-robots        RFC 9309 robots.txt 解析、匹配、序列化、审计工具包
moon-httpsig       RFC 9421 规范化、HMAC 签名、验证、策略工具包
moon-sfv           RFC 9651 结构化字段值
moon-webfinger     RFC 7033 WebFinger
moon-warc          WARC 1.1 流式解析、写入、验证、索引、审计
mooncalguard       iCalendar 解析、验证、重复规则、告警、报告、差异
dbc-toolkit        CAN DBC 解析 + 信号编解码
nmea-toolkit       NMEA 0183 解析 + 诊断
moonbit-gerberkit  Gerber/Excellon + DFM 检查
```

**STL / OBJ 在生态里是零覆盖**——精确搜过 `stl`、`stereolith`、`wavefront`、
`3d print`、`mesh file`、`dxf`、`iges`，全部无命中。

已有的 3D 相关包**全是渲染，不是文件处理**：
```
mizchi/three          three.js 的 FFI 绑定（依赖 JS + WebGL），加载 glTF/GLB
mizchi/mesh3d         网格/顶点格式原语（渲染用）
mizchi/geom           Vec3/Mat4/四元数
hzfhzf89/gltf-tools   glTF/GLB 读取校验
```

**定位区别（答辩时要讲）**：
| | 已有的 three.js binding | stlkit |
|---|---|---|
| 本质 | three.js 的 FFI 绑定，底层是 JS + WebGL | **纯 MoonBit**，零第三方依赖 |
| 跑在哪 | 只能在浏览器 | native / wasm / js 都能跑 |
| 输入 | glTF / GLB | **STL / OBJ**（3D 打印格式） |
| 做什么 | **渲染**——把它画出来 | **解析 + 校验 + 分析 + 修复** |
| 回答 | "它长什么样" | **"它能不能被 3D 打印出来"** |

**组委会的态度**（2026-09-22 询问后）：
> 看到已经有 Three.js binding 的实现了，如果你励志打算把这个项目做的很完善的话，我们肯定欢迎！

→ **有条件放行，关键词是「做得很完善」。项目必须做得足够完整。**

## 仓库名

GitHub 仓库已经改名为 **`mik1e80/stlkit`**（符合生态命名惯例：`dbc-toolkit`、
`nmea-toolkit`、`moonwavkit`）。远端已经指过去了，`moon.mod` 里的 repository 也是这个。

**本地目录名还叫 `laughing-spork`**（建仓库时 GitHub 生成的随机名）——不影响评审，
评委看的是 GitHub 上的仓库名。本地路径：

```
C:\Users\MIKE\Documents\GitHub\laughing-spork
```

## 第三次驳回（当前要解决的问题）

前两次驳回都已经处理掉了（选题太窄 → 换方向；缺 LICENSE → 补了 Apache 2.0）。
**现在的障碍是第三条**：

> 项目核心能力与 MoonBit 现有 mizchi/three / mizchi/mesh3d 库存存在较明显重叠，
> 需要补充有足够价值的差异性说明。

组委会同时给了 4 条改进建议：

1. **流式解析**（Streaming Parsing）
2. 数据清洗与修复
3. 新格式或 CLI 子命令
4. 算法优化

**用户的判断**：差异性不只体现在「方向不同」，更体现在**性能和技术深度**上。

### 已完成：第 1 条（流式解析）

`stream.mbt` + `cmd/main` 的 `--bench`。95.37 MB / 200 万三角形实测：
**内存省 84.3%（293.73 MB → 46.1 MB），快 5.4 倍**。每三角形内存 154 字节 → 24 字节。
细节见 `README.mbt.md` 的「超大模型：流式解析」一节。

### 差异性论据（写答辩材料时用）

去看了源码，不是只看注册表描述：

- **`mizchi/three-mbt`**：STL 加载是 `extern "js"` —— 把解析整个丢给 JavaScript 的
  three.js 做，MoonBit 侧没有一行解析代码。`preferred_target: "js"`，4 个版本全在
  2026-09-08 上午发布，最后推送 2026-09-10。**离开浏览器跑不了。**
- **`mizchi/mesh3d`**：确实有 406 行纯 MoonBit OBJ 解析器（这点之前漏看了，被用户纠正过），
  但它**展开顶点、不保留拓扑**，索引越界时静默返回 `0.0`，返回 `Mesh3D` 而不是 `Result`。
  它是 kagura 渲染管线的一部分，**目标是画出来，不做校验**。
- 另外扫了 15 个候选包（PicoGK、meshopt_mbt、moonbit-gltf-tools、kagura_*、shapefile、
  bvhkit、fiducial_marker 等）。结论：**没有任何 MoonBit 包做三角网格质量验证**。

最接近的四类，逐个说明差在哪：
`mesh3d`（有 OBJ 解析但无拓扑）、`meshopt_mbt`（只做渲染性能分析）、
`gltf-tools`（只做渲染资产分析）、`picogk`（同在 3D 打印领域，但走体素不是网格）。

**一句话**：它们回答「模型长什么样」，stlkit 回答「模型能不能打印」。

## 功能范围

```
stlkit — MoonBit 三维网格工具链

解析    STL（ASCII + 二进制）、OBJ（共享顶点表、多边形面、负数编号）
校验    水密性、非流形边、退化面、法线朝向、绕向一致性
分析    体积、表面积、包围盒、尺寸、三角形数、去重顶点数
流式    分块扫描超大文件，内存不随模型大小增长
修复    补洞、删退化面、删重复面、统一绕向、重算法线
预览    SVG 等轴测图（浏览器里直接看）
形态    库 + CLI + 网页
```

**原计划里被砍掉的**：终端 ASCII 预览（SVG 已经够用，且在网页上更好看）、
打印材料/时间估算（和「能不能打印」这个核心问题关系不大）、导出点云/线框。
砍掉是有意的——**做完整不等于把列过的都做一遍**。

### 目标效果

```
$ stlkit check broken_cube.stl

broken_cube.stl
  三角形      12
  顶点        36 个（去重后 8 个）
  包围盒      20.0 × 20.0 × 20.0 mm
  体积        7986.2 mm³
  表面积      2400.0 mm²

  ✗ 不是水密网格 —— 有 4 条边只被 1 个面共用
    破洞位置约在 (0, 0, 10) 附近
  ✗ 3 个三角形法线朝向不一致
  ⚠ 6 个重复顶点（可以焊接）
  ✓ 没有退化面

  结论：直接打印会失败，建议先修复
```

## 关于领域知识：不需要预先学

STL 格式简单到可以在 20 行内讲完：

```
solid cube
  facet normal 0 0 -1
    outer loop
      vertex 0 0 0
      vertex 0 1 0
      vertex 1 1 0
    endloop
  endfacet
endsolid cube
```

就是一个三角形列表。二进制版是固定 50 字节一个三角形。

OBJ 同样简单：`v x y z` 是顶点，`f a b c` 是面。

需要的数学**只有高中水平**：
```
法线   = (b-a) × (c-a)          向量叉乘
面积   = |叉乘| / 2
体积   = Σ 三角形与原点构成的四面体有符号体积（混合积 / 6）
水密性 = 每条边是否恰好被 2 个三角形共用   ← 就是个 map 计数
```

没有矩阵、没有微积分、没有坐标变换。**"能不能打印"的核心就是数每条边被几个面用了。**

## 计划与进度（截止 2026-09-30，今天 2026-09-25）

原定的 8 天计划（骨架 → 解析 → 校验 → 分析 → 修复 → 预览 → CLI/网页 → 打磨）
**已经全部做完了**，还比原计划多做了绕向一致性检查、网格修复、网页版和流式解析。

**评审要求：「≥10 个中文 commit 展示演进，每步可构建」。**
提交信息用中文，每个提交都要能编译通过。

### 剩下要做的（按优先级）

1. **差异性说明**——当前最大的障碍，见上面「第三次驳回」一节。审核能不能过就看这个
2. 提交并推送流式解析这一批改动
3. **组委会建议的第 3 条**：加 `stlkit convert input.stl output.obj` 子命令
   （现在导出只能靠 `--fix`，语义不对——没坏的文件不该走「修复」这条路）
4. 组委会建议的第 2 条（数据清洗与修复）其实已经做完了大半（`repair.mbt`），
   缺的是**把它写进答辩材料**，讲清楚做了哪些清洗、怎么验证修好了
5. 可选：给 ASCII STL 也加上分块扫描（现在只支持二进制，遇到 ASCII 会优雅跳过并说明原因）

## 已完成（截至 2026-09-25）

**125 个测试全过，`moon check --target all --deny-warn` 零警告。**

| 文件 | 内容 |
|---|---|
| `vec3.mbt` | Vec3：加减、叉乘、点乘、模长、单位化、`is_zero` |
| `mesh.mbt` | `Triangle` / `Aabb` / `Mesh`，法线、面积、有符号体积、包围盒 |
| `stl.mbt` | STL 解析（ASCII + 二进制）、格式判断、CRLF 处理 |
| `obj.mbt` | OBJ 解析（共享顶点表、多边形扇形三角化、负数编号） |
| `validate.mbt` | 顶点焊接与四项校验，容差 1e-6 mm |
| `winding.mbt` | 绕向一致性检查（BFS）与统一 |
| `repair.mbt` | 补洞、删退化/重复面、统一绕向、重算法线 |
| `writer.mbt` | 导出二进制 / ASCII STL 与 OBJ |
| `preview.mbt` | SVG 等轴测渲染（画家算法） |
| `stream.mbt` | **流式扫描**：整块 / 分块两种，内存不随模型增长 |
| `cmd/main/` | CLI：`--strict` `--bench` `--svg` `--fix` |
| `web/` | 网页版（MoonBit 编译成 JS），含 `dist/web.js` 产物 |

**坐标系约定**：坐标一律用 `Double`，即使二进制 STL 里存的是 float32——
体积求和是上百万项累加，32 位会在累加过程中越飘越远。

**流式扫描和全量解析是两份独立实现**，`stream_wbtest.mbt` 把每个字段逐项对照。
改动其中任何一边（体积累加、坐标量化、边打包）都必须同步改另一边，否则结果会悄悄分叉。

## 技术约定

**库本体零第三方依赖**（只有 `moonbitlang/core`），这样 native/wasm/js 都能跑。
CLI 才引入 `argparse` / `x/fs` / `x/sys`。

**法线一律自己算**，不用文件里写的——很多导出器写的法线是错的甚至是 0 0 0。
`Triangle::computed_normal()` 负责这个。

**解析阶段不做顶点去重**，原样保留。因为「文件里有多少重复顶点」本身就是
一条要报告的信息，而且浮点去重涉及「多少算同一个点」的容差问题，不该混在解析里。

## MoonBit 踩坑清单（上个项目实测确认的，省得重新踩）

- **跨包用类型必须写全前缀**：`@stlkit.Mesh`。裸写在同包内没问题，别的包报 "type undefined"
- **`pub struct` 在包外只读，不能构造**，要 `pub(all) struct`
- **具名参数定义处写 `name~ : T`**（波浪号在名字后），调用处写 `name=value`。
  定义处写 `~name : T` 是 Lexing error
- **泛型函数是 `fn[T] name(...)`**，不是 `fn name[T](...)`
- **`String` 的 `Compare` 是 shortlex 序**（先比长度），要字典序用 `lexical_compare`
- **`String::substring` 已废弃**，用切片 `s[1:].to_owned()`
- **测试不需要导入 `core/test`**：prelude 自带 `assert_eq`，builtin 有 `fail`/`assert_true`
- **`Map` 保插入序**（链表哈希表）
- **`moon check` 有时输出 "no work to do" 但实际没编译**，用 `moon build` 或 `moon check --target all --deny-warn` 强制
- **`moonbitlang/core/*` 是语言自带的核心库**，不用在 `moon.mod` 里声明，不算第三方依赖
- **网页版**：`options(link: {"js": {"exports": [...], "format": "iife"}})`，
  选 `iife` 不选 `esm`——ES module 在 `file://` 下会被 CORS 拦掉
- **`Bytes::to_unchecked_string` 不是 UTF-8 解码**：它把字节重新解释成 UTF-16，
  512 字节会变成 256 个乱码字符。要 UTF-8 用 `@utf8.decode_lossy`。
  判断文件格式时干脆逐字节搜 ASCII 特征，别走字符串
- **`Bytes::from_fixedarray` 已改名 `from_array`**
- **`Map::size` → `Map::length`**
- **`monotonic_clock_end` 返回的是微秒，不是秒**（源码里是 `elapsed_secs * 1000000.0`）。
  当成秒会打出「56020600 ms」这种数字
- **`moonbitlang/x/fs` 只有 `read_file_to_bytes`**（一次读完），没有带偏移量的读取。
  要分块读必须用 `moonbitlang/async/fs` 的 `File::read_at`（异步）
- **`moon.pkg` 里导入别名写 `"path" @alias`**，不是 `as alias`（后者是解析错误）。
  两个包都用默认别名 `fs` 会冲突，给它起个别名（`@asyncfs`）就行
- **`_` 不能当 C 风格 for 循环的变量名**，会解析错误。用 `_i` / `_k`
- **`loop` 和 `guard` 是保留字**，不能当变量名
- **记录构造是 `TypeName::{ ... }`**，不是 `TypeName { ... }`
- **match 分支里写多条语句要加 `{ }` 块**
- **在循环里写嵌套的结构体字面量会报 `ambiguous_block`**，抽成命名函数最省事
- **CLI 入口写成 `async fn main`**：一旦有任何一个分支要 await，整个入口就得是异步的

## 验证手段

- `moon build` / `moon test` / `moon check --target all --deny-warn`（要求零警告）
- **一次跑一条命令，不要用 `&&` 串成一大条**——用户会拒绝看不懂的长命令。
  分开跑还更容易看出是哪一步挂了
- **流式解析的正确性靠交叉验证**：`moon run cmd/main /c/tmp/huge.stl --bench`
  会自己比对三条路径的三角形数和边界边数，对不上直接报错不当作基准
- **无头 Edge 验证网页**：`msedge.exe --headless=new --disable-gpu --virtual-time-budget=4000 --dump-dom "file:///..."`，
  dump DOM 比截图可靠（上个项目靠它抓到过「函数定义了但忘了调用」的 bug）。
  注意截图有缓存，要加 `--user-data-dir=<新的临时目录>`

## 大文件测试数据

`/c/tmp/big.stl`（47 MB / 98 万三角形）、`/c/tmp/huge.stl`（95 MB / 200 万三角形）。
生成它们的临时包 `cmd/gen` 已经删掉了，文件还在。要重新生成得再写一个。

## ⚠️ 两个必须记住的操作教训

1. **不要用 perl / sed 处理多行中文文本**。上个阶段这么干损坏了 3 个文件
   （`repair.mbt`、`stream.mbt`、`web/web.mbt`），每次都靠 `git checkout` 或 Edit 恢复。
   用 Edit 工具做精确替换。
2. **`moon check` 有时会说 "no work to do" 但实际没编译**，别被它骗过去。

## 参考

- 通过审核的同学作品：`BigSaltyMan/moonjson-toolkit`（工具箱的样板）
- 上一个项目（已完整交付但被驳）：`C:\Users\MIKE\Documents\GitHub\json-to-markdown-table`
- mooncakes 全量包描述：`/c/tmp/all_pkgs.txt`
