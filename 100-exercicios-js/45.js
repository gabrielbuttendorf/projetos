// Crie um programa que faça o computador jogar Pedra, papel, tesoura com você.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\n1. Pedra");
console.log("2. Papel");
console.log("3. Tesoura");

rl.question("\nFaça a sua escolha: ", (inputOpcao) => {
  const opcaoJogador = Number(inputOpcao);
  const opcaoComputador = Math.ceil(Math.random() * 3);

  const ppt = {
    1: "Pedra",
    2: "Papel",
    3: "Tesoura",
  };

  if (opcaoJogador < 1 || opcaoJogador > 3) {
    console.log("Opção inválida. Execute novamente.");
    rl.close();
    return;
  }

  if (opcaoJogador === opcaoComputador) {
    console.log(`\n${ppt[opcaoJogador]} vs ${ppt[opcaoComputador]}`);
    console.log("EMPATE!");
  } else if (
    (opcaoJogador === 1 && opcaoComputador === 3) ||
    (opcaoJogador === 2 && opcaoComputador === 1) ||
    (opcaoJogador === 3 && opcaoComputador === 2)
  ) {
    console.log(`\n${ppt[opcaoJogador]} vs ${ppt[opcaoComputador]}`);
    console.log("VITÓRIA!");
  } else {
    console.log(`\n${ppt[opcaoJogador]} vs ${ppt[opcaoComputador]}`);
    console.log("DERROTA!");
  }

  rl.close();
});
