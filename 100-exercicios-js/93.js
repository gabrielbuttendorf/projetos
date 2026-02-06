// Crie um programa que gerencie o aproveitamento de um jogador de futebol.
// O programa vai ler o nome do jogador e quantas partidas ele jogou.
// Depois vai ler a quantidade de gols feitos em cada partida.
// No final, tudo isso será guardado em um dicionário,
// incluindo o total de gols feitos durante o campeonato.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o nome do jogador: ", (nome) => {
  rl.question("Informe quantas partidas ele jogou: ", (partidas) => {
    const partidasJogadas = partidas;
    let gols = 0;
    let partida = 1;

    perguntar();

    function perguntar() {
      if (partida <= partidasJogadas) {
        rl.question(`Quantos gols ele fez na partida ${partida}? `, (gol) => {
          gols += Number(gol);
          partida++;
          perguntar();
        });
      } else {
        const aproveitamento = gols / partidasJogadas;

        const jogador = {
          nome,
          partidasJogadas,
          gols,
          aproveitamento,
        };

        console.clear();
        console.log("\n", jogador);
        rl.close();
      }
    }
  });
});
