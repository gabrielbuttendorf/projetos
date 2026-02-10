// Faça um programa que tenha uma função chamada ficha(), que receba dois parâmetros:
// o nome de um jogador e quantos gols ele marcou.

// O programa deverá ser capaz de mostrar a ficha do jogador, mesmo que algum dado não tenha sido informado corretamente.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ficha(nome = "Não informado", gols = 0) {
  const partidas = 10;
  const aproveitamento = gols / partidas;

  const ficha = {
    nome,
    gols,
    aproveitamento,
  };

  console.log("\n", ficha);
}

rl.question("Informe o nome do jogador: ", (inputNome) => {
  rl.question(
    "Informe quantos gols ele marcou nas últimas 10 partidas: ",
    (inputGols) => {
      ficha(inputNome, Number(inputGols));
      rl.close();
    },
  );
});
