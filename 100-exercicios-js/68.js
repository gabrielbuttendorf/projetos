// Faça um programa que jogue par ou ímpar com o computador.
// O jogo só será interrompido quando o jogador perder,
// mostrando o total de vitórias consecutivas que ele conquistou, no final do jogo.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let vitorias = 0;
let opcaoVencedora = 0;

function perguntar() {
  rl.question("\nPar ou Ímpar? ", (inputOpcaoJogador) => {
    const opcaoJogador = Number(inputOpcaoJogador);
    if (opcaoJogador !== 1 && opcaoJogador !== 2) {
      console.log("\nValor inválido. Execute novamente.");
      perguntar();
    }

    rl.question("Informe um número até 10: ", (inputJogador) => {
      const numJogador = Number(inputJogador);
      const numComputador = Math.ceil(Math.random() * 10);
      if (numJogador < 0 || numJogador > 10) {
        console.log("\nValor inválido. Execute novamente.");
        perguntar();
      }

      console.clear();
      console.log(`\nJogador: ${numJogador}`);
      console.log(`Computador: ${numComputador}`);

      if ((numJogador + numComputador) % 2 === 0) {
        opcaoVencedora = 1;
        console.log("\nPAR");
      } else {
        opcaoVencedora = 2;
        console.log("\nIMPAR");
      }

      if (opcaoVencedora === opcaoJogador) {
        console.log("\nVocê venceu!");
        vitorias++;
        perguntar();
      } else {
        console.log("\nVocê perdeu :(");
        console.log(`Vitórias consecutivas: ${vitorias}`);
        rl.close();
        return;
      }
    });
  });
}

console.log("\n1. PAR");
console.log("2. ÍMPAR");
perguntar();
