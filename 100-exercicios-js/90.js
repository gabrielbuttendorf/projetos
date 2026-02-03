// Faça um programa que leia nome e média de um aluno,
// guardando também a situação em um dicionário.

// No final, mostre o conteúdo da estrutura na tela.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o nome do aluno: ", (nome) => {
  rl.question("Informe a média do aluno: ", (media) => {
    const aluno = {
      nome,
      media: Number(media),
    };

    console.log(`\nAluno: ${aluno.nome}`)
    console.log(`Média: ${aluno.media}`)

    rl.close();
  });
});
