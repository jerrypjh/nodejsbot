const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!좌표 test') {
    message.reply('정상');
  }
});

client.on('message', (message) => {
  if(message.content === '!좌표 수달') {
    message.reply('정상');
  }
});

client.login(token);