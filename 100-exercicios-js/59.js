// Crie um programa que leia dois valores e mostre um menu na tela:

// 1: somar
// 2: multiplicar
// 3: maior
// 4: novos números
// 5: sair do programa

// Seu programa deverá realizar a operação solicitada em cada caso

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let valor1, valor2;

function somar(v1, v2) {
  return v1 + v2;
}

function multiplicar(v1, v2) {
  return v1 * v2;
}

function verificarMaior(v1, v2) {
  if (v1 === v2) {
    return `${v1} é igual a ${v2}`;
  } else {
    return v1 > v2
      ? `${v1} é maior do que ${v2}`
      : `${v2} é maior do que ${v1}`;
  }
}

function lerNumeros() {
  console.log("\n================================");
  rl.question("Informe o 1° valor: ", (inputValor1) => {
    rl.question("Informe o 2° valor: ", (inputValor2) => {
      valor1 = Number(inputValor1);
      valor2 = Number(inputValor2);

      exibirMenu();
    });
  });
}

function fecharPrograma() {
  console.log("Fechando programa...");
  rl.close();
}

function exibirMenu() {
  console.log(`\n1. Somar`);
  console.log(`2. Multiplicar`);
  console.log(`3. Verificar o maior`);
  console.log(`4. Novos números`);
  console.log(`5. Sair do programa`);

  rl.question("\nInforme a operação desejada: ", (inputOpcao) => {
    const opcao = Number(inputOpcao);

    switch (opcao) {
      case 1:
        console.clear();
        console.log("-------------------------------");
        console.log("Selecionado: SOMAR");
        console.log(`${valor1} + ${valor2} = ${somar(valor1, valor2)}`);
        console.log("-------------------------------");
        exibirMenu();
        break;
      case 2:
        console.clear();
        console.log("-------------------------------");
        console.log("Selecionado: MULTIPLICAR");
        console.log(`${valor1} x ${valor2} = ${multiplicar(valor1, valor2)}`);
        console.log("-------------------------------");
        exibirMenu();
        break;
      case 3:
        console.clear();
        console.log("-------------------------------");
        console.log("Selecionado: VERIFICAR O MAIOR");
        console.log(`${verificarMaior(valor1, valor2)}`);
        console.log("-------------------------------");
        exibirMenu();
        break;
      case 4:
        console.clear();
        console.log("-------------------------------");
        console.log("Selecionado: NOVOS NÚMEROS");
        console.log("-------------------------------");
        lerNumeros();
        break;
      case 5:
        console.clear();
        console.log("-------------------------------");
        console.log("Selecionado: FECHAR PROGRAMA");
        console.log("-------------------------------");
        fecharPrograma();
        break;
      default:
        console.clear();
        console.log("-------------------------------");
        console.log("Opção inválida. Digite novamente");
        console.log("-------------------------------");
        exibirMenu();
        break;
    }
  });
}

lerNumeros();
