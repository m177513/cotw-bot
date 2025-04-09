// Version: 4.5_04_03_rank_localized
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('랭킹')
    .setDescription('MMR 랭킹을 확인합니다.')
    .setDescriptionLocalizations({
      ko: 'MMR 랭킹을 확인합니다.',
      ja: 'MMRランキングを確認します。',
      zh_CN: '查看MMR排行榜。',
      zh_TW: '查看MMR排行榜。',
      en_US: 'Check the MMR leaderboard.',
    })
    .addStringOption(option =>
      option
        .setName('범위')
        .setDescription('top10 또는 내주변5 중 선택')
        .setDescriptionLocalizations({
          ko: 'top10 또는 내주변5 중 선택',
          ja: 'top10 または 自分の周囲5人 を選択',
          zh_CN: '选择top10或我周围的5人',
          zh_TW: '選擇top10或我周圍的5人',
          en_US: 'Select top10 or around5',
        })
        .addChoices(
          { name: 'Top 10', value: 'top10' },
          { name: '내 주변 5명', value: 'around5' }
        )
    ),

  async execute(interaction) {
    const userId = interaction.user.id;
    const profile = global.userProfiles ? await global.userProfiles.findOne({ userId }) : null;
    const locale = profile?.lang || 'Korean';
    const t = (key) => getLocalizedText(key, locale);

    const choice = interaction.options.getString('범위') || 'top10';

    if (!global.userProfiles) {
      return interaction.reply({ content: t('error.noDatabase'), ephemeral: true });
    }

    const allUsers = await global.userProfiles
      .find({ mmr: { $gt: 0 } })
      .sort({ mmr: -1 })
      .toArray();

    if (!allUsers.length) {
      return interaction.reply({ content: t('ranking.empty'), ephemeral: true });
    }

    let message = '';
    if (choice === 'top10') {
      const top10 = allUsers.slice(0, 10);
      message += `🏆 ${t('ranking.top10')}\n`;
      top10.forEach((user, i) => {
        message += `${i + 1}. ${user.username} - ${user.mmr} MMR\n`;
      });
    } else {
      const index = allUsers.findIndex(u => u.userId === userId);
      if (index === -1) {
        return interaction.reply({ content: t('ranking.noProfile'), ephemeral: true });
      }

      const start = Math.max(index - 2, 0);
      const end = Math.min(index + 3, allUsers.length);
      const nearby = allUsers.slice(start, end);

      message += `📍 ${t('ranking.around')}\n`;
      nearby.forEach((user, i) => {
        const rank = start + i + 1;
        const name = user.userId === userId ? `**${user.username}**` : user.username;
        message += `${rank}. ${name} - ${user.mmr} MMR\n`;
      });
    }

    return interaction.reply({ content: message, ephemeral: true });
  }
};
