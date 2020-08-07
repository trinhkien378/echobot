// send back "你好" nĭ hăo (Chinese for 'Hello') to the channel the message was sent in

module.exports = {
    name: 'hello',
    description: 'Hello',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`你好 nĭ hăo ${message.author}!`);
        } else {
            const nameString = args.join(' ');
            return message.channel.send(`你好 nĭ hăo ${nameString}!`);
        }
    },
};
