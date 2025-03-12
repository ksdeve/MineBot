const axios = require('axios');

// Fonction pour obtenir l'UUID d'un joueur
async function getUUID(playerName) {
    try {
        const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${playerName}`);
        return response.data.id; // L'UUID du joueur
    } catch (error) {
        console.error(`❌ Impossible de récupérer l'UUID de ${playerName}`);
        return null;
    }
}

module.exports = getUUID;
