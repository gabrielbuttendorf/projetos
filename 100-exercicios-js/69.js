// Crie um programa que leia a idade e o sexo de várias pessoas.
// A cada pessoa cadastrada, o programa deverá perguntar
// se o usuário quer ou não continuar.
// No final, mostra:

// a) quantas pessoas têm mais de 18 anos
// b) quantos homens foram cadastrados
// c) quantas mulheres têm menos de 20 anos

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pessoas = [];

function perguntar() {
  rl.question("Informe a idade: ", (inputIdade) => {
    rl.question("Informe o sexo: ", (inputSexo) => {
      const idade = Number(inputIdade);
      const sexo = inputSexo.toLowerCase();
      const pessoa = { idade, sexo };

      if (sexo === "f" || sexo === "m") {
        pessoas.push(pessoa);
        console.log("\nPessoa cadastrada!");
      } else {
        console.log("\nPessoa não cadastrada. Revise as informações.");
      }

      rl.question("\nDeseja continuar (S/N)? ", (inputResposta) => {
        const resposta = inputResposta.toLowerCase();

        if (resposta === "n") {
          const maiorDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
          const homens = pessoas.filter((pessoa) => pessoa.sexo === "m");
          const mulheresAbaixoDeVinte = pessoas.filter((pessoa) => pessoa.sexo === "m" && pessoa.idade < 20);

          console.clear();
          console.log(`\nPessoas maior de idade: ${maiorDeIdade.length}`)
          console.log(`Homens: ${homens.length}`)
          console.log(`Mulheres com menos de 20 anos: ${mulheresAbaixoDeVinte.length}`)
          
          rl.close();
          return;
        }

        console.clear();
        perguntar();
      });
    });
  });
}

perguntar();
