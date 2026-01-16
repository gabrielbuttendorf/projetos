// Escreva um programa que faça o computador "pensar" em um número inteiro entre 1 e 5
// e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
// O programa deverá escrever na tela se o usuário venceu ou perdeu.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroSorteado = Math.ceil(Math.random() * 5);

rl.question("Tente adivinhar o número entre 1 e 5: ", (palpite) => {
  if (Number(palpite) === numeroSorteado) {
    console.log(`\nNúmero sorteado: ${numeroSorteado} | Parabéns, você acertou!`);
  } else {
    console.log(`\nNúmero sorteado: ${numeroSorteado} | Não foi dessa vez :(`);
  }

  rl.close();
});
