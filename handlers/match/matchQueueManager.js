// Version: 4.5_04_09_001

const matchCache = {}; // { userId: { matchType, gradeIndex, timestamp } }

function addToQueue(userId, matchType, gradeIndex) {
  matchCache[userId] = {
    matchType,
    gradeIndex,
    timestamp: Date.now(),
  };
}

function removeFromQueue(userId) {
  delete matchCache[userId];
}

function getOpponent(userId, gradeIndex, matchType) {
  const now = Date.now();
  const timeout = 1000 * 60 * 5; // 5분

  for (const [otherId, info] of Object.entries(matchCache)) {
    if (
      otherId !== userId &&
      info.matchType === matchType &&
      Math.abs(info.gradeIndex - gradeIndex) <= 1 &&
      now - info.timestamp <= timeout
    ) {
      return otherId;
    }
  }

  return null;
}

function clearExpiredUsers() {
  const now = Date.now();
  const timeout = 1000 * 60 * 5;

  for (const [userId, info] of Object.entries(matchCache)) {
    if (now - info.timestamp > timeout) {
      delete matchCache[userId];
    }
  }
}

function getQueueState() {
  return matchCache;
}

module.exports = {
  addToQueue,
  removeFromQueue,
  getOpponent,
  clearExpiredUsers,
  getQueueState,
};
