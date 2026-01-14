// Um professor quer sortear um dos seus quatro alunos para apagar o quadro.
// Faça um programa que ajude ele, lendo o nome deles e escrevendo o do escolhido.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alunos = [];
let i = 1

function perguntar() {
  if (i > 4) {
    console.log(`\nAlunos cadastrados: ${alunos}`);
    sortear()
    rl.close;
    return;
  }

  rl.question(`Informe o nome do ${i}° aluno: `, (aluno) => {
    alunos.push(aluno);
    i++;
    perguntar();
  });
}

function sortear() {
  const indiceSorteado = Math.floor(Math.random() * alunos.length)
  const alunoSorteado = alunos[indiceSorteado]
  console.log(`Aluno sorteado: ${alunoSorteado}`);
}

perguntar();
