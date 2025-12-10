//Crie um algoritmo que leia um número e mostre o seu dobro, o seu triplo e sua raiz quadrada:

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (n) => {
  let num = Number(n);

  console.log(`\nNúmero: ${num}`);
  console.log(`Dobro: ${num * 2}`);
  console.log(`Triplo: ${num * 3}`);
  console.log(`Raiz quadrada: ${Math.sqrt(num)}`);
  rl.close();
});