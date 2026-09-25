// Vercel Function. Configure BOT_TOKEN, TELEGRAM_CHAT_ID and SITE_ORIGIN in Vercel.
const labels = { coach: 'Заявка тренера', trip: 'Предложение выезда', candidate: 'Кандидат на выезд', representative: 'Заявка представителя на старт' };
const clean = (value, max = 160) => typeof value === 'string' ? value.trim().replace(/[\u0000-\u001f\u007f]/g, ' ').slice(0, max) : '';

function formatRequest(type, data) {
  if (!labels[type] || !data || typeof data !== 'object' || Array.isArray(data)) return null;
  const lines = [`📩 ДЕМО · ${labels[type]}`, 'Только тестовые данные; не официальная заявка.'];
  const fields = type === 'coach' ? [['Имя', 'name'], ['Город', 'city'], ['Квалификация', 'category'], ['Судейская категория', 'judge']]
    : type === 'trip' ? [['Соревнование', 'title'], ['Место', 'place'], ['Даты', 'dates'], ['Предложил(а)', 'author'], ['Комментарий', 'comment']]
    : type === 'candidate' ? [['Соревнование', 'event'], ['Кандидат', 'name'], ['Виды', 'events']]
    : [['Соревнование', 'event'], ['Дата', 'date'], ['Команда', 'team'], ['Представитель', 'name']];
  for (const [label, key] of fields) {
    const value = clean(data[key], key === 'comment' ? 360 : 160);
    if (value) lines.push(`${label}: ${value}`);
  }
  if (type === 'representative') {
    if (!Array.isArray(data.athletes) || !data.athletes.length || data.athletes.length > 20) return null;
    data.athletes.forEach((athlete, index) => {
      if (!athlete || typeof athlete !== 'object') return;
      lines.push(`\nСпортсмен ${index + 1}: ${clean(athlete.name)}`);
      lines.push(`Дата рождения: ${clean(athlete.birthDate, 20)} · Разряд: ${clean(athlete.grade, 60)}`);
      if (Array.isArray(athlete.events)) lines.push(`Виды: ${athlete.events.slice(0, 12).map(item => clean(item, 80)).filter(Boolean).join(', ')}`);
    });
  }
  if (lines.length <= 2 || !clean(data.name || data.title)) return null;
  const text = lines.join('\n');
  return text.length <= 3900 ? text : null;
}

module.exports = async function handler(req, res) {
  const allowedOrigin = process.env.SITE_ORIGIN;
  const origin = req.headers.origin;
  if (allowedOrigin && origin === allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') return res.status(origin === allowedOrigin ? 204 : 403).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!allowedOrigin || origin !== allowedOrigin) return res.status(403).json({ error: 'Origin not allowed' });
  if (!process.env.BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) return res.status(503).json({ error: 'Telegram not configured' });
  if (!req.headers['content-type']?.startsWith('application/json')) return res.status(415).json({ error: 'JSON required' });
  const body = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return null; } })() : req.body;
  if (!body || JSON.stringify(body).length > 12000) return res.status(400).json({ error: 'Invalid request' });
  const text = formatRequest(body.type, body.data);
  if (!text) return res.status(400).json({ error: 'Invalid request' });
  try {
    const response = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return res.status(502).json({ error: 'Telegram delivery failed' });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Telegram delivery failed' });
  }
};
