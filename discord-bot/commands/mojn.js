const replies = [
  '🤖👌😍',
  'hej',
  'Velkommen',
  'Er der snart pause?',
]

export default function(msg, args) {
  const index = Math.floor(Math.random() * replies.length)
  const reply = replies[index]
  msg.channel.send(reply)
}


