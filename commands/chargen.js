// send back character name to the channel the message was sent in

module.exports = {
    name: 'chargen',
    description: 'Character generator script',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Your character is ${message.author} the Mighty!`);
        } else {
            const nameString = args.join(' ');
            return message.channel.send(`Your character is ${message.author} ${nameString}`);
        }
    },
};
