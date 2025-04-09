// /lang/langUtil.js
const messages_ko = require('./messages_ko');
const messages_en = require('./messages_en');
const messages_jp = require('./messages_jp');
const messages_cn = require('./messages_cn');
const messages_tw = require('./messages_tw');

const langMap = {
  Korean: messages_ko,
  English: messages_en,
  Japanese: messages_jp,
  ChineseSimplified: messages_cn,
  ChineseTraditional: messages_tw,
};

function getLocalizedText(key, lang = 'Korean') {
  const dict = langMap[lang] || messages_ko;
  const parts = key.split('.');
  let value = dict;
  for (const part of parts) {
    value = value?.[part];
    if (!value) break;
  }
  return value || key;
}

module.exports = { getLocalizedText };
