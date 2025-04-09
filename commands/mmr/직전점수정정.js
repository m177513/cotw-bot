// Version: 4.5_04_09_002
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('requestfix')
    .setDescription('Request correction for the last match result.')
    .setDescriptionLocalizations({
      ko: '직전 매치의 점수 정정을 요청합니다.',
      ja: '直前の試合結果の修正をリクエストします。',
      zh_CN: '请求更正上一场比赛分数。',
      zh_TW: '請求更正上一場比賽分數。',
      en_US: 'Request correction for previous match score.',
    }),

  async execute(interaction) {
    const userId = interaction.user.id;
    const profile = global.userProfiles?.[userId];
    const locale = profile?.lang || 'ko';
    const t = (key, vars) => getLocalizedText(key, locale, vars);

    const lastMatch = global.lastMatches?.[userId];

    if (!lastMatch) {
      return interaction.reply({ content: t('fix.noHistory'), ephemeral: true });
    }

    if (lastMatch?.nextMatchStarted) {
      return interaction.reply({ content: t('fix.alreadyStarted'), ephemeral: true });
    }

    const opponentId = lastMatch.opponentId;
    global.pendingScoreFixes = global.pendingScoreFixes || {};
    global.pendingScoreFixes[opponentId] = {
      requester: userId,
      matchId: lastMatch.matchId,
      status: 'waiting',
    };

    await interaction.reply({
      content: t('fix.requestSent', { opponentId }),
      ephemeral: true,
    });

    const opponent = await interaction.guild.members.fetch(opponentId);
    if (opponent) {
      await opponent.send(t('fix.dmRequest', { userId }));
    }
  }
};
