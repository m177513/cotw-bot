// Version: 4.5_04_09_calcutil

function calculateMMRChange(myMMR, oppMMR, result) {
  const expectedScore = 1 / (1 + Math.pow(10, (oppMMR - myMMR) / 400));
  const kFactor = 40; // 기본 Elo K값
  const score = result === 'win' ? 1 : 0;

  const change = Math.round(kFactor * (score - expectedScore));
  return change;
}

module.exports = { calculateMMRChange };
