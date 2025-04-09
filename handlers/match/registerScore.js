// Version: 4_02_01
// handlers/match/registerScore.js

const language = require('../../lang/messages');
const { updateMMR } = require('../../utils/mmrCalculator');
const { recordMatchHistory } = require('../../utils/historyTracker');

module.exports = async function handleRegisterScore(interaction, activeMatches, userData) {
  const userId = interaction.user.id;
  const lang = (userData[userId] && userData[userId].lang) || 'Korean';
  const t = (key) => language[key]?.[lang] || language[key]?.['Korean'] || key;

  const matchKey = Object.keys(activeMatches).find(key => {
    const match = activeMatches[key];
    return match.p1 === userId || match.p2 === userId;
  });

  if (!matchKey) {
    return interaction.reply({
      content: t('noActiveMatch'),
      ephemeral: true,
    });
  }

  const match = activeMatches[matchKey];
  const { p1, p2, matchType = 'MMR' } = match;

  const p1Score = interaction.options.getInteger('p1');
  const p2Score = interaction.options.getInteger('p2');

  // FT5 검증: 둘 중 하나만 5점
  if (!((p1Score === 5 && p2Score < 5) || (p2Score === 5 && p1Score < 5))) {
    return interaction.reply({
      content: t('invalidScore'),
      ephemeral: true,
    });
  }

  const winnerId = p1Score === 5 ? p1 : p2;
  const loserId = p1Score === 5 ? p2 : p1;

  // MMR 계산 로직 (matchType이 MMR일 경우만)
  if (matchType === 'MMR') {
    await updateMMR({
      winnerId,
      loserId,
      p1Score,
      p2Score,
      userData,
      matchType
    });
  }

  // 기록 저장 (선택 적용 가능)
  if (recordMatchHistory) {
    await recordMatchHistory({
      winnerId,
      loserId,
      score: `${p1Score}-${p2Score}`,
      matchType
    });
  }

  // 최근 상대 기록
  userData[p1].recentOpponents = [...new Set([...(userData[p1].recentOpponents || []), p2])];
  userData[p2].recentOpponents = [...new Set([...(userData[p2].recentOpponents || []), p1])];

  // 완료 메시지
  await interaction.reply({
    content: t('scoreRegistered')
      .replace('{p1}', `<@${p1}>`)
      .replace('{p2}', `<@${p2}>`)
      .replace('{p1Score}', p1Score)
      .replace('{p2Score}', p2Score)
      .replace('{winner}', `<@${winnerId}>`)
      .replace('{loser}', `<@${loserId}>`),
    ephemeral: true,
  });

  // 매치 종료
  delete activeMatches[matchKey];
};
