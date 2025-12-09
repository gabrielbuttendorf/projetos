// Crie um script Python que leia o dia, o mês e o ano de nascimento de uma pessoa e mostre uma mensagem com a data formatada

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Em qual dia você nasceu? ", (dia) => {
  rl.question("Em qual mês você nasceu? (número) ", (mes) => {
    rl.question("Em qual ano você nasceu? ", (ano) => {

      console.log(`\nData de nascimento: ${dia}/${mes}/${ano}`);
      rl.close();
    });
  });
});
