const config = require('../config/config.json');

module.exports = {
    name: 'messageCreate',
    execute(message, client) {
        if (message.author.bot) return; // Ignore les messages des bots

        console.log(`📩 ${message.author.tag}: ${message.content}`);

        // Vérifier si c'est une commande
        if (!message.content.startsWith(config.prefix)) return;
        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        console.log(client.commands)
        
        // Vérifier si la commande existe
        const command = client.commands.get(commandName);
        if (!command) return;

        try {
            command.execute(message, args, message.client);
        } catch (error) {
            console.error(error);
            message.reply('❌ Une erreur est survenue.');
        }
    }
};
