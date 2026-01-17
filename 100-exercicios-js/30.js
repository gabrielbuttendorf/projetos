// Crie um programa que leia um número inteiro e mostre na tela se ele é PAR ou ÍMPAR.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um número: ", (input) => {
  const numero = Number(input);

  if (numero % 2 === 0) {
    console.log(`\n${numero} é PAR.`);
  } else {
    console.log(`\n${numero} é ÍMPAR.`);
  }

  rl.close();
});
