const Discord = require('discord.js');
const client = new Discord.Client();
const {DISCORD_TOKEN} = require('./env.json');
const config = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if (message.content === '!Hello') {
        // send back "你好" nĭ hăo (Chinese for 'Hello') to the channel the message was sent in
        message.channel.send('你好');
    }
});

client.login(DISCORD_TOKEN);
