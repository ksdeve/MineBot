const { Rcon } = require('rcon-client'); // Importation de la librairie Rcon

module.exports = {
    name: 'sendmessage',
    description: 'Envoie un message sur le serveur Minecraft',
    async execute(message, args) {
        // Vérifie si un message a été fourni
        if (!args.length) {
            return message.reply('❌ Veuillez fournir un message à envoyer au serveur.');
        }

        const messageToSend = args.join(' '); // Le message à envoyer

        const serverIP = '127.0.0.1';
        const serverPort = 25575; // Port par défaut
        const rconPassword = '1234';

        // Connexion à RCON et envoi du message
        try {
            const rcon = new Rcon({
                host: serverIP,
                port: serverPort,
                password: rconPassword,
            });

            await rcon.connect(); // Se connecter au serveur RCON

            // Envoie du message sur le serveur Minecraft
            await rcon.send(`say ${messageToSend}`); // Utilisation de la commande `say` de Minecraft
            rcon.end(); // Déconnexion

            // Confirmer l'envoi du message
            message.reply(`✅ Le message a été envoyé au serveur Minecraft : "${messageToSend}"`);
        } catch (error) {
            console.error(error);
            message.reply('❌ Une erreur est survenue lors de l\'envoi du message au serveur Minecraft.');
        }
    }
};
