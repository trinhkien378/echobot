/**
 * Emoji Finder
 * @type {{
 * aliases: [string],
 * usage: string,
 * name: string,
 * cooldown: number,
 * description: string,
 * execute(*, *): (string)}}
 */
module.exports = {
    name: 'emoji',
    description: 'Return an emoji or custom reaction in unicode or custom ID',
    aliases: ['reaction'],
    usage: '[emoji discord name]',
    cooldown: 5,
    execute(message, args) {
        return message.channel.send(`\\${args}`);
    }
}
