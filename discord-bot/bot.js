const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

require('dotenv').config()

const TOKEN = process.env.TOKEN

console.log("Beep Beep 🤖")

client.on('ready', readyDiscord)

function readyDiscord() {
  console.log('logged in 👍')
  console.log(`Logged in as ${client.user.tag}!`);
}

client.on('messageCreate', messageCreated)

function messageCreated(msg) {
  console.log(msg.content)
}

client.login(TOKEN);
