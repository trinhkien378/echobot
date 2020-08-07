const {restart} = require('../index');
const {OWNER_ID} = require('../env.json');

/**
 * TEMPLATE
 * @type {{
 * aliases: [string],
 * usage: string,
 * name: string,
 * cooldown: number,
 * description: string,
 * execute(*, *): (string)}}
 */
module.exports = {
    name: 'restart',
    description: 'Sample command with all fields',
    aliases: ['reboot'],
    usage: '',
    cooldown: 5,
    async execute(message, args) {
        let isBotOwner = message.author.id.toString() === OWNER_ID;
        if (!isBotOwner) {
            console.log('Not the owner');
            return;
        }

        console.log('Restarting. Be Right Back...');
        try {
            await restart();
            return message.channel.send(`Bot restarted successfully`);
        } catch(e) {
            console.log(e);
            return message.channel.send(`An error occurred during restart: `, e);
        }
    }
}
