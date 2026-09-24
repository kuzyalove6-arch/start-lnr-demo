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
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 360"><rect width="900" height="360" fill="#082f56"/><circle cx="740" cy="70" r="170" fill="${accent}" opacity=".22"/><path d="M0 290 C220 150 420 170 900 260 L900 360 L0 360Z" fill="${accent}" opacity=".9"/><path d="M0 315 C240 190 470 215 900 285" fill="none" stroke="#fff" stroke-width="8" opacity=".8"/><text x="46" y="86" fill="#fff" font-family="Arial,sans-serif" font-size="28" font-weight="700">${kind}</text><text x="46" y="130" fill="#fff" font-family="Arial,sans-serif" font-size="18">${event.title.slice(0, 42).replace(/&/g, '&amp;')}</text><text x="46" y="166" fill="#dcecf8" font-family="Arial,sans-serif" font-size="14">СТАРТ ЛНР · 2026</text></svg>`;
  return { image: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`, label: `Иллюстрация для события «${event.title}»` };
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
  ['Муравьёв Егор', '1 место', 'кросс 5 км · 16:03,2', 'ИП Ч кросс 16.04.2026.pdf'],
  ['Котляр Анастасия', '2 место', 'кросс · 3:17,1', 'ИП П кросс 16.04.2026 (2).pdf'],
  ['Уразгильдеева Эльмира', '3 место', 'кросс 1 км · 3:20,9', 'ИП П кросс 16.04.2026 (2).pdf'],
  ['Короп Полина', '7 место', 'кросс 1 км · 3:31,2', 'ИП П кросс 16.04.2026 (2).pdf'],
  ['Копач Богдан', '5 место', 'кросс 5 км · 20:04,0', 'ИП Ч кросс 16.04.2026.pdf'],
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
    if (event.status === 'past' && event.type === 'local') {
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
    ['Протоколы', 'Итоговые протоколы', result ? `Сверенный рабочий PDF: ${result.source}. Данные ниже ограничены строками из этого протокола.` : 'Публикации с файлами в MAX доступны в разделе «Итоговые протоколы», но содержание вложений пока не подтверждено.'],
  ];
  if (event.type === 'trip' && event.status === 'past') sections.push(['Спортсмены', 'Наши спортсмены', 'Для этого выезда пока нет сверенного протокола ВФЛА с участниками из ЛНР. Не показываем неподтверждённые ФИО.']);
  if (event.type === 'trip' && event.status === 'planned') sections.splice(2, 1, ['ВФЛА', 'Проверить на ВФЛА', 'Соревнование находится в предложениях по выездам. Проверьте официальную карточку и условия участия на сайте ВФЛА перед подачей кандидата.']);
  if (event.type === 'trip' && event.status === 'planned') sections.push(['Кандидат', 'Предложить спортсмена', 'Оставьте ФИО и виды. Заявка сохранится только в этом демонстрационном окне и получит статус для администратора.']);
  function select(index) {
    [...tabs.children].forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', String(i === index)); });
    panel.replaceChildren(elem('h3', '', sections[index][1]), elem('p', '', sections[index][2]));
    if (index === 2 && !(event.type === 'trip' && event.status === 'planned')) { const link = elem('a', 'button button-blue', 'Перейти к публикациям MAX ↗'); link.href = '#protocols'; link.addEventListener('click', closeModal); panel.append(link); }
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
  content.append(elem('p', 'notice', 'Изменение сведений и публикация документов доступны только владельцу сайта через исходные файлы проекта.')); showModal(content);
}

function field(label, name, placeholder, required = true) {
  const wrapper = elem('label', 'form-field', label);
  const input = elem('input'); input.name = name; input.placeholder = placeholder; input.required = required; input.maxLength = 90;
  wrapper.append(input); return wrapper;
}
function openCoachForm() {
  const content = elem('div');
  content.append(elem('span', 'kicker', 'ЗАЯВКА НА СОГЛАСОВАНИЕ'), elem('h2', '', 'Я новый тренер'), elem('p', 'muted', 'Заполните форму и сохраните черновик. Данные остаются на вашем устройстве; на сайт они не отправляются. Карточку сможет добавить только администратор после проверки.'));
  const form = elem('form', 'demo-form');
  form.append(field('Фамилия, имя, отчество', 'name', 'Укажите полное имя'), field('Город', 'city', 'Например, Луганск'), field('Квалификация', 'category', 'Укажите категорию'), field('Судейская категория (если есть)', 'judge', 'Необязательно', false));
  const submit = elem('button', 'button button-blue', 'Скачать черновик заявки'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', action => {
    action.preventDefault();
    const data = new FormData(form);
    const text = `Заявка на добавление карточки тренера\nФИО: ${data.get('name')}\nГород: ${data.get('city')}\nКвалификация: ${data.get('category')}\nСудейская категория: ${data.get('judge') || 'не указана'}\n\nСтатус: на проверке администратора.\n`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = elem('a'); link.href = url; link.download = 'zayavka-trener.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 60000);
    const notice = elem('p', 'notice', 'Черновик скачан на ваше устройство. Отправьте его администратору по согласованному каналу. Форма не отправляет сведения автоматически и не создаёт публичную карточку.');
    form.append(notice);
  });
  content.append(form); showModal(content);
}
document.querySelector('#newCoach').addEventListener('click', openCoachForm);
function openCandidateForm(event) {
  const content = elem('div'); content.append(elem('span', 'kicker', 'КАНДИДАТ НА ВЫЕЗД'), elem('h2', '', event.title), elem('p', 'muted', 'Демонстрационная заявка. Она не отправляется организаторам автоматически.'));
  const form = elem('form', 'demo-form');
  form.append(field('Фамилия, имя, отчество', 'name', 'ФИО спортсмена'), field('Виды', 'events', 'Например, 100 м, прыжок в длину'));
  const submit = elem('button', 'button button-blue', 'Сохранить на согласование'); submit.type = 'submit'; form.append(submit);
  form.addEventListener('submit', action => {
    action.preventDefault();
    submit.disabled = true;
    const status = elem('p', 'notice', 'Статус: на проверке.'); form.append(status);
    const controls = elem('div', 'request-controls');
    [['Согласовать', 'Согласовано'], ['Отклонить', 'Отклонено'], ['На уточнение', 'Нужно уточнение']].forEach(([label, next]) => { const button = elem('button', 'button button-outline', label); button.type = 'button'; button.addEventListener('click', () => { status.textContent = `Статус: ${next}.`; controls.querySelectorAll('button').forEach(item => { item.disabled = true; }); }); controls.append(button); });
    form.append(controls);
  });
  content.append(form); showModal(content);
}
const coaches = [
  ['АК', 'Анна К.', 'Беговые дисциплины', 'Демонстрационная карточка · сведения не подтверждены'],
  ['МС', 'Михаил С.', 'Прыжки и многоборье', 'Демонстрационная карточка · сведения не подтверждены'],
  ['ЕЛ', 'Елена Л.', 'Подготовка юных спортсменов', 'Демонстрационная карточка · сведения не подтверждены'],
];
coaches.forEach(([initials, name, direction, note]) => {
  const card = elem('article', 'coach-card');
  const avatar = elem('div', 'coach-avatar', initials); avatar.setAttribute('aria-hidden', 'true');
  card.append(avatar, elem('span', 'coach-demo-label', 'ПРИМЕР ОФОРМЛЕНИЯ'), elem('h3', '', name), elem('p', '', direction), elem('small', '', note));
  document.querySelector('#coachGrid').append(card);
});
const protocolSources = [
  ['MAX · публикация 1 ↗', 'https://max.ru/id9403006509_gos/AZxfyqD9YjM'],
  ['MAX · публикация 2 ↗', 'https://max.ru/id9403006509_gos/AZ8TdUbrYdU'],
];
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
  protocolSources.forEach(([label, href]) => {
    const link = elem('a', 'protocol-link', label);
    link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer';
    actions.append(link);
  });
  actions.append(elem('span', 'protocol-status', 'Нужна сверка'));
  item.append(actions);
  document.querySelector('#protocolList').append(item);
});
[
  ['Календарь стартов', '26 легкоатлетических соревнований перенесены из календарного плана ЛНР на 2026 год. Даты требуют подтверждения организатора перед поездкой.'],
  ['Выездные соревнования', 'Предложения по выездам внесены из таблицы на 2026 год. Проверьте место, дату и программу у организаторов.'],
  ['Результаты стартов', 'Ссылки на сообщения MAX с файловыми вложениями размещены в разделе протоколов. Их содержимое сверяется с рабочими PDF перед публикацией.'],
  ['Приём кандидатов', 'Для выездов можно предложить спортсмена и виды. В демо-заявке доступны статусы согласования администратора.'],
].forEach(([title, text], i) => { const article = elem('article', 'news-item'); article.append(elem('span', 'news-count', String(i + 1).padStart(2, '0')), elem('h3', '', title), elem('p', '', text), elem('small', '', 'ПРИМЕР ПУБЛИКАЦИИ')); document.querySelector('#newsList').append(article); });
athleteLeaders.forEach(([name, place, result, source], i) => { const row = elem('article', 'ranking-row'); row.append(elem('span', 'ranking-number', String(i + 1).padStart(2, '0')), elem('strong', '', name), elem('span', '', `${place} · ${result}`), elem('small', '', `Источник: ${source}`)); document.querySelector('#rankingList')?.append(row); });
renderCalendar(); renderEvents();
