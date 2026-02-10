// Crie um programa que tenha a função leia_int(),
// que vai funcionar de forma semelhante à função input do Python,
// só que fazendo a validação para aceitar apenas um valor numérico.

// ex.:
// n = leia_int("Digite um n")

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function leia_int(input) {
  if (!Number.isInteger(input)) {
    console.log("Digite um número inteiro.");
    perguntar();
    return;
  }
  console.log(`\nO número ${input} é um número inteiro.`);
  rl.close();
}

function perguntar() {
  rl.question("Informe um número: ", (inputNum) => {
    const numero = Number(inputNum);
    leia_int(numero);
  });
}

perguntar();
