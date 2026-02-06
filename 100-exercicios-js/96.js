// Faça um programa que tenha uma função chamada area(),
// que receba dimensões de um terreno retangular (largura e comprimento)
// e mostre a área do terreno

function area(largura, comprimento) {
  console.log(`\nÁrea do terreno: ${largura * comprimento} m²`);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe a largura do terreno: ", (largura) => {
  rl.question("Informe o comprimento do terreno: ", (comprimento) => {
    area(Number(largura), Number(comprimento));

    rl.close();
  });
});
