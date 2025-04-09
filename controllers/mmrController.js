// Version: 4.5_04_09_mmr_ctrl
const db = require('../../db');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { getLocalizedText } = require('../../lang/localization');

async function handleMMR(interaction, global) {
  const userId = interaction.user.id;
  const username = interaction.user.username;
  const locale = global.userProfiles?.[userId]?.lang || 'Korean';
  const t = (key, vars) => getLocalizedText(key, locale, vars);

  try {
    // 프로필 존재 여부 확인
    const [existingProfile] = await db.query(
      'SELECT * FROM profiles WHERE user_id = ?',
      [userId]
    );

    if (existingProfile.length === 0) {
      return interaction.reply({
        content: t('error.profileRequired'),
        ephemeral: true
      });
    }

    // 이미 매칭 대기 중인지 확인
    const [waitingMatch] = await db.query(
      'SELECT * FROM matches WHERE (user1_id = ? OR user2_id = ?) AND status = "waiting"',
      [userId, userId]
    );

    if (waitingMatch.length > 0) {
      return interaction.reply({
        content: t('error.alreadyWaiting'),
        ephemeral: true
      });
    }

    // 매칭 대기 등록
    await db.query(
      'INSERT INTO matches (user1_id, match_type, status) VALUES (?, ?, ?)',
      [userId, 'FT5', 'waiting']
    );

    // 버튼 생성
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('join_match')
        .setLabel(t('button.requestMatch'))
        .setStyle(ButtonStyle.Primary)
    );

    return interaction.reply({
      content: t('success.waiting', { username }),
      components: [row]
    });

  } catch (err) {
    console.error('❌ MMR 처리 오류:', err);
    return interaction.reply({
      content: t('error.mmrFailed'),
      ephemeral: true
    });
  }
}

module.exports = { handleMMR };
