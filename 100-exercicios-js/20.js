// O mesmo professor do desafio anterior quer sortear a ordem de apresentação de trabalhos dos alunos.
// Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alunos = [];
let i = 1;

function perguntar() {
  if (i > 4) {
    console.log(`\nAlunos cadastrados: ${alunos}`);
    sortear();
    rl.close();
    return;
  }

  rl.question(`Informe o nome do ${i}° aluno: `, (aluno) => {
    alunos.push(aluno);
    i++;
    perguntar();
  });
}

let alunosSorteados = [];

function sortear() {
  let indiceSorteado = Math.floor(Math.random() * alunos.length);
  let alunoSorteado = alunos[indiceSorteado];

  if (alunosSorteados.length === alunos.length) {
    console.log(`\nOrdem de apresentação: ${alunosSorteados}`);
    return;
  }

  if (alunosSorteados.includes(alunoSorteado)) {
    return sortear();
  }

  alunosSorteados.push(alunoSorteado);
  sortear();
}

perguntar();
