const { ChannelType, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

async function createMatchThread(interaction, player1, player2, language, matchType) {
  const channel = interaction.channel;

  // 플레이어 닉네임으로 Mentions
  const player1Name = interaction.guild.members.cache.get(player1)?.displayName || 'P1';
  const player2Name = interaction.guild.members.cache.get(player2)?.displayName || 'P2';

  // 스레드 제목 설정
  const threadName = `${matchType.toUpperCase()} | ${player1Name} vs ${player2Name}`;

  // 스레드 생성
  const thread = await channel.threads.create({
    name: threadName,
    autoArchiveDuration: 60,
    type: ChannelType.PublicThread,
    reason: '매칭 성공으로 인한 스레드 자동 생성',
  });

  // 버튼 생성 (점수 등록)
  const button = new ButtonBuilder()
    .setCustomId('register_score')
    .setLabel(language.matchButtons.registerScore)
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder().addComponents(button);

  // 스레드에 메시지 전송
  await thread.send({
    content: `🧵 <@${player1}> VS <@${player2}> 매치가 시작되었습니다!`,
    components: [row]
  });

  return thread;
}

module.exports = { createMatchThread };
