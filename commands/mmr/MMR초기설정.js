// Version: 4.5_04_09_006
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');
const { sendWelcomeDM } = require('../../handlers/user/welcomeHandler');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('initmmr')
    .setDescription('Resend the MMR welcome DM to existing users.')
    .setDescriptionLocalizations({
      ko: '기존 유저에게 MMR 환영 DM을 다시 보냅니다.',
      ja: '既存ユーザーにMMRの歓迎DMを再送します。',
      zh_CN: '向现有用户重新发送MMR欢迎私信。',
      zh_TW: '重新發送MMR歡迎訊息給現有用戶。',
      en_US: 'Resend the MMR welcome DM to existing users.',
    }),

  async execute(interaction) {
    const userId = interaction.user.id;
    const locale = global.userProfiles?.[userId]?.lang || 'ko';
    const t = (key) => getLocalizedText(key, locale);

    try {
      await sendWelcomeDM(interaction.member);
      await interaction.reply({ content: `📩 ${t('initmmr.success')}`, ephemeral: true });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: `⚠️ ${t('initmmr.fail')}`, ephemeral: true });
    }
  }
};
