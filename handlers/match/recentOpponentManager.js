// Version: 4.5_04_03_001

const recentOpponentMap = {}; // userId: [opponentId, opponentId, ...]

function addRecentOpponent(userId, opponentId) {
  if (!recentOpponentMap[userId]) recentOpponentMap[userId] = [];
  recentOpponentMap[userId].push(opponentId);

  // 최근 5명까지만 저장
  if (recentOpponentMap[userId].length > 5) {
    recentOpponentMap[userId].shift();
  }
}

function getRecentOpponentCount(userId, opponentId) {
  if (!recentOpponentMap[userId]) return 0;
  return recentOpponentMap[userId].filter(id => id === opponentId).length;
}

function resetRecentOpponents(userId) {
  recentOpponentMap[userId] = [];
}

module.exports = {
  addRecentOpponent,
  getRecentOpponentCount,
  resetRecentOpponents,
  recentOpponentMap
};
