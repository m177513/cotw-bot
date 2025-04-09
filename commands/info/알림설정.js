// Version: 4.5_04_09_007
const { SlashCommandBuilder } = require('discord.js');
const Profile = require('../../models/Profile');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setnotify')
    .setDescription('Set whether to receive match alerts.')
    .setDescriptionLocalizations({
      ko: '매칭 알림 수신 여부를 설정합니다.',
      ja: 'マッチ通知の受信設定を行います。',
      zh_CN: '设置是否接收匹配通知。',
      zh_TW: '設定是否接收配對通知。',
      en_US: 'Set whether to receive match alerts.',
    })
    .addStringOption(option =>
      option
        .setName('receive')
        .setDescription('Choose whether to receive alerts (on/off)')
        .setDescriptionLocalizations({
          ko: '알림을 받을지 여부를 선택하세요 (on/off)',
          ja: '通知を受け取るかどうかを選択してください（on/off）',
          zh_CN: '选择是否接收通知（on/off）',
          zh_TW: '選擇是否接收通知（on/off）',
          en_US: 'Choose whether to receive notifications (on/off)',
        })
        .addChoices(
          { name: 'ON', value: 'on' },
          { name: 'OFF', value: 'off' }
        )
        .setRequired(true)
    ),

  async execute(interaction) {
    const userId = interaction.user.id;
    const locale = global.userProfiles?.[userId]?.lang || 'ko';
    const t = (key) => getLocalizedText(key, locale);

    const choice = interaction.options.getString('receive');

    try {
      const profile = await Profile.findOne({ userId });

      if (!profile) {
        return await interaction.reply({ content: t('error.noProfile'), ephemeral: true });
      }

      profile.notifications.mention = (choice === 'on');
      await profile.save();

      const resultKey = choice === 'on' ? 'notify.on' : 'notify.off';
      return await interaction.reply({ content: t(resultKey), ephemeral: true });

    } catch (error) {
      console.error(error);
      return await interaction.reply({ content: t('error.default'), ephemeral: true });
    }
  },
};
