// Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com a palavra "São"

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o nome de uma cidade: ", (cidade) => {
  if (cidade.toLowerCase().startsWith("são") || cidade.toLowerCase().startsWith("sao")) {
    console.log("\nA cidade informada COMEÇA com com 'SÃO'.")
  } else {
    console.log("\nA cidade informada NÃO COMEÇA com com 'SÃO'.")
  }
  rl.close();
});
