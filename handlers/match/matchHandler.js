// Version: 3_28_19

const { createMatchThread } = require('./threadManager');
const { getLocalizedText } = require('../lang/langUtil');
const { addRecentOpponent, checkRepeatMatch } = require('./recentOpponentManager');
const matchCache = {};

const gradeList = [
  'New Face', 'Rookie', 'C-Rank', 'B-Rank',
  'A-Rank', 'S-Rank', 'SS-Rank', 'SSS-Rank', 'Legendary Wolf'
];

function findOpponent(userId, matchType, gradeIndex, range = 1) {
  for (const [otherId, info] of Object.entries(matchCache)) {
    if (
      otherId !== userId &&
      info.matchType === matchType &&
      Math.abs(info.gradeIndex - gradeIndex) <= range &&
      !info.opponentId // 아직 매칭 안 된 상태
    ) {
      return otherId;
    }
  }
  return null;
}

async function handleMatchRequest(interaction, userProfiles, matchType = 'MMR') {
  const userId = interaction.user.id;
  const profile = userProfiles[userId];
  const locale = profile?.lang || 'Korean';
  const t = (key) => getLocalizedText(key, locale);

  if (!profile?.grade) {
    return interaction.reply({ content: t('error.noGrade'), ephemeral: true });
  }

  const gradeIndex = gradeList.indexOf(profile.grade);
  if (gradeIndex === -1) {
    return interaction.reply({ content: t('error.noGrade'), ephemeral: true });
  }

  if (matchCache[userId]) {
    return interaction.reply({ content: t('match.alreadyRequested'), ephemeral: true });
  }

  const opponentId = findOpponent(userId, matchType, gradeIndex, 1);

  // 매칭 대기 등록
  matchCache[userId] = {
    matchType,
    grade: profile.grade,
    gradeIndex,
    time: Date.now()
  };

  // 매칭 성사
  if (opponentId) {
    const opponent = await interaction.guild.members.fetch(opponentId);
    const opponentProfile = userProfiles[opponentId];
    const isRepeat = checkRepeatMatch(userId, opponentId);

    if (isRepeat >= 3) {
      return interaction.reply({ content: t('match.repeatedOpponent'), ephemeral: true });
    }

    await createMatchThread(interaction, interaction.user.id, opponentId, t('thread'), matchType);
    addRecentOpponent(userId, opponentId);
    addRecentOpponent(opponentId, userId);

    delete matchCache[userId];
    delete matchCache[opponentId];

    return interaction.reply({
      content: t('match.found').replace('{player}', `<@${opponentId}>`),
      ephemeral: true
    });
  }

  return interaction.reply({
    content: t('match.searching'),
    ephemeral: true
  });
}

module.exports = { handleMatchRequest, matchCache };
