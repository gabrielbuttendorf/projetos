// Aprimore o desafio anterior, mostrando no final:

// a: a soma de todos os valores pares digitados
// b: a soma dos valores da terceira coluna
// c: o maior valor da segunda linha

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

    const somaDosPares = somarPares();
    console.log(`\nSoma de todos os pares: ${somaDosPares}`);

    const somaTerceiraColuna = somarTerceiraColuna();
    console.log(`Soma da terceira coluna: ${somaTerceiraColuna}`);

    const maiorValorSegundaLinha = retornarMaiorValorSegundaLinha();
    console.log(`Maior valor da segunda linha: ${maiorValorSegundaLinha}`);

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

function somarPares() {
  let somaDosPares = 0;
  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (matriz[linha][coluna] % 2 === 0) {
        somaDosPares += matriz[linha][coluna];
      }
    }
  }

  return somaDosPares;
}

function somarTerceiraColuna() {
  let somaTerceiraColuna = 0;
  for (let linha = 0; linha < 3; linha++) {
    somaTerceiraColuna += matriz[linha][2];
  }

  return somaTerceiraColuna;
}

function retornarMaiorValorSegundaLinha() {
  const segundaLinha = [];
  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      if (linha === 1) {
        segundaLinha.push(matriz[linha][coluna]);
      }
    }
  }

  const maiorValorSegundaLinha = Math.max(...segundaLinha);
  return maiorValorSegundaLinha;
}

perguntar();
