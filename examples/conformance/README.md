# 3MF 官方一致性测试

这 13 个文件取自 [3MF Consortium 的 3mf-samples](https://github.com/3MFConsortium/3mf-samples)
仓库里的 `validation tests/3mf-Verify/MUSTPASS/`，**BSD 2-Clause 许可**
（Copyright © 2018, 3MF Consortium），原样收录未做修改。

`MUSTPASS` 的意思是：凡是符合规范的 3MF 读取器，**必须**能正确处理这些文件。
所以它们正好拿来当外部标尺——不是我造几个测试夸自己，是官方出的题。

```bash
for f in examples/conformance/*.3mf; do moon run cmd/main "$f" > /dev/null && echo "通过 $(basename "$f")"; done
```

**13 个全部通过。** 几个特别值得看的：

## 用什么验的

### 只输出被引用的对象

`Chapter3.4.3a_MustNotOutputNonReferencedObjects` —— 文件里有 **2 个对象**（id 7 和 8），
但 `<build>` 里只引用了 id 7。规范要求只输出被引用的那个。

```
对象数: 2   build 引用: 7
→ 工具输出 12 个三角形（= 1 个立方体）
```

要是把两个对象都算进去，就会是 24 个。这一条直接测出「有没有偷懒把 resources 里的
东西全倒出来」。

### 两条不同的代码路径给出同一个结果

这两份文件描述的是**同一个几何**，但用的是 3MF 里两种完全不同的机制：

| 文件 | 结构 | 三角形 | 体积 |
| --- | --- | --- | --- |
| `Chapter3.2c_MultipleItemsTransform` | 1 个对象，build 里放 **2 个 item** | 60 | 14000.003 mm³ |
| `Chapter4.2_Components` | 2 个对象，build 里放 1 个 item，对象之间用 **2 个 component** 引用 | 60 | 14000.003 mm³ |

结果**逐位相同**。这两条路径在实现里是分开的（一个是 build 层的重复引用，
一个是对象层的嵌套引用，后者还要做变换矩阵合成），能对上说明两边都对。

### 无关内容不会干扰解析

`Chapter2.3a_IgnorableMarkup`（可忽略标记）和
`Chapter3.4.1c_MustIgnoreUndefinedMetadataName`（未定义的 metadata 名）测的是同一件事：
文件里塞了一堆和几何无关的东西，解析器不能被它们带偏。两个都通过。

### 单位

`Chapter3.2b_UnitsMeasurementMM` —— 单位的处理见 `three_mf.mbt` 里的 `unit_scale_of`。
规范里六个单位（micron / millimeter / centimeter / inch / foot / meter）都支持，
不认识的一律报错而不是猜——猜错了体积会差几个数量级，比报错难查得多。

## 全部结果

| 文件 | 三角形 | 体积 mm³ | 测什么 |
| --- | --- | --- | --- |
| `Chapter2.1_PartsRelationships` | 12 | 8000 | 按 `_rels/.rels` 找模型部件 |
| `Chapter2.2_PartNaming` | 12 | 16387.064 | 部件命名 |
| `Chapter2.3a_IgnorableMarkup` | 12 | 1000 | 忽略无关标记 |
| `Chapter3.2b_UnitsMeasurementMM` | 12 | 1000 | 单位 |
| `Chapter3.2c_MultipleItemsTransform` | 60 | 14000.003 | 多个 item + 变换 |
| `Chapter3.4.1c_MustIgnoreUndefinedMetadataName` | 12 | 8000 | 忽略未定义的 metadata |
| `Chapter3.4.2_MetaData_Resources_Build` | 12 | 1000 | metadata / resources / build 结构 |
| `Chapter3.4.3a_MustNotOutputNonReferencedObjects` | 12 | 1000 | 只输出被引用的对象 |
| `Chapter4.1_ExplicitSupport` | 484 | 19577.576 | 显式支撑结构 |
| `Chapter4.2_Components` | 60 | 14000.003 | 组件（装配体）引用 |
| `Chapter5.1a_MaterialResources_CompositeAndMultiProperties` | 12 | 1000 | 材料（我们忽略，只要不干扰几何） |
| `Chapter5.1b_MaterialResources_MultiObjects` | 24 | 2000 | 同上 + 多对象 |
| `Chapter5.1c_MaterialResources_sRGB_RGB_Colors` | 12 | 1000 | 同上 + 颜色 |

材料那三个（Chapter 5）我们**不解析颜色和材质**——「能不能打印」这个问题用不上它们。
但它们必须能被正确跳过，所以照样是好测试。

## 一点说明

`Chapter4.1_ExplicitSupport` 里带支撑结构的对象也会被算进三角形数（484 个）。
这是有意的：`<build>` 里列出的东西就是会被打印出来的东西，支撑也算。
