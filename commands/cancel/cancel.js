// Version: 4.5_04_03_cancel_localized

const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('매칭취소')
    .setDescription('대기 중인 MMR 또는 캐주얼 매칭을 취소합니다.')
    .setDescriptionLocalizations({
      ko: '대기 중인 MMR 또는 캐주얼 매칭을 취소합니다.',
      ja: '待機中のMMRまたはカジュアルマッチをキャンセルします。',
      ChineseCN: '取消等待中的MMR或休闲匹配。',
      ChineseTW: '取消等待中的MMR或休閒配對。',
      EnglishUS: 'Cancel your pending MMR or casual match request.',
    }),

  async execute(interaction) {
    const userId = interaction.user.id;
    const response = await getLocalizedText(interaction.locale, 'cancel_success');
    await interaction.reply(response);
  },
};
