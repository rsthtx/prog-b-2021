console.log("opg 1");

// Lav et program, der tæller nedad fra 10 til 1.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Lav et program, der udregner værdien af 1+2+3+ ... +20 med en løkke.
{
  let sum = 0
  let tal = 0
  while (tal < 20) {
    tal = tal + 1;
    // sum = sum + tal
    sum += tal
  }
  console.log(sum)
}

{
  let sum = 0;
  for (let n = 1; n <= 20; n++) {
    sum += n;
  }
  console.log(sum)
}

console.log("Lav et program, der udskriver 2-tabellen, 3-tabellen, .. op til 10-tabellen.")
for (let multiplier = 2; multiplier <= 10; multiplier++) {
  console.log(multiplier + "-tabellen")

  for (let i = 1; i <= 10; i++) {
    const result = i * multiplier
    console.log(result)
  }
}

// Skriv et program, som for ligningen y=3*x*x+6*x+9 udskriver værdierne 
// af y for x=0, x=1,x= 2, x=3 ... x=10. 
// Ret det derefter til at skrive ud for x=0,x=10,x=20,x=30...x=100.

{
  let x = 0
  while (x <= 10) {
    console.log("y=3*x*x+6*x+9")
    console.log(x)
    console.log(y = 3 * x * x + 6 * x + 9)
    x += 1
  }
}

for (let x = 0; x <= 10; x++) {
  const y = 3 * x * x + 6 * x + 9
  console.log("(x,y) =(" +x +","+y+")")
}