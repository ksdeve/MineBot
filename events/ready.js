const config = require('../config/config.json');

const readLogService = require('../services/logWatcher');


module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`✅ Connecté en tant que ${client.user.tag}`);
        console.log(`🔧 Préfixe: ${config.prefix}`);
        
        // Démarrer la surveillance des logs
        readLogService.startWatching(client);
    
    }
};
