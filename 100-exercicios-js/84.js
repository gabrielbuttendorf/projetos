/*
Faça um programa que leia nome e peso de várias pessoas
guardando tudo em uma lista.
No final, mostre:

a: quantas pessoas foram cadastradas.
b: uma listagem com as pessoas mais pesadas
c: uma listagem com as pessoas mais leves

Obs.: Gerar uma lista com os mais leves e mais pesados
Vai depender de analisar qual é o mais leve e o mais pesado.
Se houver mais de um com esse peso, insere na lista.
O mais normal é que a lista de mais pesados tenha apenas 1 pessoa,
que é o motivo pelo qual a lista existe.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pessoas = [];

function perguntar() {
  rl.question("Informe o nome: ", (nome) => {
    rl.question("Informe o peso: ", (inputPeso) => {
      const peso = Number(inputPeso);
      pessoas.push({ nome, peso });

      rl.question("Deseja continuar? (S/N) ", (resposta) => {
        if (resposta.toLowerCase() === "n") {

          const maiorPesoDaLista = Math.max(...pessoas.map((pessoa) => pessoa.peso))
          const menorPesoDaLista = Math.min(...pessoas.map((pessoa) => pessoa.peso))
          
          const pessoasMaisPesadas = pessoas.filter((pessoa) => pessoa.peso === maiorPesoDaLista);
          const pessoasMaisLeves = pessoas.filter((pessoa) => pessoa.peso === menorPesoDaLista);

          console.clear();
          console.log(`\nPessoas cadastradas: ${pessoas.length}`);
          console.log("\nPessoas mais pesadas");
          console.log(pessoasMaisPesadas);
          console.log("\nPessoas mais leves:");
          console.log(pessoasMaisLeves);
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
