const Discord = require('discord.js');
const { token } = require('./Keroro.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '共鳴') {
        msg.reply('KeroKeroKero~~');
    }
});

client.login(token);