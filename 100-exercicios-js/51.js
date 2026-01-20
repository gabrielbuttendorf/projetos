// Desenvolva um programa que leia o primeiro termo e a razão
// de uma PA (Progressão Aritmética).
// No final, mostre os 10 primeiros termos dessa progressão.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o 1° termo da PA: ", (inputPrimeiroTermo) => {
  rl.question("Informe a razão da PA: ", (inputRazao) => {
    const primeiroTermo = Number(inputPrimeiroTermo);
    const razao = Number(inputRazao);
    const arrayPA = [];
    let termoAtual = 0;

    for (let i = 1; i <= 10; i++) {
      termoAtual = primeiroTermo + (i - 1) * razao;
      arrayPA.push(termoAtual);
    }

    console.log("\nOs 10 primeiros termos dessa PA são:")
    console.log(arrayPA.join(", "))
    rl.close();
  });
});
