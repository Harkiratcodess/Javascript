
const TAGS = [
  { label: 'Work',     cls: 'tag-blue'   },
  { label: 'Personal', cls: 'tag-amber'  },
  { label: 'Study',    cls: 'tag-purple' },
];

let tasks = [
  { id: 1, title: 'Review project proposal', done: false, priority: 'high',   tag: 0, date: today() },
  { id: 2, title: 'Buy groceries',           done: false, priority: 'medium', tag: 1, date: today() },
  { id: 3, title: 'Read chapter 4 notes',    done: true,  priority: 'low',    tag: 2, date: today() },
  { id: 4, title: 'Send invoice to client',  done: false, priority: 'high',   tag: 0, date: today() },
  { id: 5, title: 'Gym – leg day',           done: false, priority: 'medium', tag: 1, date: today() },
];

let nextId        = 10;
let currentView   = 'today';
let currentFilter = 'all';


function today() {
  return new Date().toISOString().slice(0, 10);
}

function fmtDate(d) {
  const opts = { month: 'short', day: 'numeric' };
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', opts);
}

function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}


(function setDateHeader() {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('pageDate').textContent =
    new Date().toLocaleDateString('en-US', opts);
})();


document.getElementById('taskInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const inp   = document.getElementById('taskInput');
  const title = inp.value.trim();
  if (!title) { inp.focus(); return; }

  tasks.push({
    id:       nextId++,
    title,
    done:     false,
    priority: 'medium',
    tag:      1,
    date:     today(),
  });

  inp.value = '';
  render();
  inp.focus();
}


function toggle(id) {
  const t = tasks.find(t => t.id === id);
  if (t) { t.done = !t.done; render(); }
}

function remove(id) {
  tasks = tasks.filter(t => t.id !== id);
  render();
}


function setView(v) {
  currentView = v;

  document.querySelectorAll('.nav-item').forEach((el, i) => {
    el.classList.toggle('active', ['today', 'all', 'done'][i] === v);
  });

  const titles = { today: 'Today', all: 'All Tasks', done: 'Completed' };
  document.getElementById('pageTitle').textContent = titles[v];

  render();
}


function setFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function taskHTML(t) {
  const tag  = TAGS[t.tag];
  const pCls = { high: 'p-high', medium: 'p-medium', low: 'p-low' }[t.priority];
  const label = t.priority.charAt(0).toUpperCase() + t.priority.slice(1);

  return `
    <div class="task-item${t.done ? ' done' : ''}" id="task-${t.id}">
      <div class="cb-wrap">
        <div class="cb" onclick="toggle(${t.id})">${t.done ? '✓' : ''}</div>
      </div>
      <div class="task-body">
        <div class="task-title">${esc(t.title)}</div>
        <div class="task-meta">
          <span class="tag ${tag.cls}">${tag.label}</span>
          <span class="meta-dot">·</span>
          <span class="priority-dot ${pCls}"></span>
          <span class="meta-date" style="font-size:12px;color:var(--text2)">${label} priority</span>
          <span class="meta-dot">·</span>
          <span class="meta-date">${fmtDate(t.date)}</span>
        </div>
      </div>
      <div class="task-right">
        <button class="icon-btn" title="Delete" onclick="remove(${t.id})">✕</button>
      </div>
    </div>`;
}

function updateCounts() {
  document.getElementById('cnt-today').textContent = tasks.filter(t => t.date === today()).length;
  document.getElementById('cnt-all').textContent   = tasks.length;
  document.getElementById('cnt-done').textContent  = tasks.filter(t => t.done).length;
}

function updateProgress() {
  const total = tasks.filter(t => t.date === today()).length;
  const done  = tasks.filter(t => t.date === today() && t.done).length;
  const pct   = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('progressBar').style.width  = pct + '%';
  document.getElementById('progressText').textContent = `${done} / ${total} done`;
}

function render() {
  updateCounts();
  updateProgress();

  let visible = [...tasks];


  if (currentView === 'today') visible = visible.filter(t => t.date === today());
  if (currentView === 'done')  visible = visible.filter(t => t.done);

  if (currentFilter === 'active') visible = visible.filter(t => !t.done);
  if (currentFilter === 'done')   visible = visible.filter(t =>  t.done);
  if (currentFilter === 'high')   visible = visible.filter(t => t.priority === 'high');

  const area = document.getElementById('taskArea');
  area.innerHTML = '';

  if (!visible.length) {
    area.innerHTML = `<div class="empty"><div class="empty-icon">🗒️</div><p>No tasks here yet.</p></div>`;
    return;
  }

  const pending = visible.filter(t => !t.done);
  const done    = visible.filter(t =>  t.done);

  if (pending.length) {
    area.innerHTML += `<div class="section-label">Pending</div>`;
    area.innerHTML += `<div class="task-list">${pending.map(taskHTML).join('')}</div>`;
  }

  if (done.length) {
    area.innerHTML += `<div class="section-label">Completed</div>`;
    area.innerHTML += `<div class="task-list">${done.map(taskHTML).join('')}</div>`;
  }
}

render();