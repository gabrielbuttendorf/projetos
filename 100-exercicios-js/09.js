// Faça um programa que leia um número inteiro qualquer
// e mostre na tela a sua tabuada

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (num) => {
  console.log("-------------------")
  for(let i = 0; i < 11; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
    rl.close();
  }
  console.log("-------------------")
})