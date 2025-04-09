// Version: 4.5_04_09_003
const { SlashCommandBuilder } = require('discord.js');
const { getLocalizedText } = require('../../lang/langUtil');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('approvefix')
    .setDescription('상대방의 점수 정정 요청을 승인합니다.')
    .setDescriptionLocalizations({
      ko: '상대방의 점수 정정 요청을 승인합니다.',
      ja: '対戦相手のスコア修正リクエストを承認します。',
      zh_CN: '批准对方的比分更改请求。',
      zh_TW: '批准對方的比數更改請求。',
      en_US: 'Approve the opponent’s score correction request.',
    }),

  async execute(interaction) {
    const userId = interaction.user.id;
    const profile = global.userProfiles?.[userId];
    const locale = profile?.lang || 'ko';
    const t = (key, vars) => getLocalizedText(key, locale, vars);

    const fixRequest = global.pendingScoreFixes?.[userId];
    if (!fixRequest) {
      return await interaction.reply({
        content: t('fix.noRequest'),
        ephemeral: true,
      });
    }

    const { requester, matchId } = fixRequest;

    // 매치 이력 삭제
    global.matchHistory[requester] = (global.matchHistory[requester] || []).filter(m => m.id !== matchId);
    global.matchHistory[userId] = (global.matchHistory[userId] || []).filter(m => m.id !== matchId);

    // 요청 제거
    delete global.pendingScoreFixes[userId];

    // 응답 메시지
    await interaction.reply({
      content: t('fix.approved'), // '점수 정정을 승인하였습니다. 요청자에게 알림을 보냈습니다.'
      ephemeral: true,
    });

    // 요청자에게 DM 전송
    try {
      const opponent = await interaction.guild.members.fetch(requester);
      if (opponent) {
        await opponent.send(t('fix.dmApproved')); // '상대방이 점수 정정을 승인했습니다. /점수등록 명령어로 재입력해주세요.'
      }
    } catch (err) {
      console.warn('DM 전송 실패:', err);
    }
  }
};
