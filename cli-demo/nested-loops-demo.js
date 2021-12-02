console.log("While loop demo")
// initalisering
let i = 0

while (i < 5) {
  console.log("do stuff (while)... " + i)

  // increment
  i = i + 1
}
console.log("done")

console.log("For loop demo")

for (let i = 0; i < 3; i++) {
  console.log("do stuff (for)... " + i)
}
console.log("done")

console.log("Nested loop demo")
for (let i = 0; i < 4; i++) {
  console.log("do stuff outer " + i)
  for (let j = 0; j < 3; j++) {
    console.log(" do stuff inner " + j)
  }

}
console.log("done")
