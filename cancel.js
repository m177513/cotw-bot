// Version: 3_28_11

const { getLocalizedText } = require('../lang/langUtil');

const { matchCache } = require('../../handlers/match/matchQueueManager'); // ✅ 공유 캐시 사용

async function cancelMatch(interaction, userProfiles) {
  const userId = interaction.user.id;
  const profile = userProfiles[userId];
  const locale = profile?.lang || 'Korean';
  const t = (key) => getLocalizedText(key, locale);

  if (!matchCache[userId]) {
    return interaction.reply({
      content: t('cancel.noActive'),
      ephemeral: true,
    });
  }

  delete matchCache[userId];

  return interaction.reply({
    content: t('cancel.success'),
    ephemeral: true,
  });
}

module.exports = { cancelMatch };
