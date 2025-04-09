// Version: 4.5_04_09_scoreCommand
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/utils');
const { registerScore } = require('../../handlers/score/registerScore');
const { globalUserProfiles } = require('../../handlers/user/Profile');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('registerscore')
    .setDescription('대전 점수를 등록합니다.')
    .setDescriptionLocalizations({
      ko: '대전 점수를 등록합니다.',
      en_US: 'Register match result.',
      ja: '対戦スコアを登録します。',
      zh_CN: '登记对战分数。',
      zh_TW: '登記對戰分數。',
    })
    .addUserOption(option =>
      option.setName('opponent')
        .setDescription('상대 유저를 선택하세요.')
        .setDescriptionLocalizations({
          ko: '상대 유저를 선택하세요.',
          en_US: 'Select your opponent.',
          ja: '対戦相手を選んでください。',
          zh_CN: '请选择对手。',
          zh_TW: '請選擇對手。',
        })
        .setRequired(true)
    )
    .addIntegerOption(option =>
      option.setName('myscore')
        .setDescription('당신의 점수를 입력하세요.')
        .setDescriptionLocalizations({
          ko: '당신의 점수를 입력하세요.',
          en_US: 'Enter your score.',
          ja: '自分のスコアを入力してください。',
          zh_CN: '请输入你的分数。',
          zh_TW: '請輸入你的分數。',
        })
        .setRequired(true)
        .setMinValue(0)
        .setMaxValue(5)
    )
    .addIntegerOption(option =>
      option.setName('opponentscore')
        .setDescription('상대의 점수를 입력하세요.')
        .setDescriptionLocalizations({
          ko: '상대의 점수를 입력하세요.',
          en_US: 'Enter opponent\'s score.',
          ja: '相手のスコアを入力してください。',
          zh_CN: '请输入对手的分数。',
          zh_TW: '請輸入對手的分數。',
        })
        .setRequired(true)
        .setMinValue(0)
        .setMaxValue(5)
    ),

  async execute(interaction) {
    const userId = interaction.user.id;
    const opponent = interaction.options.getUser('opponent');
    const myScore = interaction.options.getInteger('myscore');
    const oppScore = interaction.options.getInteger('opponentscore');

    const locale = globalUserProfiles?.[userId]?.lang || 'ko';
    const t = (key, vars) => getLocalizedText(key, locale, vars);

    if (userId === opponent.id) {
      return await interaction.reply({ content: t('error.cannotPlaySelf'), ephemeral: true });
    }

    if (myScore === oppScore) {
      return await interaction.reply({ content: t('error.scoreDrawNotAllowed'), ephemeral: true });
    }

    // 점수 등록 처리
    try {
      await registerScore({ interaction, userId, opponentId: opponent.id, myScore, oppScore, t });
    } catch (error) {
      console.error('점수 등록 오류:', error);
      return await interaction.reply({ content: t('error.general'), ephemeral: true });
    }
  }
};
