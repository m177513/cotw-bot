// Version: 4.5_04_09_score_upgrade
const { SlashCommandBuilder } = require('discord.js');
const getLocalizedText = require('../../lang/getLocalizedText');
const mmrCalc = require('../../handlers/mmr/mmrCalculator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('score')
    .setDescription('Submit FT5 result and apply score.')
    .addIntegerOption(option =>
      option.setName('myscore')
        .setDescription('Your score (0~5)')
        .setDescriptionLocalizations({
          ko: '당신이 획득한 점수 (0~5)',
          ja: 'あなたのスコア (0～5)',
          zh_CN: '你获得的分数 (0~5)',
          zh_TW: '你獲得的分數 (0~5)'
        })
        .setMinValue(0)
        .setMaxValue(5)
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('opponentscore')
        .setDescription('Opponent score (0~5)')
        .setDescriptionLocalizations({
          ko: '상대가 획득한 점수 (0~5)',
          ja: '相手のスコア (0～5)',
          zh_CN: '对手获得的分数 (0~5)',
          zh_TW: '對手獲得的分數 (0~5)'
        })
        .setMinValue(0)
        .setMaxValue(5)
        .setRequired(true)),

  async execute(interaction) {
    const userId = interaction.user.id;
    const myScore = interaction.options.getInteger('myscore');
    const opponentScore = interaction.options.getInteger('opponentscore');
    const locale = global.userProfiles?.[userId]?.lang || 'ko';
    const t = (key, vars) => getLocalizedText(key, locale, vars);

    const active = interaction.client.activeMatches[userId];
    if (!active) {
      return interaction.reply({
        content: t('score.noActiveMatch'),
        ephemeral: true
      });
    }

    const opponentId = active.opponentId;
    const key = [userId, opponentId].sort().join('_');

    if (!interaction.client.pendingScores) {
      interaction.client.pendingScores = {};
    }

    if (!interaction.client.pendingScores[key]) {
      interaction.client.pendingScores[key] = {};
    }

    interaction.client.pendingScores[key][userId] = { myScore, opponentScore };

    const entries = interaction.client.pendingScores[key];
    if (entries[userId] && entries[opponentId]) {
      const p1 = entries[userId];
      const p2 = entries[opponentId];

      if (p1.myScore === p2.opponentScore && p1.opponentScore === p2.myScore) {
        await mmrCalc(interaction.client, userId, opponentId, p1.myScore, p1.opponentScore);

        delete interaction.client.activeMatches[userId];
        delete interaction.client.activeMatches[opponentId];
        delete interaction.client.pendingScores[key];

        return interaction.reply({
          content: t('score.saved'),
          ephemeral: true
        });
      } else {
        return interaction.reply({
          content: t('score.notMatched'),
          ephemeral: true
        });
      }
    } else {
      await interaction.reply({
        content: t('score.waitOpponent'),
        ephemeral: true
      });

      // 3분 후 자동 저장
      setTimeout(async () => {
        const final = interaction.client.pendingScores[key];
        if (final && final[userId] && final[opponentId]) return;

        const p = interaction.client.pendingScores[key][userId];
        await mmrCalc(interaction.client, userId, opponentId, p.myScore, p.opponentScore);

        delete interaction.client.activeMatches[userId];
        delete interaction.client.activeMatches[opponentId];
        delete interaction.client.pendingScores[key];

        await interaction.followUp({
          content: t('score.autoSaved'),
          ephemeral: true
        });
      }, 180_000);
    }
  }
};
