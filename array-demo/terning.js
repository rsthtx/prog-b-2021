let sum = 0
for (let i = 0; i < 6; i++) {
  let value = Math.floor(Math.random() * 6) + 1
  console.log('slag nr', i,':', value)
  sum += value
}
console.log('sum', sum)

