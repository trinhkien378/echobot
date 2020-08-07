// send back "你好" nĭ hăo (Chinese for 'Hello') to the channel the message was sent in
/**
 * HELLO
 * @type {{
 * aliases: [string],
 * usage: string,
 * name: string,
 * cooldown: number,
 * description: string,
 * execute(*, *): (string)}}
 */
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
