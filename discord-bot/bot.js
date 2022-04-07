const fetch = require('node-fetch')

const { Client, Intents } = require('discord.js')
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
    if (msg.content === '!mojn') {
      const index = Math.floor(Math.random() * replies.length)
      const reply = replies[index]
      msg.channel.send(reply)
    } else if (msg.content === '!gif') {
      const url = `https://g.tenor.com/v1/search?q=cat&key=${process.env.TENORKEY}&limit=8`
      const result = await fetch(url)
      const json = await result.json()
      msg.channel.send(json.results[0].url)
    }
  }
}

client.login(TOKEN);
