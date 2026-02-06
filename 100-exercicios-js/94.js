// Crie um programa que leia nome, sexo e idade de várias pessoas,
// guardando os dados de cada pessoa em um dicionário
// e todos os dicionários em uma lista.

// No final, mostre:
// a. Quantas pessoas foram cadastradas
// b. A média de idade do grupo
// c. uma lista com todas as mulheres
// d. uma lista com todas as pessoas com idade acima da média.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pessoas = [];

function perguntar() {
  rl.question("Informe o nome da pessoa: ", (nome) => {
    rl.question("Informe o sexo: ", (sexo) => {
      rl.question("Informe a idade: ", (inputIdade) => {
        const idade = Number(inputIdade);

        if (sexo.toLowerCase() !== "f" && sexo.toLowerCase() !== "m") {
          console.clear();
          console.log("Sexo inválido, realize o cadastro novamente.");
          perguntar();
        } else {
          const pessoa = {
            nome,
            sexo,
            idade,
          };

          pessoas.push(pessoa);
          console.clear();
          rl.question(
            "Pessoa cadastrada! Deseja cadastrar outra? ",
            (resposta) => {
              if (resposta.toLowerCase() === "n") {

                const somaIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
                const mediaIdades = somaIdades / pessoas.length;
                const mulheres = pessoas.filter((pessoa) => pessoa.sexo.toLowerCase() === 'f');
                const pessoasIdadeAcimaDaMedia = pessoas.filter((pessoa) => pessoa.idade > mediaIdades)

                // Mostrar os resultados
                console.clear();
                console.log("\nPessoas cadastradas: ", pessoas.length);
                console.log("Média de idade do grupo: ", mediaIdades.toFixed(0));
                console.log("\nMulheres do grupo: ", mulheres);
                console.log("\nPessoas com idade acima da média: ", pessoasIdadeAcimaDaMedia);
                rl.close();
                return;
              } else {
                console.clear();
                perguntar();
              }
            },
          );
        }
      });
    });
  });
}

perguntar();
