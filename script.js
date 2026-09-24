'use strict';

// All people and competition details in this preview are fictional.
const events = [
  { id: 'local-0', date: '2026-04-18', title: 'Весенний кубок Луганска', type: 'local', status: 'closed', place: 'Луганск · манеж', disciplines: 'Бег · прыжки', deadline: '10 апреля 2026' },
  { id: 'local-1', date: '2026-05-16', title: 'Открытый старт по лёгкой атлетике', type: 'local', status: 'open', place: 'Луганск · стадион', disciplines: 'Бег · прыжки · метания', deadline: '12 мая 2026' },
  { id: 'trip-1', date: '2026-05-23', title: 'Межрегиональный турнир', type: 'trip', status: 'open', place: 'Выезд · Ростов-на-Дону', disciplines: 'Бег · эстафета', deadline: '15 мая 2026' },
  { id: 'local-2', date: '2026-06-06', title: 'Первенство юных атлетов', type: 'local', status: 'open', place: 'Луганск · стадион', disciplines: 'Многоборье · бег', deadline: '29 мая 2026' },
  { id: 'trip-2', date: '2026-06-20', title: 'Летний кубок регионов', type: 'trip', status: 'planned', place: 'Выезд · Воронеж', disciplines: 'Бег · прыжки', deadline: '10 июня 2026' },
  { id: 'local-3', date: '2026-07-11', title: 'Летние старты Республики', type: 'local', status: 'planned', place: 'Луганск · стадион', disciplines: 'Бег · метания', deadline: '03 июля 2026' },
  { id: 'trip-3', date: '2026-08-08', title: 'Открытые соревнования по бегу', type: 'trip', status: 'planned', place: 'Выезд · Белгород', disciplines: 'Бег 100–1500 м', deadline: '28 июля 2026' },
  { id: 'local-4', date: '2026-08-22', title: 'Кубок спортивных школ', type: 'local', status: 'planned', place: 'Луганск · стадион', disciplines: 'Многоборье', deadline: '14 августа 2026' },
  { id: 'local-5', date: '2026-09-12', title: 'Осеннее первенство Республики', type: 'local', status: 'planned', place: 'Луганск · стадион', disciplines: 'Бег · прыжки', deadline: '04 сентября 2026' },
  { id: 'trip-4', date: '2026-10-03', title: 'Кубок соседних регионов', type: 'trip', status: 'planned', place: 'Выезд · Волгоград', disciplines: 'Бег · эстафета', deadline: '24 сентября 2026' },
  { id: 'local-6', date: '2026-11-14', title: 'Осенний кубок Луганска', type: 'local', status: 'planned', place: 'Луганск · манеж', disciplines: 'Бег · прыжки', deadline: '06 ноября 2026' },
  { id: 'local-7', date: '2026-12-12', title: 'Зимние старты атлетов', type: 'local', status: 'planned', place: 'Луганск · манеж', disciplines: 'Бег · многоборье', deadline: '04 декабря 2026' },
];
const demoRows = [
  { number: '01', name: 'Спортсмен А.', team: 'Команда 01', result: '12,40', place: '1' },
  { number: '02', name: 'Спортсмен Б.', team: 'Команда 02', result: '12,85', place: '2' },
  { number: '03', name: 'Спортсмен В.', team: 'Команда 03', result: '13,10', place: '3' },
  { number: '04', name: 'Спортсмен Г.', team: 'Команда 01', result: '—', place: '—' },
];
const requests = [
  { athlete: 'Претендент А.', event: 'trip-1', reason: 'Опыт выступления на межрегиональном старте', status: 'pending' },
  { athlete: 'Претендент Б.', event: 'trip-1', reason: 'Выполнен контрольный норматив', status: 'pending' },
];
const suggestions = [];
const statusText = { open: 'ПРИЁМ ОТКРЫТ', planned: 'ЗАПЛАНИРОВАНО', closed: 'ЗАВЕРШЕНО' };
const statusRequest = { pending: 'Ожидает решения', approved: 'Утверждён', declined: 'Отказано', clarification: 'Нужно уточнение' };
let month = new Date(2026, 4, 1);
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
function renderCalendar() {
  document.querySelector('#monthTitle').textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(month);
  const grid = document.querySelector('#calendarGrid');
  grid.replaceChildren();
  const start = (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  for (let i = 0; i < start; i++) grid.append(elem('span', 'day-blank'));
  for (let i = 1; i <= days; i++) {
    const iso = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const matches = events.filter(event => event.date === iso);
    const day = elem(matches.length ? 'button' : 'span', `calendar-day ${matches.length ? `has-event ${matches[0].type}` : ''}`);
    if (matches.length) {
      day.type = 'button';
      day.title = matches.map(event => event.title).join(', ');
      day.setAttribute('aria-label', `${dateLabel(iso)}: ${matches.map(event => event.title).join(', ')}`);
      day.addEventListener('click', () => openEvent(matches[0]));
    }
    day.append(elem('strong', '', String(i)));
    if (matches.length) day.append(elem('small', '', matches[0].type === 'trip' ? 'Выезд' : 'Старт'));
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
    card.append(top, elem('div', 'event-symbol', event.type === 'trip' ? '↗' : '◎'), elem('span', 'event-type', event.disciplines.toUpperCase()), elem('h3', '', event.title));
    const bottom = elem('div', 'event-bottom');
    bottom.append(elem('span', '', `${dateLabel(event.date)} · ${event.place}`));
    const button = elem('button', 'text-button', 'Карточка ↗');
    button.type = 'button'; button.addEventListener('click', () => openEvent(event));
    bottom.append(button); card.append(bottom); grid.append(card);
  });
  if (!visible.length) grid.append(elem('p', 'empty', 'В этой категории пока нет стартов.'));
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
  content.append(elem('span', 'kicker', event.type === 'trip' ? 'ВЫЕЗДНОЕ СОРЕВНОВАНИЕ · ДЕМО' : 'СОРЕВНОВАНИЕ ЛНР · ДЕМО'), elem('h2', '', event.title));
  const details = elem('div', 'modal-details');
  addLine(details, 'Дата', dateLabel(event.date)); addLine(details, 'Место', event.place); addLine(details, 'Дисциплины', event.disciplines);
  addLine(details, 'Приём заявок', event.status === 'closed' ? 'Завершён' : event.status === 'planned' ? 'Откроется позднее' : `До ${event.deadline}`);
  content.append(details);
  const tabs = elem('div', 'detail-tabs');
  const panel = elem('div', 'detail-panel');
  const sections = [
    ['Регламент', 'Демонстрационный регламент', `Дисциплины: ${event.disciplines}. Формат участия и возрастные группы будут уточнены организатором. Для рабочего регламента здесь будет ссылка на PDF.`],
    ['Расписание', 'Расписание соревнования', '09:00 — регистрация команд; 10:00 — открытие; 10:30 — начало стартов; 15:00 — подведение итогов. Время демонстрационное.'],
    ['Протоколы', 'Протоколы и результаты', event.status === 'closed' ? 'Итоговый демонстрационный протокол доступен для просмотра ниже.' : 'Итоговые протоколы появятся после завершения соревнования.'],
  ];
  function select(index) {
    [...tabs.children].forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', String(i === index)); });
    panel.replaceChildren(elem('h3', '', sections[index][1]), elem('p', '', sections[index][2]));
    const file = event.files?.[index];
    if (file) { const link = elem('a', 'text-button', `Открыть PDF: ${file.name} ↗`); link.href = file.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; panel.append(link); }
    if (index === 2 && event.status === 'closed') { const link = elem('a', 'text-button', 'Посмотреть образец протокола ↗'); link.href = '#preview'; link.addEventListener('click', closeModal); panel.append(link); }
  }
  sections.forEach(([label], index) => { const button = elem('button', '', label); button.type = 'button'; button.addEventListener('click', () => select(index)); tabs.append(button); });
  content.append(tabs, panel); select(0);
  const actions = elem('div', 'modal-actions');
  if (event.status === 'open') {
    const apply = elem('button', 'button button-blue', event.type === 'trip' ? 'Предложить кандидата ↗' : 'Подать демо-заявку ↗');
    apply.addEventListener('click', () => openApplication(event)); actions.append(apply);
  } else actions.append(elem('p', 'notice', event.status === 'closed' ? 'Приём заявок закрыт.' : 'Приём заявок ещё не открыт.'));
  const edit = elem('button', 'text-button', 'Изменить как администратор · демо ↗'); edit.type = 'button'; edit.addEventListener('click', () => openEditor(event)); actions.append(edit);
  content.append(actions); showModal(content);
}
document.querySelectorAll('[data-open-event]').forEach(button => button.addEventListener('click', () => openEvent(events.find(event => event.id === button.dataset.openEvent))));

function openEditor(selected = events[1]) {
  const content = elem('div');
  content.append(elem('span', 'kicker', 'КАБИНЕТ АДМИНИСТРАТОРА · ДЕМО'), elem('h2', '', 'Редактировать календарный план'));
  const form = elem('form', 'demo-form');
  const choose = elem('label', 'form-field', 'Соревнование'); const select = elem('select'); select.name = 'event';
  events.forEach(event => { const option = elem('option', '', event.title); option.value = event.id; select.append(option); });
  select.value = selected.id; choose.append(select); form.append(choose);
  const date = elem('label', 'form-field', 'Дата проведения'); const dateInput = elem('input'); dateInput.name = 'date'; dateInput.type = 'date'; dateInput.required = true; date.append(dateInput);
  const deadline = field('Срок приёма заявок', 'deadline', 'Например: 12 мая 2026');
  const status = elem('label', 'form-field', 'Статус приёма'); const statusSelect = elem('select'); statusSelect.name = 'status';
  [['planned', 'Запланировано'], ['open', 'Приём открыт'], ['closed', 'Завершено']].forEach(([value, label]) => { const option = elem('option', '', label); option.value = value; statusSelect.append(option); }); status.append(statusSelect);
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
    target.date = dateInput.value; target.deadline = deadline.querySelector('input').value.trim(); target.status = statusSelect.value;
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
    info.append(elem('strong', '', request.athlete), elem('small', '', `${events.find(event => event.id === request.event).title} · ${request.reason}`));
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
  ['Календарь стартов', 'План соревнований Республики представлен в календаре. Откройте дату для просмотра регламента и расписания.'],
  ['Выездные соревнования', 'Планируемые поездки отмечены оранжевым цветом. Кандидатов можно направить на рассмотрение организатору.'],
  ['Результаты стартов', 'После проведения соревнований в карточках появятся итоговые протоколы и результаты.'],
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
