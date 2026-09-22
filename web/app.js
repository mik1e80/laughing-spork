// 页面逻辑：接住拖进来的文件 → 交给 MoonBit 编译出来的函数 → 显示结果。
//
// 这里不含任何网格处理，只做三件事：
//   1. 把 File 读成字节，编成 base64 传给 MoonBit
//   2. 把返回的「字段|值」文本排成报告表格
//   3. 把返回的 SVG 放进预览区
//
// 分析和渲染全在 dist/web.js 里。

// ── 文件读取 ────────────────────────────────────────────────────────────

/// 把字节编成 base64 字符串。
///
/// 分块处理：`String.fromCharCode.apply` 的参数个数有上限，一次性传一个
/// 几十 MB 的数组会直接爆栈。32KB 一块是老经验值，够快也不会有风险。
function bytesToBase64(bytes) {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// ── 报告渲染 ────────────────────────────────────────────────────────────

/// 报告里哪些字段是「一行一个数字」的统计项，哪些是校验结论。
const STAT_FIELDS = ["三角面", "顶点", "去重顶点", "包围盒", "体积", "表面积"];

/// 把「字段|值」文本解析成键值对。
function parseReport(text) {
  const result = {};
  for (const line of text.split("\n")) {
    if (line === "") continue;
    const at = line.indexOf("|");
    if (at < 0) continue;
    result[line.slice(0, at)] = line.slice(at + 1);
  }
  return result;
}

/// 校验项的名字、以及不通过时该说什么。
///
/// 「有 3 条边界边」对看报告的人没有意义，「切片软件分不清哪里是外面」
/// 才有。所以每一项都配一句人话解释。
const CHECKS = [
  {
    key: "边界边",
    label: "水密性",
    ok: "每条边都恰好被两个面共用",
    bad: (n) =>
      `有 ${n} 条边只被一个面共用 —— 网格上有破洞，切片软件分不清哪里是实心哪里是空的，直接打印会失败`,
  },
  {
    key: "非流形边",
    label: "非流形边",
    ok: "没有边被三个以上的面共用",
    bad: (n) => `有 ${n} 条边被三个以上的面共用，这种地方切片软件无法判断该往哪一侧填材料`,
  },
  {
    key: "退化面",
    label: "退化面",
    ok: "没有零面积的三角形",
    bad: (n) => `有 ${n} 个三角形三个点共线、没有面积，会让切片软件算出零面积的层产生碎片`,
  },
  {
    key: "错误法线",
    label: "法线朝向",
    ok: "法线朝向和顶点顺序一致",
    bad: (n) =>
      `有 ${n} 个三角形的法线朝向和顶点顺序对不上；多数切片软件会自己重算，但依赖文件里法线的工具会画错`,
  },
  {
    key: "绕向反了",
    label: "绕向一致",
    ok: "所有面的朝向一致",
    bad: (n) =>
      `有 ${n} 个面的顶点顺序写反了 —— 它们朝里了。水密性检查看不出这种问题，但体积会算错，切片软件也可能把实心区域填反`,
  },
];

/// 一行统计。label 和 value 都走 textContent，不碰 innerHTML。
function statRow(parent, label, value, unit) {
  const row = document.createElement("div");
  row.className = "stat";

  const name = document.createElement("span");
  name.className = "stat-name";
  name.textContent = label;

  const val = document.createElement("span");
  val.className = "stat-value";
  val.textContent = value;

  row.append(name, val);

  if (unit) {
    const u = document.createElement("span");
    u.className = "stat-unit";
    u.textContent = unit;
    row.append(u);
  }
  parent.append(row);
}

function renderReport(fields) {
  const box = document.getElementById("report");
  box.replaceChildren();

  // 文件信息
  const head = document.createElement("div");
  head.className = "report-head";
  statRow(head, "格式", fields["格式"] || "未知", "");
  statRow(head, "三角形", fields["三角形"] || "0", "个");
  statRow(
    head,
    "顶点",
    `${fields["顶点"] || "0"}（去重后 ${fields["去重顶点"] || "0"}）`,
    "个"
  );
  box.append(head);

  // 几何数据
  const geo = document.createElement("div");
  geo.className = "report-head";
  statRow(geo, "包围盒", fields["包围盒"] || "-", "mm");
  statRow(geo, "体积", fields["体积"] || "-", "mm³");
  statRow(geo, "表面积", fields["表面积"] || "-", "mm²");
  box.append(geo);

  // 校验结论
  const findings = document.createElement("div");
  findings.className = "findings";
  let problems = 0;

  for (const check of CHECKS) {
    const count = parseInt(fields[check.key] || "0", 10);
    const row = document.createElement("div");
    row.className = count > 0 ? "finding finding-bad" : "finding finding-ok";

    const mark = document.createElement("span");
    mark.className = "finding-mark";
    mark.textContent = count > 0 ? "✗" : "✓";

    const text = document.createElement("span");
    text.textContent =
      count > 0 ? `${check.label}：${check.bad(count)}` : `${check.label}：${check.ok}`;

    row.append(mark, text);
    findings.append(row);

    if (count > 0) problems += 1;
  }
  box.append(findings);

  // 结论
  const verdict = document.createElement("div");
  verdict.className =
    problems === 0 ? "verdict verdict-ok" : "verdict verdict-bad";
  verdict.textContent =
    problems === 0
      ? "这个模型可以直接切片打印。"
      : "直接打印会失败，需要先修复上面标✗的问题。";
  box.append(verdict);

  // 网格不闭合时，体积那个数是不可信的，得说清楚。
  // 体积是靠各面的有符号体积正负抵消算出来的，有破洞就抵消不干净。
  // 不提醒的话，用户会把一个错数字当成真的。
  if (fields["水密"] !== "true") {
    const note = document.createElement("p");
    note.className = "report-note";
    note.textContent =
      "注意：网格不闭合，上面那个体积数不可信 —— 体积是靠各面的有符号体积正负抵消算出来的，有破洞就抵消不干净。";
    box.append(note);
  }

  // 有问题才给「修复」按钮。没问题的模型给个按钮反而让人以为要修什么
  if (problems > 0) {
    const actions = document.createElement("div");
    actions.className = "fix-actions";
    const button = document.createElement("button");
    button.type = "button";
    button.id = "fix";
    button.textContent = "修复这个模型";
    button.addEventListener("click", runFix);
    actions.append(button);
    box.append(actions);
  }
}

/// 点「修复」之后干的事：修一遍、把结果对照着显示、更新预览、给下载。
function runFix() {
  const button = document.getElementById("fix");
  if (button) {
    button.disabled = true;
    button.textContent = "修复中…";
  }

  const report = fix_report(currentBase64);
  if (report === "") {
    showError(fix_error(currentBase64));
    return;
  }
  const fixed = parseReport(report);

  const box = document.getElementById("report");
  box.replaceChildren();

  // 做了什么
  const what = document.createElement("div");
  what.className = "report-head";
  const done = [];
  if (parseInt(fixed["删退化面"] || "0", 10) > 0)
    done.push(`删掉 ${fixed["删退化面"]} 个退化面`);
  if (parseInt(fixed["删重复面"] || "0", 10) > 0)
    done.push(`删掉 ${fixed["删重复面"]} 个重复面`);
  if (parseInt(fixed["补洞新增"] || "0", 10) > 0)
    done.push(`补洞：新增 ${fixed["补洞新增"]} 个三角形`);
  if (parseInt(fixed["翻转绕向"] || "0", 10) > 0)
    done.push(
      `翻转 ${fixed["翻转绕向"]} 个绕向反了的面（体积从 ${currentFields["体积"]} 修正为 ${fixed["修复后体积"]}）`
    );
  if (parseInt(fixed["重算法线"] || "0", 10) > 0)
    done.push(`重算 ${fixed["重算法线"]} 个三角形的法线`);
  if (done.length === 0) done.push("没有可以自动修复的问题");

  const title = document.createElement("div");
  title.className = "fix-title";
  title.textContent = "修复完成";
  what.append(title);
  for (const line of done) {
    const row = document.createElement("div");
    row.className = "fix-line";
    row.textContent = "· " + line;
    what.append(row);
  }
  box.append(what);

  // 对照：修复前 / 修复后
  const compare = document.createElement("div");
  compare.className = "compare";
  const before = document.createElement("div");
  before.className = "compare-item compare-before";
  before.innerHTML =
    `<span class="compare-label">修复前</span>` +
    `<span class="compare-value">${currentFields["边界边"]} 条边界边</span>`;
  const arrow = document.createElement("div");
  arrow.className = "compare-arrow";
  arrow.textContent = "→";
  const after = document.createElement("div");
  after.className =
    "compare-item " +
    (fixed["修复后水密"] === "true" ? "compare-after" : "compare-before");
  after.innerHTML =
    `<span class="compare-label">修复后</span>` +
    `<span class="compare-value">${fixed["修复后边界边"]} 条边界边</span>`;
  compare.append(before, arrow, after);
  box.append(compare);

  // 结论
  const verdict = document.createElement("div");
  const watertight = fixed["修复后水密"] === "true";
  verdict.className = watertight ? "verdict verdict-ok" : "verdict verdict-bad";
  verdict.textContent = watertight
    ? `现在可以切片打印了（${fixed["修复后三角形"]} 个三角形）`
    : "还有补不上的洞 —— 洞的形状太复杂，只能手工修";
  box.append(verdict);

  // 下载
  const base64 = fixed_stl(currentBase64);
  if (base64 !== "") {
    const actions = document.createElement("div");
    actions.className = "fix-actions";
    const download = document.createElement("button");
    download.type = "button";
    download.textContent = "下载修好的模型（.stl）";
    download.addEventListener("click", () => {
      const bytes = base64ToBytes(base64);
      const blob = new Blob([bytes], { type: "model/stl" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "fixed.stl";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 0);
    });
    actions.append(download);
    box.append(actions);
  }

  // 预览换成修好的模型
  const svg = fixed_preview(currentBase64);
  if (svg !== "") {
    previewEl.replaceChildren();
    previewEl.innerHTML = svg;
  }
}

/// 把 base64 解回字节数组。
function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// ── 主流程 ──────────────────────────────────────────────────────────────

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file");
const previewEl = document.getElementById("preview");
const statusEl = document.getElementById("status");

/// 当前这个文件的 base64 和解析出来的报告字段。
/// 「修复」按钮要用——它的回调触发时，handleFile 的局部变量已经没了。
let currentBase64 = "";
let currentFields = {};

/// 显示一条错误，样式跟报告里的问题项一致。
function showError(message) {
  const box = document.getElementById("report");
  box.replaceChildren();

  const row = document.createElement("div");
  row.className = "finding finding-bad";
  const mark = document.createElement("span");
  mark.className = "finding-mark";
  mark.textContent = "✗";
  const text = document.createElement("span");
  text.textContent = message;
  row.append(mark, text);
  box.append(row);

  previewEl.replaceChildren();
  statusEl.textContent = "读不了";
  statusEl.className = "status status-error";
}

async function handleFile(file) {
  statusEl.textContent = "分析中…";
  statusEl.className = "status";

  let base64;
  try {
    const buffer = await file.arrayBuffer();
    base64 = bytesToBase64(new Uint8Array(buffer));
  } catch {
    showError("读不了这个文件");
    return;
  }

  // 分析失败时 analyze 返回空串，这时再去问一次原因。
  // 和上个项目一样的套路：Result 过不了 JS 边界，就拆成两个函数。
  const report = analyze(base64);
  if (report === "") {
    showError(analyze_error(base64));
    return;
  }

  currentBase64 = base64;
  currentFields = parseReport(report);
  renderReport(currentFields);

  const svg = preview(base64);
  previewEl.replaceChildren();
  if (svg !== "") {
    // 这段 SVG 完全由我们自己的 MoonBit 代码生成，内容只有数字和多边形，
    // 不含任何来自文件的原文，所以可以放心当 HTML 插进去。
    previewEl.innerHTML = svg;
  }

  statusEl.textContent = file.name;
  statusEl.className = "status status-ok";
}

// ── 接线 ────────────────────────────────────────────────────────────────

document.getElementById("pick").addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    handleFile(fileInput.files[0]);
  }
});

// 拖拽。一定要阻止 dragover 的默认行为——不阻止的话浏览器会直接打开
// 这个文件，页面被替换掉，看起来像「拖进去没反应」。
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropzone.classList.add("dropzone-active");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("dropzone-active");
});

dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropzone.classList.remove("dropzone-active");
  if (event.dataTransfer.files.length > 0) {
    handleFile(event.dataTransfer.files[0]);
  }
});
