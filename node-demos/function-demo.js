console.log('hej')

function checkCode(secret, guess) {
  if(guess == secret){
    return 'xxxx'
  }
  return 'xxoo'
}

console.log(checkCode([1,2,3,4],'1256') == 'xxoo')
console.log(checkCode('1234','1234') == 'xxxx')
console.log(checkCode('1234','2134') == 'xxoo')
console.log(checkCode('1234','2156') == 'oo')