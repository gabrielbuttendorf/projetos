// Crie um programa que tenha uma tupla totalmente preenchida
// com uma contagem por extenso de zero até vinte

// Seu programa deverá ler um número pelo teclado
// (entre 0 e 20)
// e mostrá-lo por extenso

const extensos = [
  "zero",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
  "onze",
  "doze",
  "treze",
  "catorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
  "vinte",
];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question("Digite um número entre 0 e 20: ", (inputNumero) => {
    const numero = Number(inputNumero);

    if (numero < 0 || numero > 20) {
      console.log("Valor inválido.");
      perguntar();
      return;
    }

    console.log(`\nNúmero por extenso: ${extensos[numero]}`);
    rl.close();
  });
}

perguntar();
