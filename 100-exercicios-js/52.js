// Faça um programa que leia um número inteiro e diga se ele é um número primo

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um número inteiro: ", (input) => {
  const numero = Number(input);

  // FINALIZAR LÓGICA...

  rl.close();
})