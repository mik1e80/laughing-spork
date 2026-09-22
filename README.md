# stlkit

用 MoonBit 写的 STL / OBJ 三维网格工具链。回答一个问题：**这个模型能不能 3D 打印。**

![体检报告](web/screenshot.png)

拖一个 STL 或 OBJ 文件进网页，左边出等轴测预览图，右边出体检报告——查水密性、非流形边、退化面、法线朝向，最后给一句话结论。

## 三种形态

| 形态 | 位置 | 怎么用 |
| --- | --- | --- |
| **网页** | `web/` | 打开 `web/index.html`，或直接拖文件进去 |
| **命令行** | `cmd/main/` | `moon run cmd/main model.stl` |
| **库** | `stlkit.mbt` 等 | `@stlkit.parse_mesh(data)` |

三者跑的是同一份转换代码。网页上的分析不是 JavaScript 重写的，而是 MoonBit 经 `moon build --target js` 编译出来的。

## 为什么需要它

3D 打印失败最常见的原因不是打印机，是模型本身有问题：网格上有破洞、一条边被三个面共用、有零面积的三角形。**渲染器能告诉你模型长什么样，但告诉不了你有没有破洞**——那要靠网格拓扑分析，数清楚每条边被几个面共用。

而且这些毛病肉眼看不出来：一个缺了一个三角形的立方体，看上去还是完完整整一个立方体，但它的体积已经从 1 变成 0.833 了。

![破洞的模型](web/screenshot-broken.png)

## 文档

详细的实现说明、API、测试策略都在 [`README.mbt.md`](README.mbt.md)。

## 开发

仓库根目录就是 MoonBit 模块根：

```bash
moon test            # 跑测试（62 个，零警告）
moon run cmd/main    # 不带参数会打印帮助
bash web/build.sh    # 重新编译网页用的 JS
```

网页部分由 GitHub Actions 自动发布，见 [`.github/workflows/pages.yml`](.github/workflows/pages.yml)。

## 依赖

库本体**零第三方依赖**，只用 MoonBit 自带的核心库。所以 native / wasm / js 后端都能跑，没有 FFI 也没有 JS 依赖。
