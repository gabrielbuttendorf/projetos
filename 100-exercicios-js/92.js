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

rl.question("Informe o nome do trabalhador: ", (nome) => {
  rl.question("Informe o ano de nascimento: ", (anoNasc) => {
    rl.question("Informe o n° da carteira de trabalho: ", (carteira) => {
      const trabalhador = {
        nome,
        anoNascimento: Number(anoNasc),
        carteira: Number(carteira),
        idade: anoAtual - Number(anoNasc),
      };

      if (Number(carteira) !== 0) {
        rl.question("Informe o ano de contratação: ", (anoContrat) => {
          rl.question("Informe o salário: ", (salario) => {
            trabalhador.anoContratacao = Number(anoContrat);
            trabalhador.salario = Number(salario);
          });
        });
      }

      console.log(trabalhador);

      rl.close();
    });
  });
});
