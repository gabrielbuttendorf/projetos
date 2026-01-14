// Crie um programa que leia um número real qualquer pelo teclado e mostre na tela a sua porção inteira.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número real: ", (numeroReal) => {
  
  console.log(`\nA porção inteira de ${numeroReal} é ${Number(numeroReal).toFixed(0)}`)
  rl.close()
})