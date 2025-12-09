// Crie um script Python que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas de acordo com o valor digitado

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual é o seu nome? ", (entrada) => {
  console.log(`Olá ${entrada}, prazer em conhecer você!`);
  rl.close();
});
