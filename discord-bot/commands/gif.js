import fetch from 'node-fetch';

export default async function (msg, args) {
  let keywords = 'dog'

  if (args.length > 0) {
    keywords = args.join(' ')
  }

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