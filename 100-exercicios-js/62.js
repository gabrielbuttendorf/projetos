// Melhore o exercício 61, perguntando para o usuário
// se ele quer mostrar mais alguns termos
// O programa encerra quando ele disser que quer mostrar "0 termos"

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question("\nVocê deseja executar novamente? (S/N): ", (resposta) => {
    resposta = resposta.trim().toLowerCase();

    if (resposta === 's') {
      console.clear();
      executar()
    } else if (resposta === 'n') {
      rl.close();
      return;
    } else {
      console.clear();
      console.log(`\nResposta inválida, digite novamente.`)
      perguntar();
    }
  })
}

function executar() {
  rl.question("Informe o 1° termo da PA: ", (inputPrimeiroTermo) => {
    rl.question("Informe a razão da PA: ", (inputRazao) => {
      const primeiroTermo = Number(inputPrimeiroTermo);
      const razao = Number(inputRazao);
      const arrayPA = [];
      let termoAtual = 0;

      let i = 1;

      while (i <= 10) {
        termoAtual = primeiroTermo + (i - 1) * razao;
        arrayPA.push(termoAtual);
        i++;
      }

      console.log("\nOs 10 primeiros termos dessa PA são:");
      console.log(arrayPA.join(", "));
      perguntar();
    });
  });
}

executar();
