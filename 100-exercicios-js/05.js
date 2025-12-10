// Faça um programa que leia um número inteiro e mostre na tela o seu sucessor e seu antecessor:

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (n) => {
  let num = Number(n);

  console.log(`\nNúmero: ${num}`);
  console.log(`Antecessor: ${num - 1}`);
  console.log(`Sucessor: ${num + 1}`);
  rl.close();
});
