module.exports = {
    name: 'help',
    description: 'Affiche toutes les commandes disponibles',
    execute(message, args, client) {

        
        // Vérifier si `client.commands` est bien défini
        if (!client.commands) {
            return message.channel.send("Aucune commande trouvée.");
        }
        
        // Créer un tableau pour stocker la liste des commandes
        const commandList = client.commands.map(command => `**${command.name}** - ${command.description}`).join('\n');

        // Si aucune commande n'est trouvée, afficher un message de secours
        if (!commandList) {
            return message.channel.send("Aucune commande disponible.");
        }

        // Envoi du message avec la liste des commandes
        message.channel.send({
            content: `Voici les commandes disponibles :\n\n${commandList}`,
        });
    }
};
