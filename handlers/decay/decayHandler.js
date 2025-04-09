// Version: 4.5_04_02_004

function getDecaySettings(rank) {
    const decayMap = {
      'SSS-Rank': { bankedDays: 7, decayPerDay: 4, minQualifyRank: ['SSS-Rank', 'SS-Rank'] },
      'SS-Rank':  { bankedDays: 10, decayPerDay: 3, minQualifyRank: ['SS-Rank', 'S-Rank'] },
      'S-Rank':   { bankedDays: 14, decayPerDay: 3, minQualifyRank: ['S-Rank', 'A-Rank'] },
      'A-Rank':   { bankedDays: 21, decayPerDay: 2, minQualifyRank: ['S-Rank', 'A-Rank', 'B-Rank'] },
      'B-Rank':   { bankedDays: 28, decayPerDay: 1, minQualifyRank: ['S-Rank', 'A-Rank', 'B-Rank', 'C-Rank'] },
    };
    return decayMap[rank] || null;
  }
  
  function shouldDecay(profile) {
    const { lastMatchDate, grade, mmr } = profile;
    const decayConfig = getDecaySettings(grade);
    if (!decayConfig || !lastMatchDate) return false;
  
    const now = Date.now();
    const daysInactive = Math.floor((now - lastMatchDate) / (1000 * 60 * 60 * 24));
    return daysInactive > decayConfig.bankedDays;
  }
  
  function applyDecay(profile) {
    const { grade, mmr, lastMatchDate } = profile;
    const decayConfig = getDecaySettings(grade);
    if (!decayConfig || !shouldDecay(profile)) return profile;
  
    const now = Date.now();
    const daysInactive = Math.floor((now - lastMatchDate) / (1000 * 60 * 60 * 24));
    const decayDays = Math.max(daysInactive - decayConfig.bankedDays, 0);
    const totalDecay = decayDays * decayConfig.decayPerDay;
  
    profile.mmr = Math.max(0, mmr - totalDecay);
    profile.lastDecayCheck = now;
  
    // 등급 강등 로직 (예: 8000 미만은 B로 강등 등은 별도 처리 가능)
    return profile;
  }
  
  module.exports = { getDecaySettings, shouldDecay, applyDecay };
  