// input argumenter
let args = process.argv.slice(2)
let antalTerninger = Number(args[0]) || 6
let antalSider = Number(args[1]) || 6
let antalSlag = Number(args[2]) || 10000

let sums = [];

for (let index = 0; index < antalSlag; index++) {
  let sum = 0
  for (let i = 0; i < antalTerninger; i++) {
    sum +=  Math.floor(Math.random() * antalSider) + 1
  }
  // Nedstående fungerer ikke da sandsynligheden for de forskellige summer ikke er uniform fordelt
  // sum = Math.floor(Math.random() * (antalTerninger * antalSider - antalTerninger +1)) + antalTerninger

  sums.push(sum);
}

let stats = {}
for (const s of sums) {
  stats[s] = (stats[s] || 0) + 1
}
console.log('stats', stats)
