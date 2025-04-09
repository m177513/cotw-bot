// Version: 4.5_04_03_gameinfo_localized
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('게임정보')
    .setDescription('현재 MMR 또는 캐주얼 매치를 진행 중인 유저를 확인합니다.')
    .setDescriptionLocalizations({
      ko: '현재 MMR 또는 캐주얼 매치를 진행 중인 유저를 확인합니다.',
      ja: '現在MMRまたはカジュアルマッチを進行中のユーザーを確認します。',
      zh_CN: '查看当前正在进行MMR或休闲比赛的用户信息。',
      zh_TW: '查看目前正在進行MMR或休閒比賽的使用者資訊。',
      en_US: 'Check users currently in MMR or casual matches.',
    }),

  async execute(interaction) {
    const userId = interaction.user.id;
    const locale = global.userProfiles?.[userId]?.lang || 'Korean';
    const t = (key) => getLocalizedText(key, locale);

    const mmrUsers = Object.keys(global.activeMatches || {});
    const casualUsers = Object.keys(global.activeCasualMatches || {});

    if (mmrUsers.length === 0 && casualUsers.length === 0) {
      return interaction.reply({ content: t('gameinfo.none'), ephemeral: true });
    }

    const formatUsers = (ids) => ids.map(id => `<@${id}>`).join(', ') || '-';

    let message = `📌 ${t('gameinfo.title')}\n`;
    if (mmrUsers.length > 0) message += `\n**MMR**: ${formatUsers(mmrUsers)}`;
    if (casualUsers.length > 0) message += `\n**${t('gameinfo.casual')}**: ${formatUsers(casualUsers)}`;

    await interaction.reply({ content: message, ephemeral: true });
  },
};
