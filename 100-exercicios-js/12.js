// Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o preço do produto: ", (precoOriginal) => {
  const desconto = precoOriginal * 0.05;
  const precoComDesconto = precoOriginal - desconto;
  const precoFormatado = precoComDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(`\nO preço com 5% de desconto fica ${precoFormatado}`);
  rl.close();
});
