// Crie um programa que leia o ano de nascimento de sete pessoas
// No final, mostre quantas pessoas ainda não atingiram a maioridade
// e quantas já são maiores

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
const arrayNascimentos = [];
const anoAtual = new Date().getFullYear();

function perguntar() {
  if (i > 7) {
    const maioresDeIdade = arrayNascimentos.filter((anoNasc) => anoAtual - anoNasc >= 18)
    const menoresDeIdade = arrayNascimentos.filter((anoNasc) => anoAtual - anoNasc < 18)

    console.log(`\nMaiores de idade: ${maioresDeIdade.length}`)
    console.log(`Menores de idade: ${menoresDeIdade.length}`)
    rl.close();
    return;
  }

  rl.question(`Informe o ano de nascimento da ${i}° pessoa: `, (inputAnoNascimento) => {
    const anoNascimento = Number(inputAnoNascimento);
    arrayNascimentos.push(anoNascimento);
    i++;
    perguntar();
  });
}

perguntar();
