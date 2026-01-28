// Crie um programa que simule o funcionamento de um caixa eletrônico.
// No início, pergunte ao usuário qual será o valor a ser sacado (inteiro)
// e o programa vai informar quantas cédulas de cada valor serão entregues.

// Obs.: Considere que o caixa possui cédulas de R$100, R$50, R$20 e R$10.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o valor a ser sacado: ", (inputValor) => {
  let valor = Number(inputValor);

  const cedulas100 = Math.floor(valor / 100);
  valor = valor - cedulas100 * 100;

  const cedulas50 = Math.floor(valor / 50);
  valor = valor - cedulas50 * 50;

  const cedulas20 = Math.floor(valor / 20);
  valor = valor - cedulas20 * 20;

  const cedulas10 = Math.floor(valor / 10);
  valor = valor - cedulas10 * 10;

  console.log(`\nCédulas de 100: ${cedulas100}`);
  console.log(`Cédulas de 50: ${cedulas50}`);
  console.log(`Cédulas de 20: ${cedulas20}`);
  console.log(`Cédulas de 10: ${cedulas10}`);

  console.log(
    `\nValor restante que não foi possível sacar: ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
  );

  rl.close();
});
