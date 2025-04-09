// handlers/cancelHandler.js

const { getLocalizedText } = require('../../lang/langUtil');

function cancelMatchRequest(interaction, userProfiles, matchType = 'MMR') {
  const userId = interaction.user.id;
  const locale = userProfiles?.[userId]?.lang || 'Korean';
  const t = (key) => getLocalizedText(key, locale);

  if (!global.matchCache?.[userId]) {
    return interaction.reply({
      content: t('match.noActiveRequest'),
      ephemeral: true
    });
  }

  delete global.matchCache[userId];

  return interaction.reply({
    content: t('match.cancelSuccess'),
    ephemeral: true
  });
}

module.exports = { cancelMatchRequest };
