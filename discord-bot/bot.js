// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import fetch from 'node-fetch';
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

client.on('messageCreate', messageCreated)

async function messageCreated(msg) {
  const s = `User ${msg.author.username} wrote: ${msg.content}`
  console.log(s)

  const botTestingChannel = process.env.CHANNEL_ID

  const replies = [
    '🤖👌😍',
    'hej',
    'Velkommen',
    'Er der snart pause?',
  ]

  if (msg.channel.id === botTestingChannel) {

    let tokens = msg.content.split(' ')
    console.log(tokens)

    if (tokens[0] === '!mojn') {
      const index = Math.floor(Math.random() * replies.length)
      const reply = replies[index]
      msg.channel.send(reply)
    } else if (tokens[0] === '!gif') {

      let keywords = 'dog'
      if (tokens.length > 1) {
        keywords = tokens.slice(1).join(' ')
      }
      console.log(keywords)

      const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`
      const result = await fetch(url)
      const json = await result.json()

      if (json.results.length < 1) {
        msg.channel.send("Error: not found")
        return
      }

      const index = Math.floor(Math.random() * json.results.length)
      msg.channel.send(json.results[index].url)
      msg.channel.send("Gif from Tenor: " + keywords)
    }
  }
}

client.login(TOKEN);
