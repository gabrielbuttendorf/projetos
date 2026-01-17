// Faça um programa que leia um ano qualquer e mostre se ele é BISSEXTO

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um ano: ", (input) => {
  const ano = Number(input);

  if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    console.log(`\n${ano} é BISSEXTO.`);
  } else {
    console.log(`\n${ano} não é BISSEXTO.`);
  }

  rl.close();
});
