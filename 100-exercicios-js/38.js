// Escreva um programa que leia dois números inteiros e compare-os, mostrando na tela uma mensagem:
// - o primeiro valor é maior
// - o segundo valor é maior
// - não existe valor maior; os dois são iguais

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o 1° valor: ", (valor1) => {
  rl.question("Informe o 2° valor: ", (valor2) => {
    if (valor1 > valor2) {
      console.log("\nO primeiro valor é maior.");
    } else if (valor2 > valor1) {
      console.log("\nO segundo valor é maior.");
    } else {
      console.log("\nNão existe valor maior, os dois são iguais.");
    }

    rl.close();
  });
});
