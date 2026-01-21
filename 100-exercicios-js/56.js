// Desenvolva um programa que leia nome, idade e sexo de 4 pessoas. No final do programa, mostre:
//  - A média de idade do grupo
//  - Qual é o nome do homem mais velho
//  - Quantas mulheres têm menos de 20 anos

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pessoas = [];
let i = 1;

function perguntar() {
  if (i > 4) {
    const somaIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
    const mediaIdades = somaIdades / pessoas.length;

    const homens = pessoas.filter(
      (pessoa) => pessoa.sexo.toLowerCase() === "m",
    );
    const mulheres = pessoas.filter(
      (pessoa) => pessoa.sexo.toLowerCase() === "f",
    );

    const homemMaisVelho =
      homens.length > 0
        ? homens.reduce((maisVelha, pessoaAtual) => {
            return maisVelha.idade < pessoaAtual.idade
              ? pessoaAtual
              : maisVelha;
          })
        : null;

    const mulheresMenosQueVinte = mulheres.filter(
      (mulher) => mulher.idade < 20,
    );

    console.log(`\nMédia de idade do grupo: ${mediaIdades.toFixed(0)} anos`);
    console.log(
      `Nome do homem mais velho: ${homemMaisVelho ? homemMaisVelho.nome : "Não existem homens na lista"}`,
    );
    console.log(
      `Quantidade de mulheres com menos de 20 anos: ${mulheresMenosQueVinte.length}`,
    );

    rl.close();
    return;
  }

  rl.question(`\nInforme o nome da ${i}° pessoa: `, (nome) => {
    rl.question(`Idade: `, (idade) => {
      rl.question(`Sexo (M/F): `, (sexo) => {
        const pessoa = {
          nome: nome,
          idade: Number(idade),
          sexo: sexo,
        };

        pessoas.push(pessoa);
        i++;
        perguntar();
      });
    });
  });
}

perguntar();
