'use strict';

// Source: LNR 2026 calendar plan, athletics section, worksheet rows 258–284.
// Dates in the travel proposal include arrival and departure days; participation is not confirmed.
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
const trips = [
  [5,'2026-01-30','2026-02-02','Международные соревнования «Битва полов»','Москва','Мужчины, женщины; до 16 лет'],
  [6,'2026-02-06','2026-02-08','Межрегиональные соревнования','Ставрополь','До 20 и до 18 лет'],
  [7,'2026-02-11','2026-02-16','Первенство России','Волгоград','До 23 лет'],
  [8,'2026-02-11','2026-02-16','Всероссийские соревнования','Волгоград','До 23 и до 18 лет'],
  [9,'2026-02-18','2026-02-23','Первенство России','Ульяновск','До 16 лет'],
  [10,'2026-01-28','2026-02-02','Первенство России','Тула','До 20 лет'],
  [11,'2026-01-28','2026-02-02','Всероссийские соревнования','Тула','До 20 и до 16 лет'],
  [12,'2026-03-06','2026-03-09','Всероссийские соревнования','Москва','Мужчины, женщины; до 20, до 18 и до 16 лет'],
  [13,'2026-05-14','2026-05-18','Чемпионат и первенство Южного федерального округа','Краснодар','До 23, до 20, до 18 и до 16 лет'],
  [14,'2026-06-19','2026-06-21','Всероссийские соревнования','Белая Калитва','До 20, до 18 и до 16 лет'],
  [15,'2026-06-24','2026-06-29','Первенство России','Казань','До 20 лет'],
  [16,'2026-06-24','2026-06-29','Всероссийские соревнования','Казань','До 16 лет'],
  [17,'2026-06-30','2026-07-04','Спартакиада учащихся Российской Федерации','Краснодар','До 18 лет'],
  [18,'2026-07-08','2026-07-13','Первенство России','Смоленск','До 23 лет'],
  [19,'2026-07-08','2026-07-13','Всероссийские соревнования','Смоленск','До 18 лет'],
  [20,'2026-07-15','2026-07-20','Первенство России','Краснодар','До 16 лет'],
  [21,'2026-07-15','2026-07-20','Всероссийские соревнования','Краснодар','До 18 лет'],
  [22,'2026-08-04','2026-08-08','Всероссийские соревнования','Новороссийск','До 18 и до 16 лет'],
  [23,'2026-11-18','2026-11-22','Всероссийские соревнования','Казань','До 20, до 18 и до 16 лет'],
  [24,'2026-11-25','2026-11-28','Межрегиональные соревнования','Орёл','До 18 и до 16 лет'],
  [25,'2026-11-27','2026-11-30','Всероссийские соревнования','Шахты','Мужчины, женщины; до 20 и до 18 лет'],
  [26,'2026-12-17','2026-12-20','Всероссийские соревнования','Москва','До 18 и до 16 лет'],
  [27,'2026-12-19','2026-12-21','Всероссийские соревнования','Волгоград','До 18 и до 16 лет'],
];
const today = new Date();
const todayISO = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
const events = [
  ...plan.map(([row,date,end,title,place,disciplines,ages]) => ({ id: `lnr-${row}`, row, date, end, title, type: 'local', place, disciplines, ages })),
  ...trips.map(([row,date,end,title,place,ages]) => ({ id: `trip-${row}`, row, date, end, title, type: 'trip', place, disciplines: 'Лёгкая атлетика · программа уточняется', ages })),
].sort((a,b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
events.forEach(event => { event.status = event.end < todayISO ? 'past' : 'planned'; });
function visualFor(event) {
  const isCross = /кросс/i.test(event.title);
  const isField = /четырёхбор|шиповка|прыж|метани/i.test(event.title);
  const accent = isCross ? '#d18b3b' : isField ? '#4e9a78' : '#2f78b4';
  const kind = isCross ? 'КРОСС' : isField ? 'ПОЛЕ' : 'ДОРОЖКА';
  const number = String(event.row).padStart(3, '0');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 360"><rect width="900" height="360" fill="#082f56"/><circle cx="740" cy="70" r="170" fill="${accent}" opacity=".22"/><path d="M0 290 C220 150 420 170 900 260 L900 360 L0 360Z" fill="${accent}" opacity=".9"/><path d="M0 315 C240 190 470 215 900 285" fill="none" stroke="#fff" stroke-width="8" opacity=".8"/><path d="M650 360 L740 205 L830 360" fill="none" stroke="#fff" stroke-width="4" opacity=".65"/><text x="46" y="74" fill="#fff" font-family="Arial,sans-serif" font-size="28" font-weight="700">${kind} · ЛНР</text><text x="46" y="121" fill="#fff" font-family="Arial,sans-serif" font-size="18">${event.title.slice(0, 45).replace(/&/g, '&amp;')}</text><text x="46" y="158" fill="#dcecf8" font-family="Arial,sans-serif" font-size="14">ЛУГАНСК · СТАРТ №${number}</text><text x="710" y="82" fill="#fff" font-family="Arial,sans-serif" font-size="36" font-weight="700">${event.date.slice(5).replace('-', '·')}</text></svg>`;
  return { image: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`, label: `Уникальная тематическая иллюстрация события «${event.title}»` };
}
const statusText = { planned: 'ПО ПЛАНУ', past: 'ДАТА ПРОШЛА' };
const vflaCalendarUrl = 'https://rusathletics.info/meropriyatiya/calendar/';
const verifiedResults = {
  'lnr-271': {
    source: 'ИП П кросс 16.04.2026 (2).pdf',
    athletes: [
      ['Короп Полина', 'кросс 1 км', '7', '3:31,2'],
      ['Котляр Анастасия', 'кросс 2 км', '2', '3:17,1'],
      ['Уразгильдеева Эльмира', 'кросс 1 км', '3', '3:20,9'],
    ],
  },
  'lnr-259': {
    source: 'ИП Ч кросс 16.04.2026.pdf',
    athletes: [
      ['Муравьёв Егор', 'кросс 5 км', '1', '16:03,2'],
      ['Копач Богдан', 'кросс 5 км', '5', '20:04,0'],
      ['Антипочкина Альбина', 'кросс 3 км', '5', '26:52,0'],
    ],
  },
};
const athleteLeaders = [
  { name: 'Половова Аделина', wins: 9, podiums: 10, grade: 'заявлена: II; в строке кросса: I', sources: 'Шиповка с. 25; Первенство ЛНР (февраль) с. 17, 19; Первенство ЛНР (апрель) с. 13, 15; предновогодние с. 17, 19; первенство по кроссу с. 5; Чемпионат ЛНР с. 10, 11' },
  { name: 'Троценко Михаил', wins: 9, podiums: 9, grade: 'заявлен: III; в таблицах: III, I и II юн.', sources: 'Первенство ЛНР (февраль) с. 34; Первенство ЛНР (апрель) с. 43, 50; предновогодние с. 10, 29; четырёхборье с. 34–37' },
  { name: 'Колодин Никита', wins: 8, podiums: 8, grade: 'заявлен: КМС; в таблицах: КМС и I', sources: 'Шиповка с. 16, 34; Первенство ЛНР (апрель) с. 31, 33; предновогодние с. 11, 14; Чемпионат ЛНР с. 23, 24' },
  { name: 'Шевченко Александра', wins: 7, podiums: 8, grade: 'заявлена: КМС; в таблицах: КМС, III и II', sources: 'Первенство ЛНР (февраль) с. 8, 27; Первенство ЛНР (апрель) с. 9, 53; предновогодние с. 9, 24; Чемпионат ЛНР с. 7, 8' },
  { name: 'Шатов Максим', wins: 5, podiums: 8, grade: 'заявлен: III / II юн.; в таблицах: III и юн. разряды', sources: 'Шиповка с. 27; Первенство ЛНР (февраль) с. 29; Первенство ЛНР (апрель) с. 50; предновогодние с. 21; четырёхборье с. 28, 29, 31, 33' },
];
let month = new Date(today.getFullYear(), today.getMonth(), 1);
let currentFilter = 'all';
let lastFocused = null;

function elem(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}
const requestStorageKey = 'startLnrAdminRequests';
function saveAdminRequest(type, data) {
  const requests = JSON.parse(localStorage.getItem(requestStorageKey) || '[]');
  requests.unshift({ id: `req-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, type, data, status: 'new', createdAt: new Date().toISOString() });
  localStorage.setItem(requestStorageKey, JSON.stringify(requests));
}
function dateLabel(value) {
  return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}
function rangeLabel(event) {
  return event.end === event.date ? dateLabel(event.date) : `${dateLabel(event.date)} — ${dateLabel(event.end)}`;
}
function showDayEvents(matches, iso) {
  if (matches.length === 1) { openEvent(matches[0]); return; }
  const content = elem('div'); content.append(elem('span', 'kicker', 'КАЛЕНДАРЬ СТАРТОВ'), elem('h2', '', `${dateLabel(iso)} · ${matches.length} событий`));
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
  const visible = events.filter(event => currentFilter === 'all' || event.status === currentFilter);
  visible.forEach(event => {
    const card = elem('article', `event-card ${event.type === 'trip' ? 'trip-card' : ''}`);
    const top = elem('div', 'event-top');
    top.append(elem('span', `tag tag-${event.status}`, `● ${statusText[event.status]}`), elem('span', 'event-index', event.type === 'trip' ? 'ВЫЕЗД · ПРЕДЛОЖЕНИЕ' : 'МЕСТНЫЙ'));
    if (event.type === 'local') {
      const visual = visualFor(event);
      const image = elem('img', 'event-photo', ''); image.src = visual.image; image.alt = `${visual.label}: ${event.title}`; image.loading = 'lazy';
      card.append(image, elem('span', 'photo-note', 'ТЕМАТИЧЕСКАЯ ИЛЛЮСТРАЦИЯ'));
    }
    card.append(top, elem('div', 'event-symbol', event.type === 'trip' ? '↗' : '◎'), elem('span', 'event-type', event.ages.toUpperCase()), elem('h3', '', event.title));
    const bottom = elem('div', 'event-bottom');
    bottom.append(elem('span', '', `${rangeLabel(event)} · ${event.place}`));
    const button = elem('button', 'text-button', 'Карточка ↗');
    button.type = 'button'; button.addEventListener('click', () => openEvent(event));
    bottom.append(button); card.append(bottom); grid.append(card);
  });
  if (!visible.length) grid.append(elem('p', 'empty', 'В этой категории пока нет стартов.'));
  grid.scrollLeft = 0;
  document.querySelector('#sliderCount').textContent = `${visible.length} событий`;
  const upcoming = events.find(event => event.end >= todayISO) || events.at(-1);
  document.querySelector('#nextEventTitle').textContent = upcoming.title;
  document.querySelector('#nextEventDate').textContent = rangeLabel(upcoming);
  document.querySelector('#nextEventButton').onclick = () => openEvent(upcoming);
  document.querySelector('#localCount').textContent = plan.length;
  document.querySelector('#tripCount').textContent = trips.length;
}
document.querySelector('#sliderPrev').addEventListener('click', () => document.querySelector('#eventGrid').scrollBy({ left: -document.querySelector('.event-card')?.getBoundingClientRect().width - 18 || -350, behavior: 'smooth' }));
document.querySelector('#sliderNext').addEventListener('click', () => document.querySelector('#eventGrid').scrollBy({ left: (document.querySelector('.event-card')?.getBoundingClientRect().width || 330) + 18, behavior: 'smooth' }));
function renderTrips() {
  const slider = document.querySelector('#tripSlider');
  if (!slider) return;
  slider.replaceChildren();
  trips.forEach(([row,date,end,title,place,ages]) => {
    const card = elem('article', 'trip-board trip-slide');
    const head = elem('div', 'trip-board-head');
    head.append(elem('strong', '', title), elem('span', 'status-badge', 'ПРЕДЛОЖЕНИЕ'));
    card.append(head, elem('p', 'trip-date', `${rangeLabel({ date, end })} · ${place}`), elem('small', '', `${ages} · строка ${row} в таблице предложений`));
    const controls = elem('div', 'trip-slide-actions');
    const check = elem('a', 'button button-outline', 'Проверить ВФЛА ↗'); check.href = vflaCalendarUrl; check.target = '_blank'; check.rel = 'noopener noreferrer';
    const suggest = elem('button', 'button button-blue', 'Предложить кандидата'); suggest.type = 'button'; suggest.addEventListener('click', () => openCandidateForm({ title, date, end, place, ages, type: 'trip', row }));
    controls.append(check, suggest); card.append(controls); slider.append(card);
  });
  document.querySelector('#tripSliderCount').textContent = `${trips.length} предложений`;
}
function openTripSuggestion() {
  const content = elem('div'); content.append(elem('span', 'kicker', 'НОВОЕ ПРЕДЛОЖЕНИЕ'), elem('h2', '', 'Предложить выезд'), elem('p', 'muted', 'Демо: предложение останется только в этом браузере. Администратор другого устройства его не увидит.'));
  const form = elem('form', 'demo-form');
  form.append(field('Название соревнования', 'title', 'Например, межрегиональные соревнования'), field('Город и место', 'place', 'Город проведения'), field('Даты', 'dates', 'Например, 12–15 июня 2026'), field('Кто предлагает', 'author', 'ФИО или организация'), field('Комментарий', 'comment', 'Возраст, дисциплины, ссылка на положение', false));
  const submit = elem('button', 'button button-blue', 'Подать предложение'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', event => { event.preventDefault(); saveAdminRequest('trip', Object.fromEntries(new FormData(form).entries())); submit.disabled = true; form.append(elem('p', 'notice', 'Сохранено в демо-очередь этого браузера. Для отправки реальному администратору требуется подключить сервер.')); });
  content.append(form); showModal(content);
}
document.querySelector('#tripPrev')?.addEventListener('click', () => document.querySelector('#tripSlider')?.scrollBy({ left: -360, behavior: 'smooth' }));
document.querySelector('#tripNext')?.addEventListener('click', () => document.querySelector('#tripSlider')?.scrollBy({ left: 360, behavior: 'smooth' }));
document.querySelector('#suggestTrip')?.addEventListener('click', openTripSuggestion);
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
  content.append(elem('span', 'kicker', event.type === 'trip' ? 'ПРЕДЛОЖЕНИЕ ПО ВЫЕЗДУ · 2026' : 'КАЛЕНДАРНЫЙ ПЛАН ЛНР · 2026'), elem('h2', '', event.title));
  const details = elem('div', 'modal-details');
  addLine(details, event.type === 'trip' ? 'Даты с приездом и отъездом' : 'Дата по плану', rangeLabel(event));
  addLine(details, 'Место', event.place); addLine(details, 'Возрастные группы', event.ages); addLine(details, 'Дисциплины', event.disciplines);
  addLine(details, 'Источник', event.type === 'trip' ? `Таблица предложений по выездным соревнованиям на 2026 год, строка ${event.row}. Участие не подтверждено.` : `Календарный план спортивных мероприятий ЛНР на 2026 год, раздел «Лёгкая атлетика», строка ${event.row}.`);
  content.append(details);
  if (event.type === 'trip' && event.status === 'planned') {
    const direct = elem('div', 'detail-panel');
    direct.append(elem('h3', '', 'Проверить и предложить'), elem('p', '', 'Для будущего выезда вкладки не показываем: сначала проверьте официальную карточку ВФЛА, затем предложите спортсмена и виды.'), (() => { const link = elem('a', 'button button-blue', 'Открыть ВФЛА ↗'); link.href = vflaCalendarUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; return link; })());
    const candidate = elem('button', 'button button-outline', 'Предложить кандидата →'); candidate.type = 'button'; candidate.addEventListener('click', () => openCandidateForm(event)); direct.append(candidate);
    content.append(direct, elem('p', 'notice', 'Состав поездки, допуск и результаты не подтверждены.')); showModal(content); return;
  }
  const tabs = elem('div', 'detail-tabs');
  const panel = elem('div', 'detail-panel');
  const result = verifiedResults[event.id];
  const sections = [
    ['Регламент', 'Регламент', 'Отдельный утверждённый регламент не предоставлен. План не заменяет положение о соревновании.'],
    ['Расписание', 'Расписание', 'Почасовое расписание не предоставлено. Перед поездкой сверьте сроки с организатором.'],
    ['Протоколы', 'Итоговые протоколы', result ? `Рабочий PDF: ${result.source}. Данные ниже ограничены строками из этого протокола.` : 'Для этого события отдельный итоговый протокол в предоставленных файлах не найден.'],
  ];
  if (event.type === 'trip' && event.status === 'past') sections.push(['Спортсмены', 'Наши спортсмены', 'Для этого выезда пока нет сверенного протокола ВФЛА с участниками из ЛНР. Не показываем неподтверждённые ФИО.']);
  if (event.type === 'trip' && event.status === 'planned') sections.splice(2, 1, ['ВФЛА', 'Проверить на ВФЛА', 'Соревнование находится в предложениях по выездам. Проверьте официальную карточку и условия участия на сайте ВФЛА перед подачей кандидата.']);
  if (event.type === 'trip' && event.status === 'planned') sections.push(['Кандидат', 'Предложить спортсмена', 'Оставьте демонстрационные данные. Заявка сохранится только в браузере и появится в локальной демо-очереди.']);
  function select(index) {
    [...tabs.children].forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', String(i === index)); });
    panel.replaceChildren(elem('h3', '', sections[index][1]), elem('p', '', sections[index][2]));
    if (index === 2 && !(event.type === 'trip' && event.status === 'planned')) { const link = elem('a', 'button button-blue', 'Перейти к списку протоколов ↗'); link.href = '#protocols'; link.addEventListener('click', closeModal); panel.append(link); }
    if (event.type === 'trip' && event.status === 'planned' && index === 2) { const link = elem('a', 'button button-blue', 'Открыть карточку ВФЛА ↗'); link.href = vflaCalendarUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; panel.append(link); }
    if (result && index === 2) {
      const table = elem('div', 'result-list');
      result.athletes.forEach(([name, discipline, place, score]) => { const row = elem('div', 'result-row'); row.append(elem('strong', '', name), elem('span', '', `${discipline} · ${score}`), elem('b', 'place', `${place} место`)); table.append(row); });
      panel.append(table, elem('small', 'muted', `Источник: ${result.source}`));
    }
    if (event.type === 'trip' && event.status === 'planned' && index === sections.length - 1) { const button = elem('button', 'button button-blue', 'Открыть форму кандидата →'); button.type = 'button'; button.addEventListener('click', () => openCandidateForm(event)); panel.append(button); }
  }
  sections.forEach(([label], index) => { const button = elem('button', '', label); button.type = 'button'; button.addEventListener('click', () => select(index)); tabs.append(button); });
  content.append(tabs, panel); select(0);
  if (event.type === 'local' && event.status === 'planned') {
    const apply = elem('button', 'button button-blue', 'Подать заявку для представителей →');
    apply.type = 'button'; apply.addEventListener('click', () => openRepresentativeForm(event));
    content.append(apply);
  }
  content.append(elem('p', 'notice', 'Изменение сведений и публикация документов доступны только владельцу сайта через исходные файлы проекта.')); showModal(content);
}

function field(label, name, placeholder, required = true) {
  const wrapper = elem('label', 'form-field', label);
  const input = elem('input'); input.name = name; input.placeholder = placeholder; input.required = required; input.maxLength = 90;
  wrapper.append(input); return wrapper;
}
function openCoachForm() {
  const content = elem('div');
  content.append(elem('span', 'kicker', 'ЗАЯВКА НА СОГЛАСОВАНИЕ'), elem('h2', '', 'Я новый тренер'), elem('p', 'muted', 'Демо: заявку увидят только на этом устройстве. Для отправки реальному администратору требуется сервер; пока не вводите реальные персональные данные.'));
  const form = elem('form', 'demo-form');
  form.append(field('Фамилия, имя, отчество', 'name', 'Укажите полное имя'), field('Город', 'city', 'Например, Луганск'), field('Квалификация', 'category', 'Укажите категорию'), field('Судейская категория (если есть)', 'judge', 'Необязательно', false));
  const submit = elem('button', 'button button-blue', 'Подать на добавление'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', action => {
    action.preventDefault();
    const data = new FormData(form);
    saveAdminRequest('coach', Object.fromEntries(data.entries()));
    submit.disabled = true;
    const notice = elem('p', 'notice', 'Заявка сохранена в локальной демо-очереди. Откройте страницу администратора в этом же браузере, чтобы проверить и утвердить карточку. На другие устройства данные не передаются.');
    form.append(notice);
  });
  content.append(form); showModal(content);
}
document.querySelector('#newCoach').addEventListener('click', openCoachForm);
function openRepresentativeForm(event) {
  const content = elem('div');
  content.append(elem('span', 'kicker', 'ЗАЯВКА НА МЕСТНЫЙ СТАРТ'), elem('h2', '', event.title), elem('p', 'muted', 'Демо: заявка останется только в этом браузере и не попадёт организатору. Не вводите реальные персональные данные. Сроки подачи и условия участия уточняйте у организатора.'));
  const form = elem('form', 'demo-form');
  form.append(field('Команда (организация)', 'team', 'Название команды'), field('ФИО представителя', 'name', 'Фамилия, имя, отчество'));
  const athletes = elem('div', 'athlete-fields');
  function addAthlete() {
    const athlete = elem('fieldset', 'athlete-entry');
    athlete.append(elem('legend', '', `Спортсмен ${athletes.children.length + 1}`), field('ФИО спортсмена', 'athleteName', 'Фамилия, имя, отчество'));
    const birth = field('Дата рождения', 'birthDate', ''); birth.querySelector('input').type = 'date'; birth.querySelector('input').max = todayISO; athlete.append(birth);
    athlete.append(field('Разряд', 'grade', 'Например, I юн.'));
    const events = elem('div', 'athlete-events');
    function addEvent() {
      const row = elem('div', 'athlete-event-row');
      row.append(field('Вид программы', 'discipline', 'Например, бег 100 м'));
      const remove = elem('button', 'text-button', 'Удалить вид'); remove.type = 'button';
      remove.addEventListener('click', () => { if (events.children.length > 1) row.remove(); });
      row.append(remove); events.append(row);
    }
    addEvent(); athlete.append(events);
    const moreEvents = elem('button', 'button button-outline', '+ Добавить вид'); moreEvents.type = 'button'; moreEvents.addEventListener('click', addEvent); athlete.append(moreEvents);
    const removeAthlete = elem('button', 'text-button', 'Удалить спортсмена'); removeAthlete.type = 'button';
    removeAthlete.addEventListener('click', () => { if (athletes.children.length > 1) { athlete.remove(); [...athletes.children].forEach((item, index) => { item.querySelector('legend').textContent = `Спортсмен ${index + 1}`; }); } });
    athlete.append(removeAthlete); athletes.append(athlete);
  }
  addAthlete(); form.append(athletes);
  const moreAthletes = elem('button', 'button button-outline', '+ Добавить спортсмена'); moreAthletes.type = 'button'; moreAthletes.addEventListener('click', addAthlete); form.append(moreAthletes);
  const submit = elem('button', 'button button-blue', 'Сохранить заявку'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', action => {
    action.preventDefault();
    const athletesData = [...athletes.children].map(athlete => ({
      name: athlete.querySelector('[name="athleteName"]').value.trim(),
      birthDate: athlete.querySelector('[name="birthDate"]').value,
      grade: athlete.querySelector('[name="grade"]').value.trim(),
      events: [...athlete.querySelectorAll('[name="discipline"]')].map(input => input.value.trim()),
    }));
    saveAdminRequest('representative', { event: event.title, date: rangeLabel(event), team: form.querySelector('[name="team"]').value.trim(), name: form.querySelector('[name="name"]').value.trim(), athletes: athletesData });
    submit.disabled = true;
    form.append(elem('p', 'notice', 'Заявка сохранена в локальной демо-очереди. Посмотреть её можно на странице администратора в этом же браузере. Организатор заявку не получил.'));
  });
  content.append(form); showModal(content);
}
function openCandidateForm(event) {
  const content = elem('div'); content.append(elem('span', 'kicker', 'КАНДИДАТ НА ВЫЕЗД'), elem('h2', '', event.title), elem('p', 'muted', 'Демо: кандидат сохранится только в этом браузере; на другое устройство заявка не отправится.'));
  const form = elem('form', 'demo-form');
  form.append(field('Фамилия, имя, отчество', 'name', 'ФИО спортсмена'), field('Виды', 'events', 'Например, 100 м, прыжок в длину'));
  const submit = elem('button', 'button button-blue', 'Сохранить на согласование'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', action => {
    action.preventDefault();
    saveAdminRequest('candidate', { event: event.title, ...Object.fromEntries(new FormData(form).entries()) });
    submit.disabled = true;
    form.append(elem('p', 'notice', 'Сохранено в локальную демо-очередь. Решение можно отметить на странице администратора в этом же браузере.'));
  });
  content.append(form); showModal(content);
}
const coaches = [
  ['АК', 'Анна К.', 'Беговые дисциплины', 'Демонстрационная иллюстрация · сведения не подтверждены', '#d9eef8', '#2378b8'],
  ['МС', 'Михаил С.', 'Прыжки и многоборье', 'Демонстрационная иллюстрация · сведения не подтверждены', '#e9e2f7', '#7451a9'],
  ['ЕЛ', 'Елена Л.', 'Подготовка юных спортсменов', 'Демонстрационная иллюстрация · сведения не подтверждены', '#f7e6d5', '#bc6b35'],
];
function coachPortrait(initials, background, accent) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="18" fill="${background}"/><circle cx="80" cy="64" r="30" fill="${accent}" opacity=".88"/><path d="M34 146c5-35 23-52 46-52s41 17 46 52" fill="${accent}" opacity=".88"/><path d="M55 59c4-20 15-30 28-30 16 0 25 11 27 30-13-8-39-8-55 0z" fill="#173d59"/><text x="80" y="145" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#fff">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
coaches.forEach(([initials, name, direction, note, background, accent]) => {
  const card = elem('article', 'coach-card');
  const avatar = elem('img', 'coach-avatar', ''); avatar.src = coachPortrait(initials, background, accent); avatar.alt = `Сгенерированный портрет для демонстрационной карточки ${name}`;
  card.append(avatar, elem('span', 'coach-demo-label', 'ПРИМЕР ОФОРМЛЕНИЯ'), elem('h3', '', name), elem('p', '', direction), elem('small', '', note));
  document.querySelector('#coachGrid').append(card);
});
JSON.parse(localStorage.getItem(requestStorageKey) || '[]').filter(request => request.type === 'coach' && request.status === 'approved').forEach(request => {
  const data = request.data; const initials = (data.name.match(/[А-ЯЁA-Z]/gi) || ['?']).slice(0, 2).join('').toUpperCase();
  const card = elem('article', 'coach-card approved-coach');
  const avatar = elem('img', 'coach-avatar', ''); avatar.src = coachPortrait(initials, '#e6f2e8', '#2d8d68'); avatar.alt = `Портрет карточки тренера ${data.name}`;
  card.append(avatar, elem('span', 'coach-demo-label', 'ОДОБРЕНО В ДЕМО-ОЧЕРЕДИ'), elem('h3', '', data.name), elem('p', '', data.category), elem('small', '', `${data.city} · судейская категория: ${data.judge || 'не указана'}`));
  document.querySelector('#coachGrid').append(card);
});
const protocols = [
  ['«Шиповка юных» · 28–29 января 2026', 'ИП 28-29.01.2026 Шиповка юных.pdf'],
  ['Первенство ЛНР · 4–5 февраля 2026', 'ИП П ЛНР 04-05.02.2026.pdf'],
  ['Кросс · 16 апреля 2026', 'ИП Ч кросс 16.04.2026.pdf / ИП П кросс 16.04.2026 (2).pdf'],
  ['Первенство ЛНР · 29–30 апреля 2026', 'ИП П ЛНР ДО 16_18_20_23 ЛЕТ (29-30.04.2026).pdf'],
  ['Чемпионат ЛНР · 20–21 мая 2026', 'ИП Ч ЛНР 20-21.05.2026.pdf'],
  ['Четырёхборье · 10–11 июня 2026', 'ИП РС по ла 4-борью 10-11.06.2026.pdf'],
  ['Предновогодние старты · 24–25 декабря 2025', 'ИП предновогодние 24-25.12.2025.pdf'],
];
protocols.forEach(([title, file]) => {
  const item = elem('article', 'protocol-item');
  item.append(elem('span', 'protocol-mark', 'PDF'), elem('div', '', undefined));
  const text = item.children[1];
  text.append(elem('strong', '', title), elem('small', '', `Рабочий файл: ${file}`));
  const actions = elem('div', 'protocol-actions');
  actions.append(elem('span', 'protocol-status', 'Рабочий PDF · нужна сверка'));
  item.append(actions);
  document.querySelector('#protocolList').append(item);
});
const publicNews = [
  ['23 сентября 2026', 'Новые дисциплины лёгкой атлетики включены в реестр', 'ВФЛА сообщает о включении в реестр шоссейного бега на 1 милю, 5 и 10 км, дисциплин в помещении, легкоатлетического двоеборья и других видов.', 'https://rusathletics.info/news/20544-novyie-discziplinyi-lyogkoj-atletiki-vklyuchenyi-vo-vserossijskij-reestr-vidov-sporta/'],
  ['22 сентября 2026', 'В Москве анонсирован «Розовый забег»', 'По сообщению ВФЛА, 3 октября на Университетской площади Москвы запланирован забег на 3 км в поддержку женского здоровья.', 'https://rusathletics.info/news/20543-v-moskve-projdet-rozovyij-zabeg-v-podderzhku-zhenskogo-zdorovya/'],
  ['18 сентября 2026', 'Конкурс организаторов чемпионатов России — 2027', 'ВФЛА объявила конкурс на проведение чемпионатов России по ряду внестадионных дисциплин, включая шоссейный бег и кросс.', 'https://rusathletics.info/news/20540-vfla-obyavlyaet-konkurs-na-provedenie-chempionatov-rossii-2027-po-vnestadionnyim-discziplinam/'],
];
publicNews.forEach(([date, title, text, url], i) => {
  const article = elem('article', 'news-item');
  const source = elem('a', 'news-source', 'Читать на сайте ВФЛА ↗'); source.href = url; source.target = '_blank'; source.rel = 'noopener noreferrer';
  article.append(elem('span', 'news-count', String(i + 1).padStart(2, '0')), elem('h3', '', title), elem('p', '', text), elem('small', '', `ВФЛА · ${date}`), source);
  document.querySelector('#newsList').append(article);
});
athleteLeaders.forEach(({ name, wins, podiums, grade, sources }, i) => { const row = elem('article', 'ranking-row'); row.append(elem('span', 'ranking-number', String(i + 1).padStart(2, '0')), elem('strong', '', name), elem('span', '', `Победы: ${wins} · Призовые места: ${podiums} · ${grade}`), elem('small', '', `Рабочие PDF, страницы: ${sources}`)); document.querySelector('#rankingList')?.append(row); });
renderCalendar(); renderEvents(); renderTrips();
