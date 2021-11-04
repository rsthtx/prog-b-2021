
// create empty object
let obj = {}
let x = 5

console.log(x, obj)

obj[x] = (obj[x] || 0) + 1
console.log(x, obj)

obj[x] = (obj[x] || 0) + 1
obj[x] = (obj[x] || 0) + 1
obj[x] = (obj[x] || 0) + 1

console.log(x, obj)

x = 7

if(obj[x] != undefined){
  // obj[x] = obj[x] + 1
  obj[x] += 1
} else {
  obj[x] = 1
}

console.log(x, obj)


if(obj[x] != undefined){
  // obj[x] = obj[x] + 1
  obj[x] += 1
} else {
  obj[x] = 1
}

console.log(x, obj)