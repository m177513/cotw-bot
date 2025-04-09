// Version: 4.5_04_04_001

const matchHistory = {};

function recordMatchHistory({ winnerId, loserId, score, matchType }) {
  const matchId = `${Date.now()}_${winnerId}_${loserId}`;

  const entry = {
    id: matchId,
    winner: winnerId,
    loser: loserId,
    score,
    matchType,
    timestamp: Date.now()
  };

  if (!matchHistory[winnerId]) matchHistory[winnerId] = [];
  if (!matchHistory[loserId]) matchHistory[loserId] = [];

  matchHistory[winnerId].push(entry);
  matchHistory[loserId].push(entry);

  // 보관 수 제한 (예: 최근 20개)
  if (matchHistory[winnerId].length > 20) matchHistory[winnerId].shift();
  if (matchHistory[loserId].length > 20) matchHistory[loserId].shift();

  return true;
}

module.exports = { recordMatchHistory, matchHistory };
