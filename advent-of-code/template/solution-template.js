const fs = require("fs")
const inputFileName = "dummy-input.txt"

let content = fs.readFileSync(inputFileName).toString()

let lines = content.split("\n").map(l => l.trim())

// TODO: remove code below and implement a solution instead

console.log("Indhold i fil:", content)
// output number of elements in array
console.log("Line count:", lines.length)
console.log("Contents: ", lines)
