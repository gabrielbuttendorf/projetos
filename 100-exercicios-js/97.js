// Faça um programa que tenha uma função chamada escreva(),
// que receba um texto qualquer como parâmetro
// e mostre uma mensagem com tamanho adaptável.

// Ex:
// escreva("Olá, Mundo!")

// Saída:

// ~~~~~~~~~~~
// Olá, Mundo!
// ~~~~~~~~~~~

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function escreva(texto) {
  console.log("\n~~~~~~~~~~~~");
  console.log(texto);
  console.log("~~~~~~~~~~~~");
}

rl.question("Digite uma palavra qualquer: ", (palavra) => {
  escreva(palavra);
  rl.close();
})
