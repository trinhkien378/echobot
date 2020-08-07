const {OWNER_ID} = require('../env.json');

/**
 * ISOWNER
 * @type {{
 * aliases: [string],
 * usage: string,
 * name: string,
 * cooldown: number,
 * description: string,
 * execute(*, *): (string)}}
 */
module.exports = {
    name: 'isowner',
    description: 'Check if the bot user is the bot owner',
    aliases: ['owner'],
    usage: '',
    cooldown: 5,
    execute(message, args) {
        return message.channel.send(message.author.id === OWNER_ID ? 'Hey boss!' : 'No boss!');
    }
}
