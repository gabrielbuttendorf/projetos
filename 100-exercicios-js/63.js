// Escreva um programa que leia um número n inteiro qualquer
// e mostre na tela os primeiros n elementos e uma sequência de Fibonacci

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584 (...)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayFibonacci = [];

rl.question("Quantos elementos da Fibonacci você quer ver? ", (inputN) => {
  const n = Number(inputN);
  let termo1 = 0;
  let termo2 = 1;
  let termoAtual = 1;

  for (let i = 1; i <= n; i++) {
    arrayFibonacci.push(termoAtual);
    termoAtual = termo1 + termo2;
    termo1 = termo2;
    termo2 = termoAtual;
  }

  console.log("\n", arrayFibonacci.join(" "));

  rl.close();
});
