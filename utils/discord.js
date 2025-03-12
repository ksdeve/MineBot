const { WebhookClient } = require('discord.js');

// Création du Webhook client
const webhookClient = new WebhookClient({ url: process.env.WEBHOOK_URL });

// Fonction pour envoyer des messages "INFO" dans un format Discord sans webhook
async function sendInfoMessage(client, message) {
    try {
        const channelId = process.env.TEST_CHANNEL_ID;
        const channel = await client.channels.fetch(channelId);
        if (!channel) {
            console.error("❌ Le canal n'a pas été trouvé.");
            return;
        }

        await channel.send(`**${message}**`);
        console.log(`📩 Message INFO envoyé sur Discord: ${message}`);
    } catch (error) {
        console.error("Erreur lors de l'envoi du message INFO:", error);
    }
}

// Fonction pour envoyer un message via Webhook
async function sendWebhookMessage(playerName, avatarUrl, message) {
    await webhookClient.send({
        username: playerName,
        avatarURL: avatarUrl,
        content: message
    });
    console.log(`📩 Message envoyé sur Discord: ${playerName}: ${message}`);
}

module.exports = { sendInfoMessage, sendWebhookMessage };
