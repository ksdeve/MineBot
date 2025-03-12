const fs = require("fs");
const path = require("path");
const getUUID = require("../utils/uuid");
const { sendInfoMessage, sendWebhookMessage } = require("../utils/discord");

// Définir le fichier log à surveiller
const logFile = path.resolve(
  "C:/Users/Vinek/Documents/servMc/ftb/logs/latest.log"
);

module.exports = {
  startWatching(client) {
    if (!fs.existsSync(logFile)) {
      console.error("❌ Erreur : Le fichier latest.log n'existe pas !");
      return;
    }

    console.log("🔍 Surveillance des logs activée...");

    fs.watchFile(logFile, { interval: 1000 }, async () => {
      try {
        fs.readFile(logFile, "utf8", async (err, data) => {
          if (err) {
            console.error("Erreur de lecture du log:", err);
            return;
          }

          const lines = data.split("\n");
          const lastLine = lines[lines.length - 2]; // Dernière ligne du fichier log

          console.log("Dernière ligne du log : " + lastLine);

          if (lastLine && lastLine.includes("<")) {
            // Vérifie si c'est un message de joueur
            const match = lastLine.match(/<([^>]+)> (.*)/); // Extraire pseudo + message
            if (!match) return;

            const playerName = match[1]; // Pseudo du joueur
            const message = match[2]; // Message du joueur

            const uuid = await getUUID(playerName);
            if (!uuid) return;

            const avatarUrl = "https://minotar.net/helm/" + uuid + "/100";
            console.log("avatarUrl : " + avatarUrl);

            // Envoi du message avec un Webhook
            await sendWebhookMessage(playerName, avatarUrl, message);
          } else if (lastLine && lastLine.includes("INFO")) {
            // Vérifie si c'est un message INFO du serveur
            if (!lastLine.includes("<")) {
              const infoMessageMatch = lastLine.match(
                /\[Server thread\/INFO\] \[.*\]: (.*)/
              );
              if (infoMessageMatch) {
                const infoMessage = infoMessageMatch[1]; // Le message après [INFO]
                await sendInfoMessage(client, infoMessage);
              }
            }
          }
        });
      } catch (error) {
        console.error("Erreur dans la surveillance des logs : ", error);
      }
    });
  },
};
