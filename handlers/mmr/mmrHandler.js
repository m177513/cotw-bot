// Version: 3_28_18

const gradeList = [
    'New Face', 'Rookie', 'C-Rank', 'B-Rank',
    'A-Rank', 'S-Rank', 'SS-Rank', 'SSS-Rank', 'Legendary Wolf'
  ];
  
  function getGradeFromMMR(mmr) {
    if (mmr >= 10000) return 'Legendary Wolf';
    if (mmr >= 9500) return 'SSS-Rank';
    if (mmr >= 9000) return 'SS-Rank';
    if (mmr >= 8500) return 'S-Rank';
    if (mmr >= 8000) return 'A-Rank';
    if (mmr >= 7500) return 'B-Rank';
    if (mmr >= 7000) return 'C-Rank';
    if (mmr >= 6500) return 'Rookie';
    return 'New Face';
  }
  
  // 등급 차이에 따른 점수 보정 (기본 0.5~1.5배)
  function gradeWeight(winnerGrade, loserGrade) {
    const diff = gradeList.indexOf(winnerGrade) - gradeList.indexOf(loserGrade);
    if (diff <= -2) return 1.5;
    if (diff === -1) return 1.2;
    if (diff === 0) return 1.0;
    if (diff === 1) return 0.8;
    return 0.6;
  }
  
  // 연승 보너스: 2연승은 무조건 인정, 3~4연승은 동급 이상, 5연승부터는 상급만 인정
  function winStreakBonus(streak, selfGrade, opponentGrade) {
    const diff = gradeList.indexOf(opponentGrade) - gradeList.indexOf(selfGrade);
    if (streak === 2) return 10;
    if (streak >= 3 && streak <= 4 && diff >= 0) return 15;
    if (streak >= 5 && diff > 0) return 20;
    return 0;
  }
  
  // 5선 보너스 (점수 차이별)
  function ft5Bonus(score1, score2) {
    const diff = Math.abs(score1 - score2);
    if (diff >= 4) return 20;
    if (diff === 3) return 15;
    if (diff === 2) return 10;
    return 5;
  }
  
  // 기본 Elo 변동 계산
  function calculateElo(winnerMMR, loserMMR) {
    const K = 40;
    const expectedWin = 1 / (1 + Math.pow(10, (loserMMR - winnerMMR) / 400));
    const scoreChange = Math.round(K * (1 - expectedWin));
    return scoreChange;
  }
  
  // 하루 첫 게임 보너스 확인
  function isFirstGameToday(lastMatchDate) {
    const today = new Date().toDateString();
    const last = new Date(lastMatchDate || 0).toDateString();
    return today !== last;
  }
  
  // 최종 점수 계산
  function calculateMatchResult(winner, loser, score1, score2, now = new Date()) {
    const baseChange = calculateElo(winner.mmr, loser.mmr);
    const weight = gradeWeight(winner.grade, loser.grade);
    const adjustedChange = Math.round(baseChange * weight);
  
    const bonusFT5 = ft5Bonus(score1, score2);
    const bonusStreak = winStreakBonus(winner.streak || 0, winner.grade, loser.grade);
    const bonusFirst = isFirstGameToday(winner.lastMatch) ? 10 : 0;
  
    const totalGain = adjustedChange + bonusFT5 + bonusStreak + bonusFirst;
    const totalLoss = Math.round(adjustedChange * 0.8); // 지는 쪽은 덜 잃음
  
    // 업데이트
    winner.mmr += totalGain;
    loser.mmr -= totalLoss;
    winner.lastMatch = now;
    loser.lastMatch = now;
  
    // 연승 처리
    winner.streak = (winner.streak || 0) + 1;
    loser.streak = 0;
  
    // 디케이 데이터 초기화
    winner.lastActive = now;
    loser.lastActive = now;
  
    // 등급 재계산
    winner.grade = getGradeFromMMR(winner.mmr);
    loser.grade = getGradeFromMMR(loser.mmr);
  
    return {
      winnerMMR: winner.mmr,
      loserMMR: loser.mmr,
      change: totalGain,
      deduction: totalLoss,
      bonuses: { bonusFT5, bonusStreak, bonusFirst },
      winnerGrade: winner.grade,
      loserGrade: loser.grade
    };
  }
  
  module.exports = {
    calculateMatchResult,
    getGradeFromMMR
  };
  