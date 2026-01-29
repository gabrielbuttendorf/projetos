// Crie um programa que tenha uma tupla única
// com nomes de produtos e seus respectivos precos.

// No final, mostre uma listagem de precos,
// organizando os dados em forma tabular

const produtos = [
  {
    nome: "pão",
    preco: 5.5,
  },
  {
    nome: "leite",
    preco: 4.5,
  },
  {
    nome: "frango",
    preco: 12.9,
  },
];

for (let i = 0; i < produtos.length; i++) {
  console.log(
    `${produtos[i].nome.padEnd(15)} | ${produtos[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
  );
}
