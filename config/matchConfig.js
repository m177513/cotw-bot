// Version: 4_02_01

module.exports = {
    // 등급별 점수 기준
    gradeThresholds: {
      'New Face': 0,
      'Rookie': 1000,
      'C-Rank': 2000,
      'B-Rank': 3000,
      'A-Rank': 4000,
      'S-Rank': 5000,
      'SS-Rank': 6000,
      'SSS-Rank': 7000,
      'Legendary Wolf': 8000,
    },
  
    // 디케이 설정 (등급별 은행 일수 & 일일 감소량)
    decaySettings: {
      'B-Rank': { bankedDays: 28, decayPerDay: 1 },
      'A-Rank': { bankedDays: 21, decayPerDay: 2 },
      'S-Rank': { bankedDays: 14, decayPerDay: 3 },
      'SS-Rank': { bankedDays: 10, decayPerDay: 4 },
      'SSS-Rank': { bankedDays: 7, decayPerDay: 5 },
      'Legendary Wolf': { bankedDays: 5, decayPerDay: 7 },
    },
  
    // 기본 MMR 설정
    defaultMMR: 8500,
    maxMMR: 9999,
    minMMR: 0,
  
    // 점수 계산 보너스
    bonus: {
      firstGame: 10,
      winStreak: [0, 5, 10, 15, 25], // 1~5연승 시 보너스
      ft5PointGapBonus: (score1, score2) => {
        const diff = Math.abs(score1 - score2);
        return Math.max(0, diff * 2); // 점수차당 2점
      },
      gradeGapWeight: (winnerGradeIdx, loserGradeIdx) => {
        const diff = winnerGradeIdx - loserGradeIdx;
        if (diff >= 2) return 0.8;
        if (diff <= -2) return 1.2;
        return 1.0;
      },
    }
  };
  