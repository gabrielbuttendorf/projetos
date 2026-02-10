// Crie um programa que tenha uma função chamada voto()
// que vai receber como parâmetro o ano de nascimento de uma pessoa,
// retornando um valor literal indicando se uma pessoa tem voto
// NEGADO, OPCIONAL ou OBRIGATORIO nas eleições.

function voto(anoNasc) {
  const anoAtual = new Date().getFullYear();

  if (anoAtual - anoNasc < 16) {
    return "NEGADO";
  } else if (anoAtual - anoNasc < 18 || anoAtual - anoNasc >= 60) {
    return "OPCIONAL";
  } else {
    return "OBRIGATÓRIO";
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o ano de nascimento: ", (inputAno) => {
  const ano = Number(inputAno);
  const resultado = voto(ano);

  console.log(`\nO voto é ${resultado}`);
  rl.close();
});
