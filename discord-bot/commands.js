import mojn from './commands/mojn.js'
import gif from './commands/gif.js'

const commands = { 
  mojn, 
  gif,
}

export default async function(msg) {
  const s = `User ${msg.author.username} wrote: ${msg.content}`
  console.log(s)

  const botTestingChannel = process.env.CHANNEL_ID

  if (msg.channel.id === botTestingChannel) {

    let tokens = msg.content.split(' ')

    let command = tokens.shift()
    if(command.charAt(0) === '!'){
      // valid command
      command = command.substring(1)
      if(commands[command] != undefined){
        commands[command](msg, tokens)
      }
    }
  }
}
