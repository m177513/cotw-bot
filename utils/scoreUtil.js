// Version: 4.5_04_02_006

const firstMatchBonus = 10;

function calculateEloChange(p1, p2, result, options = {}) {
  const baseK = 32;
  const gradeBonus = getGradeBonus(p1.grade, p2.grade);
  const winStreakBonus = getWinStreakBonus(p1, result);
  const ft5Bonus = getFT5Bonus(result);

  const expectedScoreP1 = getExpectedScore(p1.mmr, p2.mmr);
  const expectedScoreP2 = 1 - expectedScoreP1;

  const scoreP1 = result.winner === 'p1' ? 1 : 0;
  const scoreP2 = 1 - scoreP1;

  let changeP1 = Math.round(baseK * (scoreP1 - expectedScoreP1) + gradeBonus + winStreakBonus + ft5Bonus);
  let changeP2 = -changeP1;

  if (options.isFirstMatchP1) changeP1 += firstMatchBonus;
  if (options.isFirstMatchP2) changeP2 += firstMatchBonus;

  return { changeP1, changeP2 };
}

function getExpectedScore(ratingA, ratingB) {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

function getGradeBonus(gradeA, gradeB) {
  const gradeList = ['New Face', 'Rookie', 'C-Rank', 'B-Rank', 'A-Rank', 'S-Rank', 'SS-Rank', 'SSS-Rank', 'Legendary Wolf'];
  const indexA = gradeList.indexOf(gradeA);
  const indexB = gradeList.indexOf(gradeB);
  const diff = indexB - indexA;

  if (diff >= 2) return 8;  // 상위 등급 상대 승리 시 추가
  if (diff <= -2) return -5; // 하위 등급 상대로 승리 시 감점
  return 0;
}

function getWinStreakBonus(player, result) {
  const streak = player.winStreak || 0;
  if (result.winner !== 'p1' && result.winner !== 'p2') return 0;

  const isWinner = result.winner === (player.position || 'p1');
  if (!isWinner) return 0;

  // 연승 보너스: 2연승부터 적용
  if (streak < 2) return 0;
  if (streak < 5 && player.gradeDiff <= 0) return 3;   // 동급 또는 상급 상대
  if (streak >= 5 && player.gradeDiff > 0) return 5;   // 상급 상대만 인정
  return 0;
}

function getFT5Bonus(result) {
  if (!result.ft5 || typeof result.scoreP1 !== 'number' || typeof result.scoreP2 !== 'number') return 0;

  const gap = Math.abs(result.scoreP1 - result.scoreP2);
  if (gap >= 4) return 5;
  if (gap === 3) return 3;
  return 0;
}

module.exports = { calculateEloChange };
