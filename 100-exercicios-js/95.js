// Aprimore o DESAFIO 093 para que ele funcione com vários jogadores,
// incluindo um sistema de visualização de detalhes de aproveitamento
// de cada jogador.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listaJogadores = [];

function cadastrarJoagador() {
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

          listaJogadores.push(jogador);

          rl.question(
            "\nDeseja cadastrar um novo jogador? (S/N): ",
            (resposta) => {
              console.clear();
              if (resposta.toLowerCase() === "n") {
                exibirJogador();

                function exibirJogador() {
                  listaJogadores.forEach((jogador, index) => {
                    console.log(index + 1, " - ", jogador.nome);
                  });
                  rl.question(
                    "\nInforme o nome do jogador para ver os detalhes. Caso queira encerrar digite 0: ",
                    (resposta) => {
                      if (resposta === "0") {
                        rl.close();
                        return;
                      }

                      const jogador = listaJogadores.find(
                        (j) => j.nome.toLowerCase() === resposta.toLowerCase(),
                      );

                      if (jogador) {
                        console.log("\n");
                        console.clear();
                        console.log("\n");
                        console.log(jogador);
                        console.log("\n");
                        exibirJogador();
                      } else {
                        console.log("Jogador não encontrado.");
                        exibirJogador();
                      }
                    },
                  );
                }
              }

              cadastrarJoagador();
            },
          );
        }
      }
    });
  });
}

cadastrarJoagador();
