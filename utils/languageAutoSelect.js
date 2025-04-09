// Version: 4_02_01_languageAutoSelect

function getLanguageFromLocale(localeCode) {
    const mappings = {
      ko: 'Korean',
      ja: 'Japanese',
      zh_CN: 'ChineseSimplified',
      zh_TW: 'ChineseTraditional',
      en_US: 'English',
      en: 'English',
    };
  
    return mappings[localeCode] || 'Korean'; // 기본값: Korean
  }
  
  function getLanguageFromButtonId(buttonId) {
    const map = {
      country_KR: 'Korean',
      country_JP: 'Japanese',
      country_CN: 'ChineseSimplified',
      country_TW: 'ChineseTraditional',
      country_EN: 'English',
    };
  
    return map[buttonId] || 'Korean'; // 기본값: Korean
  }
  
  module.exports = { getLanguageFromLocale, getLanguageFromButtonId };
  