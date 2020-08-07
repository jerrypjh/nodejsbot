const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!좌표 막둥바보','막둥바보') {
    message.reply('pong');
  }
});

client.login(token);