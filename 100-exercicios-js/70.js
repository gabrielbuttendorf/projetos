// Crie um programa que leia o nome e o preço de vários produtos.
// O programa deverá perguntar se o usuário vai continuar.
// No final, mostre:

// a) qual é o total gasto na compra
// b) quantos produtos custam mais de R$ 1000
// c) qual é o nome do produto mais barato

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const produtos = [];

function perguntar() {
  rl.question("Informe o nome do produto: ", (inputNome) => {
    rl.question("Informe o preço do produto: ", (inputPreco) => {
      const nome = inputNome.toUpperCase();
      const preco = Number(inputPreco);
      const produto = { nome, preco };

      console.log("\nProduto cadastrado!");
      produtos.push(produto);

      rl.question("\nDeseja continuar (S/N)? ", (inputResposta) => {
        const resposta = inputResposta.toLowerCase();

        if (resposta === "n") {
          const totalGasto = produtos.reduce(
            (acc, produto) => acc + produto.preco,
            0,
          );
          const precoAcimaDeMil = produtos.filter(
            (produto) => produto.preco >= 1000,
          );

          let produtoMaisBarato = produtos[0];

          for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].preco < produtoMaisBarato.preco) {
              produtoMaisBarato = produtos[i];
            }
          }

          console.clear();
          console.log(`\nTotal gasto na compra: ${totalGasto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
          console.log(`Produtos acima de R$ 1.000,00: ${precoAcimaDeMil.length}`);
          console.log(`Nome do produto mais barato: ${produtoMaisBarato.nome}`);
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
