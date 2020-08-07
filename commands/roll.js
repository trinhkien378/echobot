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
            // put all the arguments together
            const dieString = args.join();
            // remove the little 'd' and paste them all together again
            const num = dieString.split('d').join('');
            return message.channel.send(num);
        }
    },
};
