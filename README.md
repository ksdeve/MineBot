# BotMCtat

Un bot Discord permettant d'interagir avec un serveur Minecraft via RCON.

## 🚀 Fonctionnalités

- Affichage du statut du serveur Minecraft.

- Exécution de commandes sur le serveur via RCON.

- Envoi de messages du bot vers le serveur Minecraft.

- Gestion des commandes Discord.

## 📦 Installation

1. Clonez le dépôt :

```
git clone https://github.com/votre-utilisateur/botMCtat.git
cd botMCtat
```

2. Installez les dépendances :
```
npm install
```

3. Configurez le fichier .env :

```
TOKEN=votre_token_discord

// Pour envoyer un message sur le serveur
RCON_HOST=host
RCON_PORT=25575
RCON_PASSWORD=password

SERVER_HOST=host
SERVER_PORT=port
OWNER_ID=votre_id
TEST_CHANNEL_ID=votre_channel_id
WEBHOOK_URL=votre_url
```

1. Lancez le bot :
```
npm run start
```

📜 Commandes

- `!status` : Affiche l'état du serveur Minecraft.

- `!help` : Affiche la liste des commandes disponibles.

- `!send` : Envoie un message sur le serveur Minecraft.

## 🛠️ Configuration du serveur Minecraft

1. Ouvrez server.properties et activez RCON :

```
enable-rcon=true
rcon.port=25575
rcon.password=Votre_Mot_de_Passe
```

2. Redémarrez le serveur Minecraft.

