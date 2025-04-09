// Version: 4.5_04_09_004
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');
const { handleMatchRequest } = require('../../handlers/match/matchHandler');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mmr')
    .setDescription('Start an MMR ranked match.')
    .setDescriptionLocalizations({
      ko: 'MMR 랭크 매치를 시작합니다.',
      ja: 'MMRランクマッチを開始します。',
      zh_CN: '开始 MMR 排位赛。',
      zh_TW: '開始 MMR 排位賽。',
      en_US: 'Start an MMR ranked match.',
    })
    .addIntegerOption(option =>
      option.setName('waittime')
        .setDescription('Waiting time in minutes (default: 10)')
        .setDescriptionLocalizations({
          ko: '매칭 대기시간을 분 단위로 설정합니다 (기본: 10분)',
          ja: '待機時間を分単位で設定します（デフォルト10分）',
          zh_CN: '设置配对等待时间（默认10分钟）',
          zh_TW: '設定配對等待時間（預設10分鐘）',
          en_US: 'Set waiting time (default 10 minutes)',
        })
        .setMinValue(1)
        .setMaxValue(60)
    )
    .addIntegerOption(option =>
      option.setName('gradegap')
        .setDescription('Maximum allowed grade difference')
        .setDescriptionLocalizations({
          ko: '허용할 최대 등급 차이',
          ja: '許容する最大ランク差',
          zh_CN: '允许的最大段位差',
          zh_TW: '允許的最大段位差',
          en_US: 'Maximum allowed grade difference',
        })
        .setMinValue(-1)
        .setMaxValue(10)
    )
    .addBooleanOption(option =>
      option.setName('nickname')
        .setDescription('Hide your nickname (anonymous matching)')
        .setDescriptionLocalizations({
          ko: '닉네임 숨김 여부 (익명 매칭)',
          ja: 'ニックネームを非表示にするかどうか（匿名マッチ）',
          zh_CN: '是否隐藏昵称（匿名匹配）',
          zh_TW: '是否隱藏暱稱（匿名配對）',
          en_US: 'Hide nickname (anonymous matching)',
        })
    ),

  async execute(interaction) {
    const userId = interaction.user.id;
    const locale = global.userProfiles?.[userId]?.lang || 'ko';
    const t = (key, vars) => getLocalizedText(key, locale, vars);

    const wait = interaction.options.getInteger('waittime') ?? 10;
    const gap = interaction.options.getInteger('gradegap') ?? 2;
    const nicknameHidden = interaction.options.getBoolean('nickname') ?? false;

    await handleMatchRequest(interaction, {
      userId,
      mode: 'MMR',
      wait,
      gradegap: gap,
      anonymous: nicknameHidden,
      t
    });
  }
};
