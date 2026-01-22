// Melhore o jogo do DESAFIO 028 onde o computador vai "pensar"
// em um número entre 0 e 10.
// Só que agora o jogador vai tentar adivinhar até acertar,
// mostrando no final quantos palpites foram necessários para vencer

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroSorteado = Math.ceil(Math.random() * 10);
let tentativas = 1;

function perguntar() {
  rl.question("Tente adivinhar o número entre 1 e 10: ", (palpite) => {
    if (Number(palpite) === numeroSorteado) {
      console.log(`\nNúmero sorteado: ${numeroSorteado} | Parabéns, você acertou!`);
      console.log(`Tentativas até acertar: ${tentativas}`);
      rl.close();
    } else {
      console.log(`\nErrou! Tente novamente.`);
      tentativas++;
      perguntar();
    }
  });
}

perguntar();
