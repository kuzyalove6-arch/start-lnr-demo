const { test } = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/send-request');

function response() {
  return {
    headers: {}, setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.code = code; return this; },
    json(value) { this.body = value; return this; }, end() { return this; },
  };
}

test('accepts four demo forms and formats athletes for Telegram', async () => {
  process.env.SITE_ORIGIN = 'https://kuzyalove6-arch.github.io';
  process.env.BOT_TOKEN = 'test-token';
  process.env.TELEGRAM_CHAT_ID = '-100123';
  const originalFetch = global.fetch;
  const sent = [];
  global.fetch = async (_url, options) => { sent.push(JSON.parse(options.body)); return { ok: true }; };
  try {
    const forms = [
      ['coach', { name: 'Тестовый тренер', city: 'Луганск' }],
      ['trip', { title: 'Тестовый выезд', place: 'Москва', author: 'Представитель' }],
      ['candidate', { event: 'Тестовый старт', name: 'Кандидат', events: '100 м' }],
      ['representative', { event: 'Тестовый старт', name: 'Представитель', team: 'Команда', athletes: [{ name: 'Спортсмен', birthDate: '2009-01-01', grade: 'I юн.', events: ['100 м', '200 м'] }] }],
    ];
    for (const [type, data] of forms) {
      const res = response();
      await handler({ method: 'POST', headers: { origin: process.env.SITE_ORIGIN, 'content-type': 'application/json' }, body: { type, data } }, res);
      assert.equal(res.code, 200);
      assert.equal(res.headers['Access-Control-Allow-Origin'], process.env.SITE_ORIGIN);
    }
    assert.equal(sent.length, 4);
    assert.match(sent[3].text, /Спортсмен 1: Спортсмен/);
    assert.match(sent[3].text, /100 м, 200 м/);
    assert.equal(sent[0].chat_id, '-100123');
  } finally { global.fetch = originalFetch; }
});

test('rejects other origins and malformed submissions', async () => {
  process.env.SITE_ORIGIN = 'https://kuzyalove6-arch.github.io';
  const badOrigin = response();
  await handler({ method: 'POST', headers: { origin: 'https://other.example', 'content-type': 'application/json' }, body: { type: 'coach', data: { name: 'Тест' } } }, badOrigin);
  assert.equal(badOrigin.code, 403);
  const invalid = response();
  await handler({ method: 'POST', headers: { origin: process.env.SITE_ORIGIN, 'content-type': 'application/json' }, body: { type: 'representative', data: { name: 'Тест', athletes: [] } } }, invalid);
  assert.equal(invalid.code, 400);
});
