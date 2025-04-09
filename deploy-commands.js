// Version: 4.5_04_09_deploy_final

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

const { TOKEN, CLIENT_ID } = process.env;
const GUILD_IDS = [
  '650041634364456978',  // 나우핏
  '1341729296737243196', // 성범이호연이
  '1241457783363080202', // nameko
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

// 명령어 불러오기
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const folders = fs.readdirSync(commandsPath);

for (const folder of folders) {
  const folderPath = path.join(commandsPath, folder);
  if (!fs.lstatSync(folderPath).isDirectory()) continue;

  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.js'));
  for (const file of files) {
    const command = require(path.join(folderPath, file));
    if (command.data && command.execute) {
      commands.push(command.data.toJSON());
    }
  }
}

(async () => {
  try {
    console.log(`📦 총 ${commands.length}개의 명령어를 ${GUILD_IDS.length}개 서버에 배포합니다.`);

    for (const guildId of GUILD_IDS) {
      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, guildId),
        { body: commands }
      );
      console.log(`✅ [${guildId}] 서버에 등록 완료`);
    }

    console.log('🎉 모든 서버에 명령어 배포 완료!');
    console.log('📋 배포된 명령어 목록:');
    commands.forEach(cmd => {
      console.log(`- ${cmd.name}${cmd.description ? `: ${cmd.description}` : ''}`);
    });
  } catch (err) {
    console.error('❌ 오류 발생:', err);
  }
})();
