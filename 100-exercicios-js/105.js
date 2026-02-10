// Faça um programa que tenha uma função notas()
// que pode receber várias notas de alunos e vai retornar um dicionário com as seguintes informações:

// quantidade de notas
// a maior nota
// a menor nota
// a média da turma
// a situação (opcional)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listaNotas = [];

function extrairDadosNotas(listaNotas) {
  const qtdNotas = listaNotas.length;
  const maiorNota = Math.max(...listaNotas);
  const menorNota = Math.min(...listaNotas);
  const media = listaNotas.reduce((acc, nota) => acc + nota, 0) / listaNotas.length;
  const situacaoTurma = media >= 7 ? "Aprovada" : "Reprovada";

  return dadosNotas = {
    qtdNotas,
    maiorNota,
    menorNota,
    media,
    situacaoTurma,
  }
}

function perguntarNotas() {
  console.clear();
  rl.question("Informe uma nota: ", (inputNota) => {
    const nota = Number(inputNota);

    if (nota >= 0 && nota <= 10) {
      listaNotas.push(nota);
    }

    rl.question("Deseja informar uma nova nota? ", (resposta) => {
      if (resposta.toLowerCase() === "n") {
        rl.close();
        const dadosNotas = extrairDadosNotas(listaNotas);

        console.log(dadosNotas)
        return;
      }

      perguntarNotas();
    });
  });
}

perguntarNotas();
