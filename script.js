'use strict';

// Source: LNR 2026 calendar plan, athletics section, worksheet rows 258–284.
// Deadlines, travel participation and actual results are not confirmed by this plan.
const arena = 'Луганск · легкоатлетический манеж МВД по ЛНР';
const stadium = 'Луганск · манеж МВД по ЛНР / стадион «Авангард»';
const guor = 'Луганск · Луганское ГУОР';
const plan = [
  [263,'2026-01-28','2026-01-29','Республиканские соревнования по лёгкой атлетике «Шиповка юных»',arena,'Бег · барьеры · прыжки · толкание ядра','До 16, до 14 и до 12 лет'],
  [264,'2026-02-04','2026-02-05','Первенство ЛНР по лёгкой атлетике среди юниоров и юниорок до 23 лет',arena,'Бег · барьеры · эстафета · прыжки','До 23 лет'],
  [265,'2026-02-04','2026-02-05','Первенство ЛНР по лёгкой атлетике среди юниоров и юниорок до 20 лет',arena,'Бег · барьеры · эстафета · прыжки','До 20 лет'],
  [266,'2026-02-04','2026-02-05','Первенство ЛНР по лёгкой атлетике среди юношей и девушек до 18 лет',arena,'Бег · барьеры · эстафета · прыжки','До 18 лет'],
  [267,'2026-02-04','2026-02-05','Первенство ЛНР по лёгкой атлетике среди юношей и девушек до 16 лет',arena,'Бег · барьеры · эстафета · прыжки','До 16 лет'],
  [258,'2026-03-04','2026-03-05','Чемпионат ЛНР по лёгкой атлетике',arena,'Бег · барьеры · эстафета · прыжки','Мужчины и женщины'],
  [259,'2026-04-16','2026-04-16','Чемпионат ЛНР по лёгкой атлетике (кросс)',guor,'Кросс 5 км','Мужчины и женщины'],
  [268,'2026-04-16','2026-04-16','Первенство ЛНР по легкоатлетическому кроссу до 23 лет',guor,'Кросс 3 км','До 23 лет'],
  [269,'2026-04-16','2026-04-16','Первенство ЛНР по легкоатлетическому кроссу до 20 лет',guor,'Кросс 2 км · 3 км','До 20 лет'],
  [270,'2026-04-16','2026-04-16','Первенство ЛНР по легкоатлетическому кроссу до 18 лет',guor,'Кросс 2 км','До 18 лет'],
  [271,'2026-04-16','2026-04-16','Первенство ЛНР по легкоатлетическому кроссу до 16 лет',guor,'Кросс 1 км · 2 км','До 16 лет'],
  [272,'2026-04-16','2026-04-16','Первенство ЛНР по легкоатлетическому кроссу до 14 лет',guor,'Кросс 1 км','До 14 лет'],
  [273,'2026-04-29','2026-04-30','Первенство ЛНР по лёгкой атлетике среди юниоров и юниорок до 23 лет',stadium,'Бег · барьеры · эстафета · прыжки · метания','До 23 лет'],
  [274,'2026-04-29','2026-04-30','Первенство ЛНР по лёгкой атлетике среди юниоров и юниорок до 20 лет',stadium,'Бег · барьеры · эстафета · прыжки · метания','До 20 лет'],
  [275,'2026-04-29','2026-04-30','Первенство ЛНР по лёгкой атлетике среди юношей и девушек до 18 лет',stadium,'Бег · барьеры · эстафета · прыжки · метания','До 18 лет'],
  [276,'2026-04-29','2026-04-30','Первенство ЛНР по лёгкой атлетике среди юношей и девушек до 16 лет',stadium,'Бег · барьеры · эстафета · прыжки · метания','До 16 лет'],
  [277,'2026-05-06','2026-05-06','Республиканские соревнования «Мемориал ЗТ УССР В. П. Скачко»',stadium,'Бег 100 м, 400 м · прыжок в длину · метания','До 20, до 18 и до 16 лет'],
  [260,'2026-05-20','2026-05-21','Чемпионат ЛНР по лёгкой атлетике',stadium,'Бег · барьеры · эстафета · прыжки · метания','Мужчины и женщины'],
  [278,'2026-06-03','2026-06-04','Республиканские соревнования памяти ЗМС СССР В. Н. Брумеля',stadium,'Бег · барьеры · эстафета · прыжки','До 18 и до 16 лет'],
  [279,'2026-06-10','2026-06-11','Республиканские соревнования по легкоатлетическому четырёхборью ко Дню России',stadium,'Легкоатлетическое четырёхборье','До 16, до 14 и до 12 лет'],
  [280,'2026-09-23','2026-09-24','Республиканские соревнования памяти ЗМС СССР В. Скоморохова',stadium,'Бег · барьеры · эстафета · прыжки','До 18 и до 16 лет'],
  [261,'2026-10-07','2026-10-08','Кубок ЛНР по лёгкой атлетике',stadium,'Бег · барьеры · эстафета · прыжки · метания','Мужчины и женщины'],
  [281,'2026-10-14','2026-10-14','Республиканские соревнования памяти МСМК СССР С. Бородай',arena,'Бег · прыжки','До 16, до 14 и до 12 лет'],
  [282,'2026-11-03','2026-11-03','Республиканские соревнования по лёгкой атлетике ко Дню народного единства',arena,'Бег · барьеры · прыжки · толкание ядра','До 14 и до 12 лет'],
  [283,'2026-11-11','2026-11-12','Республиканский турнир, посвящённый олимпийцам Луганщины',arena,'Бег · барьеры · эстафета · прыжки','Взрослые, до 23 и до 20 лет'],
  [284,'2026-12-23','2026-12-23','Предновогодние республиканские соревнования по лёгкой атлетике',arena,'Бег · барьеры · прыжки · троеборье','До 14 и до 12 лет'],
];
const today = new Date();
const todayISO = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
const events = plan.map(([row,date,end,title,place,disciplines,ages]) => ({ id: `lnr-${row}`, row, date, end, title, type: 'local', status: end < todayISO ? 'past' : 'planned', place, disciplines, ages, deadline: '' }));
const demoRows = [
  { number: '01', name: 'Спортсмен А.', team: 'Команда 01', result: '12,40', place: '1' },
  { number: '02', name: 'Спортсмен Б.', team: 'Команда 02', result: '12,85', place: '2' },
  { number: '03', name: 'Спортсмен В.', team: 'Команда 03', result: '13,10', place: '3' },
  { number: '04', name: 'Спортсмен Г.', team: 'Команда 01', result: '—', place: '—' },
];
const requests = [];
const suggestions = [];
const statusText = { open: 'ПРИЁМ ОТКРЫТ · ДЕМО', planned: 'ПО ПЛАНУ', past: 'ДАТА ПРОШЛА', closed: 'ЗАВЕРШЕНО · ДЕМО' };
const statusRequest = { pending: 'Ожидает решения', approved: 'Утверждён', declined: 'Отказано', clarification: 'Нужно уточнение' };
let month = new Date(today.getFullYear(), today.getMonth(), 1);
let currentFilter = 'all';
let lastFocused = null;

function elem(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}
function dateLabel(value) {
  return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}
function rangeLabel(event) {
  return event.end === event.date ? dateLabel(event.date) : `${dateLabel(event.date)} — ${dateLabel(event.end)}`;
}
function showDayEvents(matches, iso) {
  if (matches.length === 1) { openEvent(matches[0]); return; }
  const content = elem('div'); content.append(elem('span', 'kicker', 'КАЛЕНДАРЬ ЛНР'), elem('h2', '', `${dateLabel(iso)} · ${matches.length} стартов`));
  matches.forEach(event => {
    const button = elem('button', 'day-event-link', `${event.title} →`);
    button.type = 'button'; button.addEventListener('click', () => openEvent(event)); content.append(button);
  });
  showModal(content);
}
function renderCalendar() {
  document.querySelector('#monthTitle').textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(month);
  const grid = document.querySelector('#calendarGrid');
  grid.replaceChildren();
  const start = (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  for (let i = 0; i < start; i++) grid.append(elem('span', 'day-blank'));
  for (let i = 1; i <= days; i++) {
    const iso = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const matches = events.filter(event => event.date <= iso && event.end >= iso);
    const day = elem(matches.length ? 'button' : 'span', `calendar-day ${matches.length ? `has-event ${matches[0].type}` : ''}`);
    if (matches.length) {
      day.type = 'button';
      day.title = matches.map(event => event.title).join(', ');
      day.setAttribute('aria-label', `${dateLabel(iso)}: ${matches.map(event => event.title).join(', ')}`);
      day.addEventListener('click', () => showDayEvents(matches, iso));
    }
    day.append(elem('strong', '', String(i)));
    if (matches.length) day.append(elem('small', '', `${matches.length} ${matches.length === 1 ? 'старт' : matches.length < 5 ? 'старта' : 'стартов'}`));
    grid.append(day);
  }
}
document.querySelectorAll('[data-month]').forEach(button => button.addEventListener('click', () => {
  month = new Date(month.getFullYear(), month.getMonth() + (button.dataset.month === 'next' ? 1 : -1), 1);
  renderCalendar();
}));

function renderEvents() {
  const grid = document.querySelector('#eventGrid');
  grid.replaceChildren();
  const visible = events.filter(event => currentFilter === 'all' || (currentFilter === 'trip' ? event.type === 'trip' : event.status === currentFilter));
  visible.forEach(event => {
    const card = elem('article', `event-card ${event.type === 'trip' ? 'trip-card' : ''}`);
    const top = elem('div', 'event-top');
    top.append(elem('span', `tag tag-${event.status}`, `● ${statusText[event.status]}`), elem('span', 'event-index', event.type === 'trip' ? 'ВЫЕЗД' : 'ЛНР'));
    card.append(top, elem('div', 'event-symbol', event.type === 'trip' ? '↗' : '◎'), elem('span', 'event-type', event.ages.toUpperCase()), elem('h3', '', event.title));
    const bottom = elem('div', 'event-bottom');
    bottom.append(elem('span', '', `${rangeLabel(event)} · ${event.place}`));
    const button = elem('button', 'text-button', 'Карточка ↗');
    button.type = 'button'; button.addEventListener('click', () => openEvent(event));
    bottom.append(button); card.append(bottom); grid.append(card);
  });
  if (!visible.length) grid.append(elem('p', 'empty', 'В этой категории пока нет стартов.'));
  const upcoming = events.find(event => event.end >= todayISO) || events.at(-1);
  document.querySelector('#nextEventTitle').textContent = upcoming.title;
  document.querySelector('#nextEventDate').textContent = rangeLabel(upcoming);
  document.querySelector('#nextEventButton').onclick = () => openEvent(upcoming);
  document.querySelector('#localCount').textContent = events.length;
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  renderEvents();
}));

function showModal(content) {
  lastFocused = document.activeElement;
  const backdrop = document.querySelector('#modalBackdrop');
  const title = content.querySelector('h2');
  if (title) title.id = 'modalTitle';
  document.querySelector('#modalContent').replaceChildren(content);
  backdrop.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('#modalClose').focus();
}
function closeModal() {
  document.querySelector('#modalBackdrop').classList.add('hidden');
  document.body.classList.remove('modal-open');
  if (lastFocused && lastFocused.isConnected) lastFocused.focus();
}
document.querySelector('#modalClose').addEventListener('click', closeModal);
document.querySelector('#modalBackdrop').addEventListener('click', event => { if (event.target.id === 'modalBackdrop') closeModal(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.querySelector('#modalBackdrop').classList.contains('hidden')) closeModal();
  if (event.key !== 'Tab' || document.querySelector('#modalBackdrop').classList.contains('hidden')) return;
  const focusable = [...document.querySelector('#modalBackdrop').querySelectorAll('button:not([disabled]),input:not([disabled]),textarea:not([disabled]),a[href]')].filter(el => el.offsetParent !== null);
  if (!focusable.length) return;
  if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1).focus(); }
  if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0].focus(); }
});

function addLine(parent, label, value) { const row = elem('p', 'detail-line'); row.append(elem('strong', '', `${label}: `), document.createTextNode(value)); parent.append(row); }
function openEvent(event) {
  const content = elem('div');
  content.append(elem('span', 'kicker', event.type === 'trip' ? 'ВЫЕЗД · ДЕМО' : 'КАЛЕНДАРНЫЙ ПЛАН ЛНР · 2026'), elem('h2', '', event.title));
  const details = elem('div', 'modal-details');
  addLine(details, 'Дата по плану', rangeLabel(event)); addLine(details, 'Место', event.place); addLine(details, 'Возрастные группы', event.ages); addLine(details, 'Дисциплины', event.disciplines);
  addLine(details, 'Источник', `Календарный план спортивных мероприятий ЛНР на 2026 год, раздел «Лёгкая атлетика», строка ${event.row}.`);
  addLine(details, 'Приём заявок', event.status === 'open' ? `Открыт в демо${event.deadline ? ` · до ${event.deadline}` : ''}` : 'Срок и возможность подачи не подтверждены организатором');
  content.append(details);
  const tabs = elem('div', 'detail-tabs');
  const panel = elem('div', 'detail-panel');
  const sections = [
    ['Регламент', 'Регламент', 'Отдельный утверждённый регламент не предоставлен. Календарный план содержит даты и виды программы, но не заменяет положение о соревновании.'],
    ['Расписание', 'Расписание', 'Почасовое расписание не предоставлено. Даты указаны по календарному плану ЛНР.'],
    ['Протоколы', 'Итоговые протоколы', 'Подтверждённый протокол этого старта пока не предоставлен. Прошедшая дата не означает, что соревнование состоялось или результаты опубликованы.'],
    ['Наши спортсмены', 'Участники и результаты', 'Достоверные ФИО, дисциплины, места и результаты пока не подтверждены протоколами.'],
  ];
  function select(index) {
    [...tabs.children].forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', String(i === index)); });
    panel.replaceChildren(elem('h3', '', sections[index][1]), elem('p', '', sections[index][2]));
    const file = event.files?.[index];
    if (file) { const link = elem('a', 'text-button', `Открыть PDF: ${file.name} ↗`); link.href = file.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; panel.append(link); }
  }
  sections.forEach(([label], index) => { const button = elem('button', '', label); button.type = 'button'; button.addEventListener('click', () => select(index)); tabs.append(button); });
  content.append(tabs, panel); select(0);
  const actions = elem('div', 'modal-actions');
  if (event.status === 'open') {
    const apply = elem('button', 'button button-blue', event.type === 'trip' ? 'Предложить кандидата ↗' : 'Подать демо-заявку ↗');
    apply.addEventListener('click', () => openApplication(event)); actions.append(apply);
  } else actions.append(elem('p', 'notice', 'Настоящий приём заявок на сайте не подключён.'));
  const edit = elem('button', 'text-button', 'Изменить как администратор · демо ↗'); edit.type = 'button'; edit.addEventListener('click', () => openEditor(event)); actions.append(edit);
  content.append(actions); showModal(content);
}

function openEditor(selected = events.find(event => event.end >= todayISO) || events[0]) {
  const content = elem('div');
  content.append(elem('span', 'kicker', 'КАБИНЕТ АДМИНИСТРАТОРА · ДЕМО'), elem('h2', '', 'Редактировать календарный план'));
  const form = elem('form', 'demo-form');
  const choose = elem('label', 'form-field', 'Соревнование'); const select = elem('select'); select.name = 'event';
  events.forEach(event => { const option = elem('option', '', event.title); option.value = event.id; select.append(option); });
  select.value = selected.id; choose.append(select); form.append(choose);
  const date = elem('label', 'form-field', 'Дата проведения'); const dateInput = elem('input'); dateInput.name = 'date'; dateInput.type = 'date'; dateInput.required = true; date.append(dateInput);
  const deadline = field('Срок приёма заявок (если подтверждён)', 'deadline', 'Например: 12 мая 2026', false);
  const status = elem('label', 'form-field', 'Статус приёма'); const statusSelect = elem('select'); statusSelect.name = 'status';
  [['past', 'Дата прошла'], ['planned', 'По плану'], ['open', 'Приём открыт · демо'], ['closed', 'Завершено · демо']].forEach(([value, label]) => { const option = elem('option', '', label); option.value = value; statusSelect.append(option); }); status.append(statusSelect);
  const documents = ['Регламент (PDF)', 'Расписание (PDF)', 'Итоговый протокол (PDF)'];
  const files = documents.map((title, i) => { const wrapper = elem('label', 'form-field', title); const input = elem('input'); input.type = 'file'; input.accept = 'application/pdf,.pdf'; input.name = `file${i}`; wrapper.append(input); return wrapper; });
  function sync() { const event = events.find(item => item.id === select.value); dateInput.value = event.date; deadline.querySelector('input').value = event.deadline; statusSelect.value = event.status; files.forEach(wrapper => { wrapper.querySelector('input').value = ''; }); }
  select.addEventListener('change', sync); sync();
  form.append(date, deadline, status, ...files, elem('p', 'notice', 'Изменения и выбранные PDF доступны только в этом браузере до обновления страницы. Реальные файлы на сервер не загружаются.'));
  const save = elem('button', 'button button-blue', 'Сохранить изменения'); save.type = 'submit'; form.append(save);
  form.addEventListener('submit', action => {
    action.preventDefault(); const target = events.find(item => item.id === select.value);
    const selectedFiles = files.map(wrapper => wrapper.querySelector('input').files[0]);
    if (selectedFiles.some(file => file && (file.type !== 'application/pdf' || file.size > 8 * 1024 * 1024))) {
      window.alert('Можно добавить только PDF-файлы размером до 8 МБ.'); return;
    }
    const duration = (Date.parse(`${target.end}T12:00:00Z`) - Date.parse(`${target.date}T12:00:00Z`)) / 86400000;
    target.date = dateInput.value;
    target.end = new Date(Date.parse(`${target.date}T12:00:00Z`) + duration * 86400000).toISOString().slice(0, 10);
    target.deadline = deadline.querySelector('input').value.trim(); target.status = statusSelect.value;
    target.files ??= {};
    selectedFiles.forEach((file, i) => { if (!file) return; if (target.files[i]) URL.revokeObjectURL(target.files[i].url); target.files[i] = { name: file.name, url: URL.createObjectURL(file) }; });
    const [year, m] = target.date.split('-').map(Number); month = new Date(year, m - 1, 1); renderCalendar(); renderEvents();
    content.replaceChildren(elem('span', 'kicker', 'СОХРАНЕНО · ДЕМО'), elem('h2', '', 'Календарь обновлён'), elem('p', '', 'Новая дата, срок подачи и статус видны в календаре и карточке соревнования. Для размещения настоящего плана потребуется рабочая база и кабинет администратора.'));
    content.querySelector('h2').id = 'modalTitle';
  });
  content.append(form); showModal(content);
}
document.querySelector('#editCalendar').addEventListener('click', () => openEditor());

function field(label, name, placeholder, required = true) {
  const wrapper = elem('label', 'form-field', label);
  const input = elem('input'); input.name = name; input.placeholder = placeholder; input.required = required; input.maxLength = 90;
  wrapper.append(input); return wrapper;
}
function openApplication(event) {
  const content = elem('div'); content.append(elem('span', 'kicker', 'ДЕМОНСТРАЦИОННАЯ ФОРМА'), elem('h2', '', event.type === 'trip' ? 'Кандидат на поездку' : 'Заявка на соревнование'), elem('p', 'muted', `${event.title} · ${dateLabel(event.date)}`));
  const form = elem('form', 'demo-form');
  form.append(field('Условное обозначение спортсмена', 'athlete', 'Например: Спортсмен Д.'), field('Демонстрационная команда', 'team', 'Например: Команда 04'));
  if (event.type === 'trip') { const reason = elem('label', 'form-field', 'Обоснование поездки'); const area = elem('textarea'); area.name = 'reason'; area.required = true; area.maxLength = 300; area.placeholder = 'Укажите спортивную цель поездки (без персональных данных)'; reason.append(area); form.append(reason); }
  form.append(elem('p', 'notice', 'Используйте только вымышленные обозначения. Данные сохраняются лишь до обновления страницы и никому не отправляются.'));
  const send = elem('button', 'button button-blue', event.type === 'trip' ? 'Отправить на согласование' : 'Добавить демо-заявку'); send.type = 'submit'; form.append(send);
  form.addEventListener('submit', action => { action.preventDefault(); const data = new FormData(form); if (event.type === 'trip') { requests.push({ athlete: String(data.get('athlete')).trim(), event: event.id, reason: String(data.get('reason')).trim(), status: 'pending' }); renderRequests(); } content.replaceChildren(elem('span', 'kicker', 'ГОТОВО · ДЕМО'), elem('h2', '', event.type === 'trip' ? 'Кандидат добавлен' : 'Заявка добавлена'), elem('p', '', event.type === 'trip' ? 'Заявка появилась в демонстрационном кабинете администратора ниже на странице.' : 'Так выглядит подтверждение заявки. Реальная отправка и хранение данных выключены.')); content.querySelector('h2').id = 'modalTitle'; });
  content.append(form); showModal(content);
}
function renderRequests() {
  const list = document.querySelector('#tripRequests'); list.replaceChildren();
  requests.forEach((request, index) => {
    const row = elem('article', 'request-row'); const info = elem('div');
    info.append(elem('strong', '', request.athlete), elem('small', '', `${events.find(event => event.id === request.event)?.title || 'Предложенный выезд'} · ${request.reason}`));
    if (request.note) info.append(elem('small', 'admin-note', `Комментарий администратора: ${request.note}`));
    const right = elem('div', 'request-right'); right.append(elem('span', `request-status ${request.status}`, statusRequest[request.status]));
    const controls = elem('div', 'request-controls');
    [['approved', 'Утвердить'], ['clarification', 'Уточнить'], ['declined', 'Отказать']].forEach(([status, label]) => {
      const button = elem('button', `decision ${request.status === status ? 'selected' : ''}`, label); button.type = 'button';
      button.addEventListener('click', () => {
        if (status === 'clarification') {
          const note = window.prompt('Что нужно уточнить у представителя? (демо, без персональных данных)', request.note || 'Уточните спортивное обоснование поездки.');
          if (note === null) return;
          request.note = note.trim().slice(0, 240) || 'Уточните спортивное обоснование поездки.';
        } else request.note = '';
        requests[index].status = status; renderRequests();
      }); controls.append(button);
    });
    right.append(controls); row.append(info, right); list.append(row);
  });
  if (!requests.length) list.append(elem('p', 'empty', 'Список согласованных выездов пока не предоставлен; заявок нет.'));
  document.querySelector('.trip-board-head .status-badge').textContent = `${requests.filter(item => item.status === 'pending').length} требуют решения`;
}
function openSuggestion() {
  const content = elem('div'); content.append(elem('span', 'kicker', 'НОВЫЙ МАРШРУТ · ДЕМО'), elem('h2', '', 'Предложить выезд'), elem('p', 'muted', 'Покажите, какие соревнования представители могли бы предложить организатору.'));
  const form = elem('form', 'demo-form'); form.append(field('Название соревнования', 'title', 'Например: Открытый кубок регионов'), field('Город проведения', 'city', 'Например: Воронеж'));
  const date = elem('label', 'form-field', 'Планируемая дата'); const input = elem('input'); input.type = 'date'; input.name = 'date'; input.required = true; date.append(input); form.append(date, elem('p', 'notice', 'Предложение остаётся только в этом браузере до обновления страницы.'));
  const submit = elem('button', 'button button-blue', 'Отправить предложение'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', e => {
    e.preventDefault(); const data = new FormData(form);
    suggestions.push({ title: String(data.get('title')).trim(), city: String(data.get('city')).trim(), date: String(data.get('date')) });
    const list = document.querySelector('#suggestions'); list.replaceChildren(elem('h3', '', 'Предложения представителей'));
    suggestions.forEach(item => list.append(elem('p', 'suggestion-item', `${item.title} · ${item.city} · ${dateLabel(item.date)} · на рассмотрении`)));
    content.replaceChildren(elem('span', 'kicker', 'ГОТОВО · ДЕМО'), elem('h2', '', 'Предложение принято'), elem('p', '', 'Предложение появилось в разделе выездов. Для настоящей отправки организатору потребуется рабочая версия.'));
    content.querySelector('h2').id = 'modalTitle';
  });
  content.append(form); showModal(content);
}
document.querySelector('[data-action="suggest-trip"]').addEventListener('click', openSuggestion);

const coaches = [
  { name: 'Тренер А. А.', category: 'Высшая квалификационная категория', judge: 'Судья первой категории' },
  { name: 'Тренер Б. Б.', category: 'Первая квалификационная категория', judge: 'Судья второй категории' },
  { name: 'Тренер В. В.', category: 'Тренер · категория уточняется', judge: 'Судейская категория уточняется' },
];
coaches.forEach((coach, i) => { const card = elem('article', 'coach-card'); card.append(elem('span', 'coach-avatar', String(i + 1).padStart(2, '0')), elem('h3', '', coach.name), elem('p', '', coach.category), elem('small', '', coach.judge)); document.querySelector('#coachGrid').append(card); });
[
  ['Календарь стартов', '26 легкоатлетических соревнований перенесены из календарного плана ЛНР на 2026 год. Даты требуют подтверждения организатора перед поездкой.'],
  ['Выездные соревнования', 'Список поездок ожидается. Сверять регламенты, расписания и протоколы можно в официальном календаре ВФЛА.'],
  ['Результаты стартов', 'Подтверждённые результаты и протоколы появятся после предоставления документов; образец ниже не является реальным результатом.'],
].forEach(([title, text], i) => { const article = elem('article', 'news-item'); article.append(elem('span', 'news-count', String(i + 1).padStart(2, '0')), elem('h3', '', title), elem('p', '', text), elem('small', '', 'ПРИМЕР ПУБЛИКАЦИИ')); document.querySelector('#newsList').append(article); });

function renderProtocol(mode) {
  document.querySelector('#resultColumn').textContent = mode === 'final' ? 'Результат, с' : 'Результат';
  document.querySelector('#placeColumn').textContent = mode === 'final' ? 'Место' : 'Статус';
  document.querySelector('#protocolRows').replaceChildren(...demoRows.map(row => { const tr = elem('tr'); [row.number, row.name, row.team, mode === 'final' ? row.result : '—', mode === 'final' ? row.place : 'Ожидает'].forEach((value, index) => { const td = elem('td', index === 1 ? 'athlete-name' : index === 4 ? mode === 'final' ? 'place' : 'pending' : '', value); tr.append(td); }); return tr; }));
  document.querySelectorAll('[data-mode]').forEach(button => { button.classList.toggle('active', button.dataset.mode === mode); button.setAttribute('aria-pressed', String(button.dataset.mode === mode)); });
}
document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => renderProtocol(button.dataset.mode)));
document.querySelector('#printProtocol').addEventListener('click', () => window.print());
renderCalendar(); renderEvents(); renderRequests(); renderProtocol('work');
