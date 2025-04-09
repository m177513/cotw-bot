// utils/scoreButtons.js

const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

function sendMatchButtons(language) {
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('register_score')
      .setLabel(language.thread.registerScore || '점수 등록하기')
      .setStyle(ButtonStyle.Primary)
  );
  return [row];
}

module.exports = { sendMatchButtons };
