// Faça um programa que mostre a tabuada de vários números,
// um de cada vez, para cada valor digitado pelo usuário.
// O programa será interrompido quando o número solicitado for negativo

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question("Digite um número [Negativo para encerrar]: ", (inputNum) => {
    console.log("-------------------");
    const num = Number(inputNum);

    if (num < 0) {
      console.clear();
      console.log("Encerrando...");
      rl.close();
      return;
    }

    for (let i = 0; i < 11; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log("-------------------");
    perguntar();
  });
}

perguntar();
