// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Client, Intents } from 'discord.js';

const config = {
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
}
const client = new Client(config);

require('dotenv').config()

const TOKEN = process.env.TOKEN

console.log("Beep Beep 🤖")

client.on('ready', readyDiscord)

function readyDiscord() {
  console.log(`Logged in as ${client.user.tag} 👍!`);
}

import commandHandler from './commands.js'

client.on('messageCreate', commandHandler)


client.login(TOKEN);
