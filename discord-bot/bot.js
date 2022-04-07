const { Client, Intents } = require('discord.js');
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

function messageCreated(msg) {
  const s = `User ${msg.author.username} wrote: ${msg.content}`
  console.log(s)

  const botTestingChannel = process.env.CHANNEL_ID

  const replies = [
    '🤖👌😍',
    'hej',
    'Velkommen',
    'Er der snart pause?',
  ]

  if (msg.channel.id === botTestingChannel && msg.content === 'mojn') {

    const index = Math.floor(Math.random() * replies.length)
    const reply = replies[index]
    msg.channel.send(reply)
  }
}

client.login(TOKEN);
