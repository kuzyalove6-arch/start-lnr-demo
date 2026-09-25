'use strict';
const key = 'startLnrAdminRequests';
const labels = { coach: 'Новый тренер', trip: 'Предложение по выезду', candidate: 'Кандидат на выезд', representative: 'Представитель · местный старт' };
const statuses = { new: 'Новая', approved: 'Утверждено', declined: 'Отклонено', clarification: 'Нужно уточнение' };
const read = () => JSON.parse(localStorage.getItem(key) || '[]');
const write = items => localStorage.setItem(key, JSON.stringify(items));
const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text !== undefined) node.textContent = text; return node; };
function update(id, status) { const items = read().map(item => item.id === id ? { ...item, status, reviewedAt: new Date().toISOString() } : item); write(items); render(); }
const fieldLabels = { event: 'Соревнование', date: 'Дата', team: 'Команда (организация)', name: 'ФИО представителя' };
function addDetails(details, data, type) {
  Object.entries(data).forEach(([field, value]) => {
    if (field === 'athletes' && Array.isArray(value)) {
      value.forEach((athlete, index) => {
        const block = el('div', 'admin-athlete');
        block.append(el('strong', '', `Спортсмен ${index + 1}: ${athlete.name}`));
        const birth = athlete.birthDate ? new Date(`${athlete.birthDate}T12:00:00`).toLocaleDateString('ru-RU') : 'не указана';
        block.append(el('p', '', `Дата рождения: ${birth} · Разряд: ${athlete.grade || 'не указан'}`), el('p', '', `Виды: ${(athlete.events || []).join(', ')}`));
        details.append(block);
      });
      return;
    }
    const row = el('p'); row.append(el('strong', '', `${type === 'representative' ? fieldLabels[field] || field : field}: `), document.createTextNode(value || 'не указано')); details.append(row);
  });
}
function render() {
  const list = document.querySelector('#adminList'); list.replaceChildren(); const items = read();
  document.querySelector('#summary').textContent = `${items.length} заявок · новых: ${items.filter(item => item.status === 'new').length}`;
  if (!items.length) { list.append(el('p', 'empty', 'Очередь пока пуста.')); return; }
  items.forEach(item => { const card = el('article', `admin-request ${item.status}`); const data = item.data; const title = data.name || data.title || data.event || 'Без названия'; const head = el('div', 'admin-request-head'); head.append(el('span', 'kicker', labels[item.type]), el('span', 'admin-status', statuses[item.status])); card.append(head, el('h2', '', title)); const details = el('div', 'admin-request-details'); addDetails(details, data, item.type); card.append(details, el('small', 'muted', `Создано: ${new Date(item.createdAt).toLocaleString('ru-RU')}`)); if (item.status === 'new' || item.status === 'clarification') { const actions = el('div', 'admin-actions'); [['approved', 'Утвердить'], ['clarification', 'Нужно уточнение'], ['declined', 'Отклонить']].forEach(([status, label]) => { const button = el('button', `button ${status === 'approved' ? 'button-blue' : 'button-outline'}`, label); button.type = 'button'; button.addEventListener('click', () => update(item.id, status)); actions.append(button); }); card.append(actions); } list.append(card); });
}
document.querySelector('#refresh').addEventListener('click', render);
document.querySelector('#clear').addEventListener('click', () => { write(read().filter(item => item.status === 'new' || item.status === 'clarification')); render(); });
render();
