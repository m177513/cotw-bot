// Version: 4.5_04_09_final
const Profile = require('../../models/Profile');
const { calculateEloChange } = require('../../handlers/score/scoreUtil');
const { recordMatchHistory } = require('../../handlers/score/historyTracker');
const { getLocalizedText } = require('../../lang/langUtil');

async function registerScore(userId, opponentId, myScore, oppScore, profiles) {
  const me = await Profile.findOne({ userId });
  const opponent = await Profile.findOne({ userId: opponentId });

  if (!me || !opponent) {
    return { error: 'profileNotFound' };
  }

  const locale = me.lang || 'Korean';
  const t = (key, vars) => getLocalizedText(key, locale, vars);

  const result = myScore > oppScore ? 'win' : 'lose';

  // MMR 계산 및 보너스 적용
  const { mmrChange, newMMR, firstGameBonus } = calculateEloChange({
    myMMR: me.mmr,
    oppMMR: opponent.mmr,
    result,
    ft5Gap: Math.abs(myScore - oppScore),
    isFirstGame: me.matches === 0,
    winStreak: me.winStreak,
    gradeGap: Math.abs(me.gradeIndex - opponent.gradeIndex)
  });

  me.mmr = newMMR;
  me.matches += 1;
  me.winStreak = result === 'win' ? me.winStreak + 1 : 0;
  me.losses = result === 'win' ? me.losses : me.losses + 1;
  me.wins = result === 'win' ? me.wins + 1 : me.wins;
  me.lastMatch = new Date();
  await me.save();

  // 상대방 기본 처리 (패배)
  opponent.matches += 1;
  opponent.winStreak = result === 'lose' ? opponent.winStreak + 1 : 0;
  opponent.losses = result === 'win' ? opponent.losses + 1 : opponent.losses;
  opponent.wins = result === 'win' ? opponent.wins : opponent.wins + 1;
  opponent.lastMatch = new Date();
  await opponent.save();

  // 경기 이력 기록 (양쪽)
  recordMatchHistory(userId, {
    opponentId,
    result,
    myScore,
    oppScore,
    change: mmrChange,
    timestamp: new Date()
  });

  recordMatchHistory(opponentId, {
    opponentId: userId,
    result: result === 'win' ? 'lose' : 'win',
    myScore: oppScore,
    oppScore: myScore,
    change: -mmrChange,
    timestamp: new Date()
  });

  return {
    change: mmrChange,
    newMMR: me.mmr,
    firstGameBonus,
    win: result === 'win'
  };
}

module.exports = { registerScore };
