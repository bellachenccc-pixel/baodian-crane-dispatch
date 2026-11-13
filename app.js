const STORAGE_KEY = "baodian-crane-dispatch-v5";

const weekOptions = {
  w47: {
    label: "第47周",
    subtitle: "2026年11月16日—22日",
    range: ["2026-11-16", "2026-11-22"],
    days: [16, 17, 18, 19, 20, 21, 22],
  },
  w48: {
    label: "第48周",
    subtitle: "2026年11月23日—29日",
    range: ["2026-11-23", "2026-11-29"],
    days: [23, 24, 25, 26, 27, 28, 29],
  },
  w46: {
    label: "第46—47周",
    subtitle: "2026年11月9日—22日",
    range: ["2026-11-09", "2026-11-22"],
    days: [9, 10, 11, 12, 13, 14, 15],
  },
  w45: {
    label: "第45—46周",
    subtitle: "2026年11月2日—15日",
    range: ["2026-11-02", "2026-11-15"],
    days: [2, 3, 4, 5, 6, 7, 8],
  },
};

const seedState = {
  selectedWeek: "w47",
  vehicles: [
    { id: "V-02", name: "抢修车", plate: "浙F033F6", kind: "保电车", capacity: "抢修 · 尼桑", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-27", name: "日产", plate: "浙F035F6", kind: "保障车", capacity: "日产（车型待补）", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-22", name: "尼桑", plate: "浙F873XC", kind: "保障车", capacity: "尼桑", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-06", name: "多功能车", plate: "浙F882Z7", kind: "保电车", capacity: "多功能 · 粤海", status: "可用", baseId: "B-02", company: "海盐新众汽车销售维修有限责任公司" },
    { id: "V-08", name: "平板拖车", plate: "浙FD9319", kind: "保障车", capacity: "路之友 · 平板拖车", status: "可用", baseId: "B-02", company: "海盐新众汽车销售维修有限责任公司" },
    { id: "V-05", name: "平板拖车", plate: "浙FD9383", kind: "保障车", capacity: "路之友 · 平板拖车", status: "可用", baseId: "B-02", company: "海盐新众汽车销售维修有限责任公司" },
    { id: "V-07", name: "平板拖车", plate: "浙FD9032", kind: "保障车", capacity: "路之友 · 平板拖车", status: "可用", baseId: "B-02", company: "海盐新众汽车销售维修有限责任公司" },
    { id: "V-03", name: "平板拖车", plate: "浙FD9215", kind: "保障车", capacity: "粤海 · 平板拖车", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-13", name: "货车", plate: "浙FH0977", kind: "保障车", capacity: "江淮 · 货车", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-09", name: "登高车", plate: "浙FH268Q", kind: "保障车", capacity: "金望 · 登高车", status: "可用", baseId: "B-02", company: "海盐新众汽车销售维修有限责任公司" },
    { id: "V-19", name: "登高车", plate: "浙FH8082", kind: "保障车", capacity: "徐工 · 登高车", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-12", name: "3T 吊车", plate: "浙FD9269", kind: "吊车", capacity: "3T · 金望", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-14", name: "8T 吊车", plate: "浙FD9270", kind: "吊车", capacity: "8T · 江特", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-01", name: "8T 吊车", plate: "浙FDQ923", kind: "吊车", capacity: "8T · 徐工", status: "可用", baseId: "B-02", company: "海盐路新吊装服务有限公司" },
    { id: "V-11", name: "25T 吊车", plate: "浙FD9268", kind: "吊车", capacity: "25T · 徐工", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-04", name: "重型拖车", plate: "浙FD9219", kind: "保障车", capacity: "金望 · 重型拖车", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-24", name: "私人车辆", plate: "浙F16M05", kind: "保障车", capacity: "奥迪", status: "可用", baseId: "B-01", company: "王琴（私人）" },
    { id: "V-16", name: "业务车", plate: "浙F6530A", kind: "保障车", capacity: "桑塔纳", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-15", name: "全顺", plate: "浙FH9816", kind: "保障车", capacity: "江铃全顺", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-10", name: "多功能抢险车", plate: "浙FW0M93", kind: "保电车", capacity: "多功能抢险 · 江铃", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-20", name: "多功能拖车", plate: "浙FH6832", kind: "保障车", capacity: "粤海 · 多功能拖车", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-17", name: "登高车", plate: "浙F51PL5", kind: "保障车", capacity: "程力威 · 登高车", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-18", name: "货车", plate: "浙F03SA5", kind: "保障车", capacity: "江铃顺达 · 货车", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-28", name: "江铃", plate: "浙FXX880", kind: "保障车", capacity: "江铃（车型待补）", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-29", name: "程力威", plate: "浙FTW281", kind: "保障车", capacity: "程力威（车型待补）", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-21", name: "奔驰", plate: "浙FTY777", kind: "保障车", capacity: "奔驰", status: "可用", baseId: "B-01", company: "海盐新众电力工程有限公司" },
    { id: "V-30", name: "启敬", plate: "浙F75F3G", kind: "保障车", capacity: "启敬（车型待补）", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-31", name: "江铃", plate: "浙F86F8L", kind: "保障车", capacity: "江铃（车型待补）", status: "可用", baseId: "B-02", company: "海盐路通汽车吊装服务有限公司" },
    { id: "V-32", name: "帕拉丁", plate: "浙F39N5K", kind: "保障车", capacity: "帕拉丁", status: "可用", baseId: "B-01", company: "嘉兴市新众汽车救援服务有限公司" },
    { id: "V-33", name: "私人车辆", plate: "浙FD86377", kind: "保障车", capacity: "零跑", status: "可用", baseId: "B-01", company: "陈新峰（私人）" },
  ],
  bases: [
    { id: "B-01", name: "公司东场归场点", address: "海盐县武原街道 · 详细地址待补", radius: 120 },
    { id: "B-02", name: "通元车辆归场点", address: "海盐县通元镇 · 详细地址待补", radius: 100 },
  ],
  tasks: [
    { id: "T-4701", source: "47-48周生产计划（正式稿）", date: "2026-11-16", start: "07:30", end: "17:30", type: "保电", plan: "110kV万兴变间隔扩建·一期电缆改接", location: "秦山街道落塘村", area: "通元", contact: "潘加平（665110）15067365110", department: "项目一部三班", detail: "万海D154线间隔电缆拆除改接至新建环网柜，中铁大桥局保电（高风险作业，第一种工作票）", demand: "保电车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4702", source: "47-48周生产计划（正式稿）", date: "2026-11-18", start: "08:00", end: "17:00", type: "吊车", plan: "石泉变10kV SVG装置建设·电容器组吊装", location: "石泉变", area: "通元", contact: "范家力（660839）13615830839", department: "项目六部", detail: "11月18日—21日连续作业：搭设设备吊装平台，#1/#2电容器组拆除，#4电容器组移位", demand: "25T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4703", source: "47-48周生产计划（正式稿）", date: "2026-11-19", start: "07:30", end: "17:30", type: "保电", plan: "110kV万兴变间隔扩建·二期电缆改接", location: "秦山街道落塘村", area: "通元", contact: "潘加平（665110）15067365110", department: "项目一部三班", detail: "码头D155线间隔电缆拆除改接（高风险作业）", demand: "保电车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4704", source: "47-48周生产计划（正式稿）", date: "2026-11-19", start: "07:30", end: "17:30", type: "联合", plan: "汽车检测站484环网柜消缺及公变并网", location: "于城镇三联村", area: "沈荡", contact: "袁海飞（664770）15888364770", department: "项目二部一班一组", detail: "拆除原484环网柜并新装，三联长浜二号70362公变同期并网保电", demand: "保电车 + 8T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4705", source: "47-48周生产计划（正式稿）", date: "2026-11-23", start: "06:30", end: "17:30", type: "联合", plan: "庆丰社区七号公变整体调换", location: "秦山街道庆丰社区", area: "通元", contact: "潘加平（665110）15067365110", department: "项目一部三班", detail: "拆除40217公变箱变并整体调换，同步开展高压电缆及低压出线改接", demand: "保电车 + 25T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4706", source: "47-48周生产计划（正式稿）", date: "2026-11-23", start: "05:45", end: "18:30", type: "保电", plan: "庆丰社区七号/八号公变同期并网保电", location: "秦山街道庆丰社区", area: "通元", contact: "王勇 13819060705", department: "通元供电所", detail: "40217、40218两台公变配变同期并网保电", demand: "保电车", risk: "无", status: "待调度", assignedVehicles: [] },
    { id: "T-4707", source: "47-48周生产计划（正式稿）", date: "2026-11-24", start: "06:15", end: "18:30", type: "保电", plan: "官堂南变40076公变同期并网保电", location: "秦山镇官堂集镇", area: "通元", contact: "通元供电所", department: "通元供电所", detail: "40076公变配变同期并网保电", demand: "保电车", risk: "无", status: "待调度", assignedVehicles: [] },
    { id: "T-4708", source: "47-48周生产计划（正式稿）", date: "2026-11-24", start: "07:00", end: "18:00", type: "联合", plan: "雪水港崔家浜支线优化消缺·新立电杆", location: "通元镇雪水港村", area: "通元", contact: "包骏（677818）13666777818", department: "项目二部一班一组", detail: "支线1号杆—2号杆间新立15米电杆1基，直线杆改耐张杆，同步保电", demand: "保电车 + 8T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4709", source: "47-48周生产计划（正式稿）", date: "2026-11-24", start: "06:15", end: "19:00", type: "保电", plan: "雪水港片区5台公变同期并网保电", location: "通元镇雪水港村", area: "通元", contact: "赵海波 13967311992", department: "通元供电所", detail: "崔家浜30483、新农村二号30484、陈家浜北30515、陈家浜30367、利河桥30084共5台公变保电", demand: "保电车", risk: "无", status: "待调度", assignedVehicles: [] },
    { id: "T-4710", source: "47-48周生产计划（正式稿）", date: "2026-11-25", start: "07:00", end: "17:00", type: "吊车", plan: "通元台区检修·路灯变拆除移位", location: "通元镇澉南村", area: "通元", contact: "袁海飞（664770）15888364770", department: "项目二部五班", detail: "拆除武袁公路十二台区路灯变变压器及附件，支线1号杆移位并立杆", demand: "8T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4711", source: "47-48周生产计划（正式稿）", date: "2026-11-25", start: "08:00", end: "17:00", type: "吊车", plan: "百可世家配电线路改造·新立电杆", location: "望海街道双桥村", area: "武原", contact: "吴晓敏（620854）13456220854", department: "项目一部二班", detail: "11月25日—26日：新立10米电杆8基，架设导线并制作拉线", demand: "8T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
    { id: "T-4712", source: "47-48周生产计划（正式稿）", date: "2026-11-26", start: "08:00", end: "16:30", type: "吊车", plan: "S207疏港公路线路迁改·澉浦先行段", location: "澉浦镇永新村", area: "通元", contact: "潘加平（665110）15067365110", department: "项目一部三班", detail: "路灯变变压器拆除、支线1号杆移位并立杆", demand: "8T吊车", risk: "四级", status: "待调度", assignedVehicles: [] },
  ],
};

let state = loadState();
let currentPage = "dashboard";
let selectedTaskId = null;
let filterState = { search: "", type: "全部", status: "全部" };

const content = document.querySelector("#page-content");
const titleEl = document.querySelector("#page-title");
const eyebrowEl = document.querySelector("#eyebrow");
const modalBackdrop = document.querySelector("#modal-backdrop");

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.tasks && saved?.vehicles && saved?.bases) return saved;
  } catch (error) { console.warn("Local state ignored", error); }
  return clone(seedState);
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateNavCounts(); }
function esc(value = "") { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]); }
function icon(id) { return `<svg aria-hidden="true"><use href="#${id}"></use></svg>`; }
function formatDate(date) { const [, month, day] = date.split("-"); return `${Number(month)}月${Number(day)}日`; }
function weekTasks() {
  const [start, end] = weekOptions[state.selectedWeek].range;
  return state.tasks.filter((task) => task.date >= start && task.date <= end);
}
function vehicleById(id) { return state.vehicles.find((vehicle) => vehicle.id === id); }
function baseById(id) { return state.bases.find((base) => base.id === id); }
function typeClass(type) { return type === "保电" ? "power" : type === "吊车" ? "crane" : "combo"; }
function statusClass(status) { return ({ "待调度": "pending", "已派车": "assigned", "执行中": "running", "已归场": "done" })[status] || "pending"; }
function capacityNumber(vehicle) { return Number.parseInt(vehicle.capacity, 10) || 0; }

function taskRequirements(task) {
  const requirements = [];
  if (task.type === "保电" || task.type === "联合" || task.demand.includes("保电车")) requirements.push({ kind: "保电车", label: "保电车" });
  if (task.type === "吊车" || task.type === "联合" || task.demand.includes("吊车")) {
    const tons = task.demand.includes("25") ? 25 : 8;
    requirements.push({ kind: "吊车", tons, label: `${tons}T吊车` });
  }
  return requirements;
}

function vehicleMeets(vehicle, requirement) {
  if (requirement.kind === "保电车") return vehicle.kind === "保电车";
  return vehicle.kind === "吊车" && capacityNumber(vehicle) >= requirement.tons;
}

function taskIsFullyAssigned(task) {
  const assigned = (task.assignedVehicles || []).map(vehicleById).filter(Boolean);
  return taskRequirements(task).every((requirement) => assigned.some((vehicle) => vehicleMeets(vehicle, requirement)));
}

function overlaps(a, b) { return a.date === b.date && a.start < b.end && b.start < a.end; }

function computeConflicts(tasks = weekTasks()) {
  const conflicts = [];
  tasks.forEach((task) => {
    const missing = taskRequirements(task).filter((requirement) => !(task.assignedVehicles || []).map(vehicleById).filter(Boolean).some((vehicle) => vehicleMeets(vehicle, requirement)));
    if (missing.length) conflicts.push({ id: `missing-${task.id}`, severity: "medium", title: "派车未完成", message: `${task.plan} 还缺 ${missing.map((item) => item.label).join("、")}`, taskId: task.id, meta: `${formatDate(task.date)} ${task.start}—${task.end}` });
    (task.assignedVehicles || []).forEach((vehicleId) => {
      const vehicle = vehicleById(vehicleId);
      if (vehicle?.status === "维保") conflicts.push({ id: `maint-${task.id}-${vehicleId}`, severity: "high", title: "维保车辆被占用", message: `${vehicle.name} 已分配给 ${task.plan}`, taskId: task.id, meta: vehicle.plate });
    });
  });
  state.vehicles.forEach((vehicle) => {
    const assignedTasks = tasks.filter((task) => (task.assignedVehicles || []).includes(vehicle.id));
    for (let i = 0; i < assignedTasks.length; i += 1) {
      for (let j = i + 1; j < assignedTasks.length; j += 1) {
        if (overlaps(assignedTasks[i], assignedTasks[j])) conflicts.push({ id: `overlap-${vehicle.id}-${assignedTasks[i].id}-${assignedTasks[j].id}`, severity: "high", title: "车辆时间冲突", message: `${vehicle.name} 同时分配给两项作业`, taskId: assignedTasks[i].id, meta: `${formatDate(assignedTasks[i].date)} ${assignedTasks[i].start}—${assignedTasks[i].end}` });
      }
    }
  });
  return conflicts;
}

function updateNavCounts() {
  document.querySelector("#nav-task-count").textContent = weekTasks().length;
  document.querySelector("#nav-conflict-count").textContent = computeConflicts().length;
}

function render() {
  const headings = {
    dashboard: ["调度总览", "生产协同中心"],
    schedule: ["作业计划", "保电与吊车任务"],
    vehicles: ["车辆台账", "自有车辆管理"],
    bases: ["归场点", "车辆归场设置"],
    conflicts: ["冲突中心", "自动校验与提醒"],
  };
  [titleEl.textContent, eyebrowEl.textContent] = headings[currentPage];
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === currentPage));
  const renders = { dashboard: renderDashboard, schedule: renderSchedule, vehicles: renderVehicles, bases: renderBases, conflicts: renderConflicts };
  content.innerHTML = renders[currentPage]();
  updateWeekButton();
  updateNavCounts();
  bindPageControls();
}

function updateWeekButton() {
  const option = weekOptions[state.selectedWeek];
  document.querySelector("#week-label").textContent = option.label;
  document.querySelector("#week-switch small").textContent = option.subtitle;
}

function renderDashboard() {
  const tasks = weekTasks();
  const conflicts = computeConflicts(tasks);
  const unassigned = tasks.filter((task) => !taskIsFullyAssigned(task)).length;
  const running = tasks.filter((task) => task.status === "执行中").length;
  const done = tasks.filter((task) => task.status === "已归场").length;
  return `
    <section class="hero-strip">
      <div class="hero-copy"><span class="date-line">${esc(weekOptions[state.selectedWeek].label)} · 调度窗口</span><h2>保电不断档，吊装不撞车</h2><p>从生产计划中只提取保电与吊车需求，统一安排自有车辆、检查冲突，并跟到车辆归场。</p></div>
      <div class="hero-metric"><strong>${tasks.length}</strong><span>目标作业</span><em>已进入调度池</em></div>
      <div class="hero-metric"><strong>${running}</strong><span>执行中</span><em>现场任务</em></div>
      <div class="hero-metric"><strong>${done}</strong><span>已归场</span><em>闭环完成</em></div>
      <div class="hero-metric ${conflicts.length ? "alert" : ""}"><strong>${conflicts.length}</strong><span>需要处理</span><em>${unassigned} 项未完成派车</em></div>
    </section>
    <div class="dashboard-grid">
      <section class="panel">
        <div class="section-head"><div><h2>周调度视图</h2><p>先看时间，再看车辆与区域</p></div><button class="section-link" data-go="schedule">查看全部 ${icon("i-arrow")}</button></div>
        <div class="timeline-wrap">${renderTimeline(tasks)}</div>
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>需要处理</h2><p>系统自动发现的调度缺口</p></div><button class="section-link" data-go="conflicts">冲突中心 ${icon("i-arrow")}</button></div>
        <div class="attention-list">${conflicts.length ? conflicts.slice(0, 3).map(renderAttention).join("") : `<div class="empty-mini">本周期没有发现调度冲突</div>`}</div>
      </section>
    </div>
    <section class="panel table-panel">
      <div class="table-toolbar"><div><h2>最近任务</h2></div><button class="btn btn-ghost btn-sm" data-go="schedule">进入作业计划</button></div>
      ${renderTaskTable(tasks.slice(0, 7))}
    </section>`;
}

function renderTimeline(tasks) {
  const days = weekOptions[state.selectedWeek].days;
  const weekday = ["一", "二", "三", "四", "五", "六", "日"];
  const groups = [
    { label: "上午", test: (task) => task.start < "12:00" },
    { label: "下午", test: (task) => task.start >= "12:00" },
  ];
  const header = `<div class="timeline-head"><div>时段</div>${days.map((day, index) => `<div class="${day === 10 && state.selectedWeek === "w46" ? "today" : ""}">周${weekday[index]}<strong>${day}</strong></div>`).join("")}</div>`;
  const rows = groups.map((group) => `<div class="timeline-row"><div class="time-label">${group.label}</div>${days.map((day) => {
    const date = `2026-11-${String(day).padStart(2, "0")}`;
    const dayTasks = tasks.filter((task) => task.date === date && group.test(task));
    return `<div class="day-cell">${dayTasks.map((task) => `<button class="task-chip ${typeClass(task.type)}" data-assign="${task.id}"><strong>${esc(task.plan)}</strong><span>${task.start} · ${esc(task.area)}</span></button>`).join("")}</div>`;
  }).join("")}</div>`).join("");
  return `<div class="timeline">${header}${rows}</div>`;
}

function renderAttention(conflict) {
  return `<article class="attention-item"><div class="attention-icon">${icon(conflict.severity === "high" ? "i-alert" : "i-truck")}</div><div><strong>${esc(conflict.title)}</strong><span>${esc(conflict.message)}</span></div><button data-assign="${conflict.taskId}">处理</button></article>`;
}

function renderTaskTable(tasks) {
  if (!tasks.length) return `<div class="empty-mini">没有符合当前筛选的作业</div>`;
  return `<div class="data-table-wrap"><table class="data-table"><thead><tr><th>类型</th><th>日期 / 时间</th><th>计划与地点</th><th>区域</th><th>车辆需求</th><th>已派车辆</th><th>状态</th><th>操作</th></tr></thead><tbody>${tasks.map((task) => {
    const assigned = (task.assignedVehicles || []).map(vehicleById).filter(Boolean);
    return `<tr><td><span class="type-pill ${typeClass(task.type)}">${esc(task.type)}</span></td><td><strong>${formatDate(task.date)}</strong><br><span style="color:var(--muted);font-size:9px">${task.start}—${task.end}</span></td><td class="task-title-cell"><strong>${esc(task.plan)}</strong><span>${esc(task.location)} · ${esc(task.department || "部门待补")}</span></td><td>${esc(task.area)}</td><td>${esc(task.demand)}</td><td><button class="vehicle-link ${assigned.length ? "" : "unassigned"}" data-assign="${task.id}">${assigned.length ? assigned.map((vehicle) => esc(vehicle.name)).join("、") : "待派车"}</button></td><td><span class="status-pill ${statusClass(task.status)}">${esc(task.status)}</span></td><td><div class="row-actions"><button data-assign="${task.id}">调度</button><button class="primary" data-advance="${task.id}">${task.status === "已归场" ? "已完成" : "下一状态"}</button></div></td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function renderSchedule() {
  let tasks = weekTasks();
  if (filterState.search) {
    const keyword = filterState.search.toLowerCase();
    tasks = tasks.filter((task) => [task.plan, task.location, task.area, task.contact, task.department].some((value) => value.toLowerCase().includes(keyword)));
  }
  if (filterState.type !== "全部") tasks = tasks.filter((task) => task.type === filterState.type);
  if (filterState.status !== "全部") tasks = tasks.filter((task) => task.status === filterState.status);
  tasks = tasks.sort((a, b) => `${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`));
  return `<section class="panel table-panel">
    <div class="table-toolbar"><div><h2>${weekOptions[state.selectedWeek].label}目标作业</h2><p style="margin:4px 0 0;color:var(--muted);font-size:9px">仅显示保电和吊车记录</p></div><div class="filters"><div class="search-box">${icon("i-search")}<input id="task-search" placeholder="搜索计划、地点、联络人" value="${esc(filterState.search)}"></div><select class="filter-select" id="task-type-filter"><option>全部</option><option>保电</option><option>吊车</option><option>联合</option></select><select class="filter-select" id="task-status-filter"><option>全部</option><option>待调度</option><option>已派车</option><option>执行中</option><option>已归场</option></select></div></div>
    ${renderTaskTable(tasks)}
  </section>`;
}

function renderVehicles() {
  const available = state.vehicles.filter((vehicle) => vehicle.status === "可用").length;
  const busy = state.vehicles.filter((vehicle) => vehicle.status === "执行中").length;
  const maintenance = state.vehicles.filter((vehicle) => vehicle.status === "维保" || vehicle.status === "停用").length;
  return `<div class="stats-row"><div class="stat-card"><span>车辆总数</span><strong>${state.vehicles.length}</strong><small>公司车辆台账</small></div><div class="stat-card"><span>当前可用</span><strong>${available}</strong><small>可进入调度</small></div><div class="stat-card"><span>执行中</span><strong>${busy}</strong><small>正在现场</small></div><div class="stat-card"><span>维保/停用</span><strong>${maintenance}</strong><small>禁止派车</small></div></div>
  <div class="content-grid"><section><div class="section-head"><div><h2>车辆列表</h2><p>保电车、吊车参与派单，保障车只作台账记录</p></div><button class="btn btn-primary btn-sm" id="add-vehicle">${icon("i-plus")}新增车辆</button></div><div class="vehicle-grid">${state.vehicles.map(renderVehicleCard).join("")}</div></section><aside class="side-note"><div><h3>车辆台账说明</h3><p>台账数据来自《公司车辆车牌号》。可参与派单的车辆：保电车（抢修车、多功能抢险车、多功能车）与吊车（8T / 25T）；其余车辆为保障车，仅记录与查看，不参与保电、吊车派单。</p></div><div><div class="mini-rule"><b>01</b><span>保电任务只能匹配保电车</span></div><div class="mini-rule"><b>02</b><span>吊车按吨位向上匹配</span></div><div class="mini-rule"><b>03</b><span>维保/停用车辆不可参与派车</span></div></div></aside></div>`;
}

function vehicleIcon(vehicle) { return vehicle.kind === "吊车" ? "i-crane" : vehicle.kind === "保电车" ? "i-bolt" : "i-truck"; }

function renderVehicleCard(vehicle) {
  const base = baseById(vehicle.baseId);
  const statusClassName = vehicle.status === "可用" ? "" : vehicle.status === "维保" || vehicle.status === "停用" ? "maint" : "busy";
  return `<article class="vehicle-card"><div class="vehicle-card-head"><div class="vehicle-icon ${vehicle.kind === "吊车" ? "crane" : ""}">${icon(vehicleIcon(vehicle))}</div><span class="status-dot ${statusClassName}">${esc(vehicle.status)}</span></div><h3>${esc(vehicle.name)}</h3><span class="plate">${esc(vehicle.plate)}</span><div class="vehicle-meta"><div><span>车型 / 能力</span><strong>${esc(vehicle.kind)} · ${esc(vehicle.capacity)}</strong></div><div><span>归场点</span><strong>${esc(base?.name || "未设置")}</strong></div><div><span>所属公司</span><strong>${esc(vehicle.company || "待补")}</strong></div></div></article>`;
}

function renderBases() {
  return `<div class="section-head"><div><h2>车辆归场设置</h2><p>简化原系统审批链，归场点由管理员直接维护</p></div><button class="btn btn-primary btn-sm" id="add-base">${icon("i-plus")}新增归场点</button></div><div class="base-grid">${state.bases.map((base) => {
    const vehicles = state.vehicles.filter((vehicle) => vehicle.baseId === base.id);
    return `<article class="base-card"><div class="map-thumb"><div class="map-pin">${icon("i-pin")}</div></div><div class="base-body"><h3>${esc(base.name)}</h3><p>${esc(base.address)}</p><div class="base-foot"><span>围栏半径 <strong>${base.radius}m</strong></span><button class="btn btn-ghost btn-sm" data-base-vehicles="${base.id}">${vehicles.length} 辆车 · 设置</button></div></div></article>`;
  }).join("")}</div>`;
}

function renderConflicts() {
  const conflicts = computeConflicts();
  return `<div class="stats-row"><div class="stat-card"><span>全部提醒</span><strong>${conflicts.length}</strong><small>当前调度窗口</small></div><div class="stat-card"><span>高优先级</span><strong>${conflicts.filter((item) => item.severity === "high").length}</strong><small>时间冲突或维保占用</small></div><div class="stat-card"><span>待派车</span><strong>${conflicts.filter((item) => item.id.startsWith("missing")).length}</strong><small>缺少匹配车辆</small></div><div class="stat-card"><span>检查规则</span><strong>3</strong><small>时间、吨位、车辆状态</small></div></div>${conflicts.length ? `<div class="conflict-list">${conflicts.map((conflict) => `<article class="conflict-card ${conflict.severity}"><div class="conflict-severity">${icon("i-alert")}</div><div><h3>${esc(conflict.title)}</h3><p>${esc(conflict.message)}</p><small>${esc(conflict.meta)}</small></div><button class="btn btn-ghost btn-sm" data-assign="${conflict.taskId}">立即处理</button></article>`).join("")}</div>` : `<div class="healthy-banner">${icon("i-check")}当前调度窗口通过全部校验，没有发现时间、吨位或车辆状态冲突。</div>`}`;
}

function bindPageControls() {
  content.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.go)));
  content.querySelectorAll("[data-assign]").forEach((button) => button.addEventListener("click", () => openAssignModal(button.dataset.assign)));
  content.querySelectorAll("[data-advance]").forEach((button) => button.addEventListener("click", () => advanceTask(button.dataset.advance)));
  content.querySelectorAll("[data-base-vehicles]").forEach((button) => button.addEventListener("click", () => openBaseVehicleModal(button.dataset.baseVehicles)));
  const search = content.querySelector("#task-search");
  if (search) search.addEventListener("input", (event) => {
    filterState.search = event.target.value;
    window.clearTimeout(bindPageControls.searchTimer);
    bindPageControls.searchTimer = window.setTimeout(render, 180);
  });
  const typeFilter = content.querySelector("#task-type-filter");
  if (typeFilter) { typeFilter.value = filterState.type; typeFilter.addEventListener("change", (event) => { filterState.type = event.target.value; render(); }); }
  const statusFilter = content.querySelector("#task-status-filter");
  if (statusFilter) { statusFilter.value = filterState.status; statusFilter.addEventListener("change", (event) => { filterState.status = event.target.value; render(); }); }
  content.querySelector("#add-vehicle")?.addEventListener("click", openVehicleForm);
  content.querySelector("#add-base")?.addEventListener("click", openBaseForm);
}

function navigate(page) { currentPage = page; document.querySelector("#sidebar").classList.remove("open"); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }

function advanceTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task || task.status === "已归场") return;
  if (!taskIsFullyAssigned(task)) { showToast("请先补齐任务所需车辆"); openAssignModal(taskId); return; }
  const stages = ["待调度", "已派车", "执行中", "已归场"];
  task.status = stages[Math.min(stages.indexOf(task.status) + 1, stages.length - 1)];
  saveState(); render(); showToast(`任务已更新为“${task.status}”`);
}

function openModal(id) {
  document.querySelectorAll(".modal").forEach((modal) => { modal.hidden = true; });
  document.querySelector(id).hidden = false;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModals() {
  document.querySelectorAll(".modal").forEach((modal) => { modal.hidden = true; });
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
  selectedTaskId = null;
}

function openAssignModal(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  selectedTaskId = taskId;
  document.querySelector("#assign-title").textContent = "选择可用车辆";
  const requirements = taskRequirements(task);
  document.querySelector("#assign-content").innerHTML = `<div class="assign-summary"><div><strong>${esc(task.plan)}</strong><span>${formatDate(task.date)} ${task.start}—${task.end} · ${esc(task.area)}</span></div><div><strong>${esc(task.demand)}</strong><span>${taskIsFullyAssigned(task) ? "需求已满足" : "仍需补齐车辆"}</span></div></div><div class="vehicle-option-list">${state.vehicles.map((vehicle) => {
    const relevant = requirements.some((requirement) => vehicleMeets(vehicle, requirement));
    const selected = (task.assignedVehicles || []).includes(vehicle.id);
    const clashing = state.tasks.some((other) => other.id !== task.id && (other.assignedVehicles || []).includes(vehicle.id) && overlaps(task, other));
    const disabled = vehicle.status === "维保" || vehicle.status === "停用" || !relevant || clashing;
    const reason = vehicle.status === "维保" ? "车辆维保中" : vehicle.status === "停用" ? "车辆已停用" : !relevant ? "不满足车型或吨位" : clashing ? "同一时段已占用" : selected ? "已选中，点击可取消" : "可调度";
    return `<button class="vehicle-option ${disabled ? "disabled" : ""}" data-toggle-vehicle="${vehicle.id}" ${disabled ? "disabled" : ""}><div class="vehicle-icon ${vehicle.kind === "吊车" ? "crane" : ""}">${icon(vehicleIcon(vehicle))}</div><div><strong>${esc(vehicle.name)} · ${esc(vehicle.plate)}</strong><span>${esc(vehicle.kind)} · ${esc(vehicle.capacity)} · ${esc(baseById(vehicle.baseId)?.name || "未设归场点")}</span></div><em>${selected ? "已选择" : reason}</em></button>`;
  }).join("")}</div>`;
  document.querySelectorAll("#assign-content [data-toggle-vehicle]").forEach((button) => button.addEventListener("click", () => toggleTaskVehicle(task.id, button.dataset.toggleVehicle)));
  openModal("#assign-modal");
}

function toggleTaskVehicle(taskId, vehicleId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.assignedVehicles ||= [];
  const index = task.assignedVehicles.indexOf(vehicleId);
  if (index >= 0) task.assignedVehicles.splice(index, 1); else task.assignedVehicles.push(vehicleId);
  task.status = taskIsFullyAssigned(task) ? (task.status === "待调度" ? "已派车" : task.status) : "待调度";
  saveState(); render(); openAssignModal(taskId);
  showToast(index >= 0 ? "已取消车辆分配" : "车辆已加入本次任务");
}

function openVehicleForm() {
  document.querySelector("#assign-title").textContent = "新增自有车辆";
  document.querySelector("#assign-content").innerHTML = `<form id="vehicle-form" class="form-grid"><label>车辆名称<input name="name" required placeholder="例如：25T 吊车 03"></label><label>车牌号<input name="plate" required placeholder="可先填车牌待补"></label><label>车辆类型<select name="kind"><option>保电车</option><option>吊车</option></select></label><label>能力 / 吨位<input name="capacity" required placeholder="例如：100kW 或 25T"></label><label>当前状态<select name="status"><option>可用</option><option>执行中</option><option>维保</option></select></label><label>归场点<select name="baseId"><option value="">未设置</option>${state.bases.map((base) => `<option value="${base.id}">${esc(base.name)}</option>`).join("")}</select></label><div class="form-actions span-2"><button type="button" class="btn btn-ghost close-modal">取消</button><button class="btn btn-primary" type="submit">保存车辆</button></div></form>`;
  openModal("#assign-modal"); bindDynamicClose();
  document.querySelector("#vehicle-form").addEventListener("submit", (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); state.vehicles.push({ id: `V-${Date.now()}`, ...data, pendingProfile: data.plate.includes("待补") }); saveState(); closeModals(); render(); showToast("车辆已加入台账"); });
}

function openBaseForm() {
  document.querySelector("#assign-title").textContent = "新增归场点";
  document.querySelector("#assign-content").innerHTML = `<form id="base-form" class="form-grid"><label class="span-2">归场点名称<input name="name" required placeholder="例如：公司西场归场点"></label><label class="span-2">详细地址<input name="address" required placeholder="填写车辆实际停放地址"></label><label>围栏半径（米）<input name="radius" type="number" min="30" value="100"></label><div></div><div class="form-actions span-2"><button type="button" class="btn btn-ghost close-modal">取消</button><button class="btn btn-primary" type="submit">保存归场点</button></div></form>`;
  openModal("#assign-modal"); bindDynamicClose();
  document.querySelector("#base-form").addEventListener("submit", (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); state.bases.push({ id: `B-${Date.now()}`, ...data, radius: Number(data.radius) }); saveState(); closeModals(); render(); showToast("归场点已保存"); });
}

function openBaseVehicleModal(baseId) {
  const base = baseById(baseId); if (!base) return;
  document.querySelector("#assign-title").textContent = "设置归场车辆";
  document.querySelector("#assign-content").innerHTML = `<div class="assign-summary"><div><strong>${esc(base.name)}</strong><span>${esc(base.address)}</span></div><div><strong>${base.radius}m</strong><span>电子围栏半径</span></div></div><div class="vehicle-option-list">${state.vehicles.map((vehicle) => `<button class="vehicle-option" data-set-base="${vehicle.id}"><div class="vehicle-icon ${vehicle.kind === "吊车" ? "crane" : ""}">${icon(vehicleIcon(vehicle))}</div><div><strong>${esc(vehicle.name)} · ${esc(vehicle.plate)}</strong><span>${esc(vehicle.kind)} · ${esc(vehicle.capacity)}</span></div><em>${vehicle.baseId === baseId ? "已绑定" : "点击绑定"}</em></button>`).join("")}</div>`;
  document.querySelectorAll("#assign-content [data-set-base]").forEach((button) => button.addEventListener("click", () => { const vehicle = vehicleById(button.dataset.setBase); vehicle.baseId = baseId; saveState(); render(); openBaseVehicleModal(baseId); showToast("车辆归场点已更新"); }));
  openModal("#assign-modal");
}

function bindDynamicClose() { document.querySelectorAll("#assign-content .close-modal").forEach((button) => button.addEventListener("click", closeModals)); }

function renderImportList() {
  const files = [
    { title: "2026年第47周—第48周生产计划（正式稿）", total: 200, matched: 16, imported: state.tasks.filter((task) => task.source === "47-48周生产计划（正式稿）").length },
    { title: "2026年第46周—第47周生产计划（历史演示）", total: 173, matched: 8, imported: 0 },
  ];
  document.querySelector("#import-list").innerHTML = files.map((file) => `<article class="import-file"><div class="file-icon">XLSX</div><div><strong>${esc(file.title)}</strong><span>原始 ${file.total} 行 · 筛出 ${file.matched} 条保电/吊车记录</span></div><div class="import-count"><b>${file.imported}</b>条已载入</div></article>`).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.querySelector("span").textContent = message; toast.hidden = false;
  window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => { toast.hidden = true; }, 2400);
}

document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.page)));
document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("open"));
document.querySelector("#week-switch").addEventListener("click", () => { const cycle = ["w47", "w48", "w46", "w45"]; state.selectedWeek = cycle[(cycle.indexOf(state.selectedWeek) + 1) % cycle.length]; saveState(); render(); showToast(`已切换到${weekOptions[state.selectedWeek].label}`); });
document.querySelector("#open-task").addEventListener("click", () => openModal("#task-modal"));
document.querySelector("#open-import").addEventListener("click", () => { renderImportList(); openModal("#import-modal"); });
document.querySelectorAll(".close-modal").forEach((button) => button.addEventListener("click", closeModals));
modalBackdrop.addEventListener("click", closeModals);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModals(); });
document.querySelector("#task-form").addEventListener("submit", (event) => {
  event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget));
  state.tasks.push({ id: `T-${Date.now()}`, source: "手工新建", ...data, status: "待调度", assignedVehicles: [] });
  saveState(); closeModals(); navigate("schedule"); showToast("任务已创建，等待派车"); event.currentTarget.reset();
});
document.querySelector("#refresh-samples").addEventListener("click", () => {
  const ids = new Set(state.tasks.map((task) => task.id)); let added = 0;
  seedState.tasks.forEach((task) => { if (!ids.has(task.id)) { state.tasks.push(clone(task)); added += 1; } });
  saveState(); renderImportList(); render(); showToast(added ? `已补回 ${added} 条内置样本` : "样本数据已经是最新状态");
});

render();
