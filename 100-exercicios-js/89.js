/*
Crie um programa que leia nome e duas notas de vários alunos
e guarde tudo em uma lista composta.

No final, mostre um boletim contendo a média de cada um
e permita que o usuário possa mostrar as notas de cada aluno individualmente

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alunos = [];

function perguntar() {
  rl.question("Informe o nome: ", (nome) => {
    rl.question("Informe a 1° nota: ", (inputNota1) => {
      rl.question("Informe a 2° nota: ", (inputNota2) => {
        const nota1 = Number(inputNota1);
        const nota2 = Number(inputNota2);
        const media = (nota1 + nota2) / 2;
        alunos.push({ nome, nota1, nota2, media });

        rl.question("Deseja continuar (S/N)? ", (resposta) => {
          if (resposta.toLowerCase() === "n") {
            exibirBoletim();
            exibirAluno();
            return;
          }

          perguntar();
        });
      });
    });
  });
}

function exibirAluno() {
  rl.question(
    "\nDeseja ver as notas de algum aluno? Digite o nome dele. Caso queira encerrar digite 0: ",
    (resposta) => {
      if (resposta === "0") {
        rl.close();
        return;
      }

      alunos.forEach((aluno) => {
        if (aluno.nome.toLowerCase() === resposta.toLowerCase()) {
          console.clear();
          console.log(aluno);
          exibirBoletim();
          exibirAluno();
        }
        return;
      });

      console.log("Aluno não encontrado.");
      exibirAluno();
    },
  );
}

function exibirBoletim() {
  console.log("\n========== BOLETIM ==========\n");
  for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome.padEnd(15), "| Média: ", alunos[i].media);
  }
}

perguntar();
