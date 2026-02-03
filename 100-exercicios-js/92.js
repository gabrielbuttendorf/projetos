// Crie um programa que leia nome, ano de nascimento e carteira de trabalho
// e cadastre-os (com idade) em um dicionário.
// Se por acaso a CTPS for diferente de zero, o dicionário receberá também
// o ano de contratação e o salário.
// Calcule e acrescente, além da idade, com quantos anos
// a pessoa vai se aposentar.

// Obs.: aposentadoria em 35 anos de contribuição.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const anoAtual = new Date().getFullYear();
const trabalhador = {};

rl.question("Informe o nome do trabalhador: ", (nome) => {
  rl.question("Informe o ano de nascimento: ", (anoNasc) => {
    rl.question("Informe o n° da carteira de trabalho: ", (carteira) => {
      trabalhador.nome = nome;
      trabalhador.anoNascimento = Number(anoNasc);
      trabalhador.carteira = Number(carteira);
      trabalhador.idade = anoAtual - Number(anoNasc);

      if (Number(carteira) !== 0) {
        rl.question("Informe o ano de contratação: ", (anoContrat) => {
          rl.question("Informe o salário: ", (salario) => {
            trabalhador.anoContratacao = Number(anoContrat);
            trabalhador.salario = Number(salario);

            const tempoContribuicao = anoAtual - Number(anoContrat);
            const idadeAposentadoria = (35 - tempoContribuicao) + trabalhador.idade;

            trabalhador.idadeAposentadoria = idadeAposentadoria;

            console.log("\n", trabalhador);
            rl.close();
          });
        });
      } else {
        console.log(trabalhador);
        rl.close();
      }
    });
  });
});
