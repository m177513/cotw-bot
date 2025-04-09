// Version: 4_04_03_index

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
  const folderPath = path.join(commandsPath, folder);
  if (!fs.lstatSync(folderPath).isDirectory()) continue;

  const commandFiles = fs
    .readdirSync(folderPath)
    .filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(folderPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.warn(`[경고] ${file}에는 data 또는 execute 속성이 없습니다.`);
    }
  }
}

client.once('ready', () => {
  console.log(`✅ 봇이 준비되었습니다. (${client.user.tag})`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`❌ 명령어 ${interaction.commandName}을 찾을 수 없습니다.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`❗ 명령어 실행 중 오류 발생: ${error}`);
    await interaction.reply({ content: '명령어 실행 중 오류가 발생했습니다.', ephemeral: true });
  }
});

client.login(process.env.TOKEN);  // ✅ 환경변수 사용
