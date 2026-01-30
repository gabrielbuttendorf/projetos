// Crie um programa que crie uma matriz 3.3
// e preencha com valores lidos pelo teclado.

// No final, mostre a matriz na tela com a formatação correta

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const matriz = [[], [], []];

let i = 0;
let j = 0;

function perguntar() {
  if (i > 2) {
    console.clear();

    console.log(`\n`);
    for (let linha = 0; linha < 3; linha++) {
      console.log(matriz[linha]);
    }

    rl.close();
    return;
  }

  rl.question(`Informe o valor para a posição ${i}, ${j}: `, (inputValor) => {
    const valor = Number(inputValor);
    matriz[i][j] = valor;

    if (j === 2) {
      i++;
      j = 0;
    } else {
      j++;
    }

    perguntar();
  });
}

perguntar();
