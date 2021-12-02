// include file system
const fs = require("fs")
const inputFileName = "dummy-input.txt"

// read contents of file
let content = fs.readFileSync(inputFileName).toString();

// split the files on linebreaks
let lines = content.split("\n").map(l => l.trim());

// TODO: remove code below and implement a solution instead

// output number of elements in array
console.log("Line count:", lines.length)
console.log("Lines content: ", lines)