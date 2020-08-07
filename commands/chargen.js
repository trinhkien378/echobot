// send back character name to the channel the message was sent in
/**
 * CHARGEN
 * @type {{
 * aliases: [string],
 * usage: string,
 * name: string,
 * cooldown: number,
 * description: string,
 * execute(*, *): (string)}}
 */
module.exports = {
    name: 'chargen',
    description: 'Character generator script',
    execute(message, args) {
        // if no arguments are added, return the default string
        if (!args.length) {
            return message.channel.send(`Your character is ${message.author} the Mighty!`);
        } else {
            // configure a chosen string
            const nameString = args.join(' ');
            return message.channel.send(`Your character is ${message.author} ${nameString}`);
        }
    },
};
