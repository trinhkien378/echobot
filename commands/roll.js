// send back dice roll result to the channel the message was sent in

module.exports = {
    name: 'roll',
    description: 'Roll dice',
    args: true,
    usage: `d<number of sides>`,
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`6`);
        } else {
            const nameString = args.join(' ');
            return message.channel.send(`${nameString}`);
        }
    },
};
