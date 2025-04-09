// commands/cancel/cancel.js
// Version: 4.5_04_09_001

const { SlashCommandBuilder } = require('discord.js');
const { cancelMatchRequest } = require('../../handlers/cancel/cancelHandler');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cancel')
    .setDescription('현재 매칭 요청을 취소합니다.')
    .setDescriptionLocalizations({
      ko: '현재 매칭 요청을 취소합니다.',
      en_US: 'Cancel your current match request.',
      ja: '現在のマッチリクエストをキャンセルします。',
      zh_CN: '取消您当前的配对请求。',
      zh_TW: '取消您目前的配對請求。'
    }),

  async execute(interaction) {
    const userProfiles = global.userProfiles || {};
    return cancelMatchRequest(interaction, userProfiles);
  }
};
