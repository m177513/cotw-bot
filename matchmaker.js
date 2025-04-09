// Version: 3_28_11

const { handleMatchRequest } = require('./matchHandler');

async function startMatch(interaction, userProfiles, matchType = 'MMR') {
  try {
    await handleMatchRequest(interaction, userProfiles, matchType);
  } catch (error) {
    console.error(`Error in matchmaker for ${matchType}:`, error);
    await interaction.reply({
      content: '⚠️ An error occurred while processing your match request.',
      ephemeral: true,
    });
  }
}

module.exports = { startMatch };
