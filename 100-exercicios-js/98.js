// Faça um programa que tenha uma função chamada contador(), que recebe três parâmetros:
// início, fim e passo
// E realize a contagem

// Seu programa tem que realizar três contagens através da função criada

// a) de 1 até 10, de 1 em 1
// b) de 10 até 0, de 2 em 2
// c) Uma contagem personalizada

// --> print(f"{valor} ", end="")  # Exemplo de print espaçado

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function executar() {
  rl.question("Informe um valor de ínicio: ", (inputInicio) => {
    rl.question("Informe um valor de fim: ", (inputFim) => {
      rl.question("Informe um valor de passo: ", (inputPasso) => {
        const inicio = Number(inputInicio);
        const fim = Number(inputFim);
        const passo = Number(inputPasso);

        contador(inicio, fim, passo);

        rl.close();
      })
    })
  })
}

function contador(inicio, fim, passo) {
  if (inicio > fim) {
    for (inicio; inicio >= fim; inicio -= passo) {
      const valor = inicio;
      console.log(valor);
    }
  } else {
    for (inicio; inicio <= fim; inicio += passo) {
      const valor = inicio;
      console.log(valor);
    }
  }
}

executar();
