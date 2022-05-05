import fetch from 'node-fetch';

export default async function (msg, tokens) {
  let keywords = 'dog'
  console.log(tokens)
  if (tokens.length > 0) {
    keywords = tokens.join(' ')
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