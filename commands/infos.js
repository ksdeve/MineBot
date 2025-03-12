const { EmbedBuilder } = require('discord.js');
const util = require('minecraft-server-util');


module.exports = {
    name: 'status',
    description: 'Affiche l\'état du serveur Minecraft',
    async execute(message, args) {
        const serverIP =  process.env.SERVER_HOST;
        const serverPort = parseInt(process.env.SERVER_PORT, 10);

 
        

        try {
            const response = await util.status(serverIP, serverPort);

            console.log("response : " + JSON.stringify(response))
            
            const embed = new EmbedBuilder()
                .setColor('#00ff00')
                .setTitle(`🖥️ État du serveur Minecraft`)
                .addFields(
                    { name: '📶 IP', value: serverIP, inline: true },
                    { name: '🔢 Port', value: `${serverPort}`, inline: true },
                    { name: '👥 Joueurs', value: `${response.players.online}/${response.players.max}`, inline: true },
                    { name: '📝 Version', value: response.version.name, inline: true },
                    { name: '📜 Motd', value: response.motd.clean, inline: false }
                )
                .setThumbnail(`https://api.mcstatus.io/v2/icon/${serverIP}`) // Affiche l'icône du serveur
                .setTimestamp();

            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            message.channel.send('❌ Impossible d’obtenir l’état du serveur.');
        }
    }
};
