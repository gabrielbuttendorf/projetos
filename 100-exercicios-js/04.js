// Faça um programa que leia algo pelo teclado
// e mostre na tela o seu tipo primitivo
// e todas as informações possíveis sobre ele

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite qualquer coisa: ", (resposta) => {
  console.log(`\nÉ numérico? ${!isNaN(Number(resposta)) ? "Sim." : "Não."}`);
  console.log(`É alfanumérico? ${/^[a-zA-Z0-9]+$/.test(resposta) ? "Sim." : "Não."}`);
  console.log(`É um decimal? ${Number(resposta) % 1 !== 0 ? "Sim." : "Não."}`);
  console.log(`Está em caixa baixa? ${resposta === resposta.toLowerCase() ? "Sim." : "Não."}`);
  console.log(`Está em caixa alta? ${resposta === resposta.toUpperCase() ? "Sim." : "Não."}`);
  console.log(`É apenas espaço em branco? ${!(resposta === resposta.trim()) ? "Sim." : "Não."}`);
  rl.close();
});
