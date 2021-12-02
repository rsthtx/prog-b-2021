# Advent of code

Julekalender for softwareudviklere

- [Advent of Code](https://adventofcode.com/)
- [Første låge](https://adventofcode.com/2021/day/1)

## Hints til løsning
- Log in med github på [Advent of Code](https://adventofcode.com/)
- Lav en ny mappe, f.eks. `day1`
- Hent dit personlige input data og gem det i en fil på din computer, f.eks. `day1/input.txt`
- Lav `day1/solution.js` i samme mappe som input filen
- Løs opgaven ;-)

Her er en [stump kode](template/solution-template.js), der kan bruges som inpspiration til starten på en løsning.

```js
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
```

## Materiale

- [Node.js](https://nodejs.org)
- [Node intro](https://getsrevel.github.io/tech/node/intro/) - getsrevel
- [fs.readFileSync()](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)
- [Command line basics](https://getsrevel.github.io/tools/command-line/)
