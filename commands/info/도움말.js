// Version: 4.5_04_03_help_localized
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('도움말')
    .setDescription('모든 명령어 및 기능 요약 안내')
    .setDescriptionLocalizations({
      ko: '모든 명령어 및 기능 요약 안내',
      ja: 'すべてのコマンドと機能の概要を案内',
      zh_CN: '查看所有命令与功能说明',
      zh_TW: '查看所有指令與功能說明',
      en_US: 'View all commands and feature summaries',
    }),

  async execute(interaction) {
    const locale = global.userProfiles?.[interaction.user.id]?.lang || 'Korean';
    const t = (key) => getLocalizedText(key, locale);

    const message = t('help.summary');
    await interaction.reply({ content: message, ephemeral: true });
  },
};
