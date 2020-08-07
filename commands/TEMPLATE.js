module.exports = {
    name: 'template',
    description: 'Sample command with all fields',
    aliases: ['sample'],
    usage: '[echo any args]',
    cooldown: 5,
    execute(message, args) {
        return message.channel.send(`TEMPLATE FOR COMMAND WITH ARGS: ${args.join(' ')}`);
    }
}
