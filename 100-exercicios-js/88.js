// Faça um programa que ajude um jogador da MEGA SENA a criar palpites.

// O programa vai perguntar quantos jogos serão gerados
// e vai sortear 6 números entre 1 e 60 para cada jogo,
// cadastrando tudo em uma lista composta.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const jogos = [];

rl.question("Quantos jogos você quer fazer? ", (inputQtdJogos) => {
  const qtdJogos = Number(inputQtdJogos);

  for (let linha = 0; linha < qtdJogos; linha++) {
    jogos[linha] = []
    for (let coluna = 0; coluna < 6; coluna++) {
      const valorSorteado = Math.floor(Math.random() * 60) + 1;
      jogos[linha][coluna] = valorSorteado;
    }
  }

  console.log("\n", jogos);
  rl.close();
});
