// Faça um programa que leia um número inteiro e diga se ele é um número primo

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um número inteiro: ", (input) => {
  const numero = Number(input);
  let divisores = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores ++
    }
  }

  if (divisores === 2) {
    console.log(`\n${numero} é um número primo.`)
  } else {
    console.log(`\n${numero} NÃO é um número primo.`)
  }

  rl.close();
})