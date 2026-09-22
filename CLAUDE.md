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

## ⚠️ 仓库名要改

仓库现在叫 `laughing-spork`（GitHub 新建仓库时自动生成的随机名）。**必须在提交前改掉**，
否则评委一眼看出「这名字是系统给的，他没起」。

**建议改成 `stlkit`**（符合生态命名惯例：`dbc-toolkit`、`nmea-toolkit`、`moonwavkit`）。

改法：仓库页面 → Settings → Repository name → 改成 `stlkit` → Rename。
改完记得同步本地 remote 和 `moon.mod` 里的 `repository`。

## 要做什么

```
stlkit — MoonBit 三维网格工具链

解析    STL（ASCII + 二进制两种）、OBJ（顶点 / 法线 / 分组）
校验    水密性（每条边恰好被两个面共用）、法线一致性、退化面、
        重复顶点、非流形边、体积符号
修复    焊接重复顶点、重算法线、定位破洞位置
分析    体积、表面积、包围盒、尺寸、三角形数、打印材料与时间估算
转换    STL ⇄ OBJ、导出点云 / 线框
预览    SVG 等轴测图、终端 ASCII 图
形态    库 + CLI + 网页（拖拽上传）
```

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

## 8 天计划（截止 2026-09-30）

| 天 | 做什么 | 做完能看到 |
|---|---|---|
| 1 | 骨架 + STL 解析（ASCII + 二进制） | 喂 STL 进去能读出三角形 |
| 2 | OBJ 解析 + 网格数据结构 | 两种格式都能读 |
| 3 | 校验（水密性 / 法线 / 退化面 / 重复顶点） | **能回答"能不能打印"** |
| 4 | 分析（体积 / 表面积 / 包围盒 / 材料估算） | 完整体检报告 |
| 5 | 修复 + 格式转换 | 能修问题、能换格式 |
| 6 | SVG 等轴测预览 + 终端 ASCII 预览 | 看得见模型 |
| 7 | CLI 完善 + 网页（拖拽上传） | 三种形态齐全 |
| 8 | 测试、文档、打磨 | 提交 |

**每天 2-3 个提交，总数要超过 10 个**（评审要求「≥10 个中文 commit 展示演进，每步可构建」）。

**提交信息用中文，每个提交都要能编译通过。**

## 已完成

- `moon.mod` — 模块名 `mik1e80/stlkit`，零第三方依赖
- `moon.pkg` — 库本体只要核心库
- `vec3.mbt` — Vec3 + 加减/叉乘/点乘/模长/单位化
- `mesh.mbt` — Triangle、Aabb、Mesh 数据结构（**写这个文件时被打断了，要确认是否已写入**）

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

## 验证手段

- `moon info && moon fmt && moon check --target all --deny-warn && moon test`（零警告）
- **无头 Edge 验证网页**：`msedge.exe --headless=new --disable-gpu --virtual-time-budget=4000 --dump-dom "file:///..."`，
  dump DOM 比截图可靠（上个项目靠它抓到过「函数定义了但忘了调用」的 bug）。
  注意截图有缓存，要加 `--user-data-dir=<新的临时目录>`

## 参考

- 通过审核的同学作品：`BigSaltyMan/moonjson-toolkit`（工具箱的样板）
- 上一个项目（已完整交付但被驳）：`C:\Users\MIKE\Documents\GitHub\json-to-markdown-table`
- mooncakes 全量包描述：`/c/tmp/all_pkgs.txt`
