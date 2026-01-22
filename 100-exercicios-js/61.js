// Refaça o DESAFIO 51, lendo o primeiro termo e a razão de uma PA,
// mostrando os 10 primeiros termos da progressão usando
// a estrutura while

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

    let i = 1;

    while (i <= 10) {
      termoAtual = primeiroTermo + (i - 1) * razao;
      arrayPA.push(termoAtual);
      i++
    }

    console.log("\nOs 10 primeiros termos dessa PA são:");
    console.log(arrayPA.join(", "));
    rl.close();
  });
});
