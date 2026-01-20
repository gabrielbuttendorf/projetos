/*
Elabore um programa que calcule o valor a ser pago por um produto,
considerando o seu preço normal, e condição de pagamento:

- à vista dinheiro: 10% de desconto
- à vista no cartão: 5% de desconto
- em até 2x no cartão: preço normal
- em 3x ou mais no cartão: 5% de juros
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o preço do produto: ", (inputPreco) => {
  console.log("\n1. Dinheiro ou Pix - 10% de desconto");
  console.log("2. Débito/Crédito à vista - 5% de desconto");
  console.log("3. Crédito parcelado até 2x - Preço normal");
  console.log("4. Crédito parcelado 3x ou mais - 5% de juros");

  rl.question("\nEscolha a forma de pagamento: ", (inputOpcao) => {
    const preco = Number(inputPreco);
    const opcao = Number(inputOpcao);

    switch (opcao) {
      case 1:
        console.log(`\nValor total a pagar: ${(preco - preco * 0.1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
      case 2:
        console.log(`\nValor total a pagar: ${(preco - preco * 0.05).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
      case 3:
        console.log(`\nValor total a pagar: ${(preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
      case 4:
        console.log(`\nValor total a pagar: ${(preco + preco * 0.05).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
      default:
        break;
    }

    rl.close();
  });
});
