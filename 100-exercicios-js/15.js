// Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado
// e a quantidade de dias pelos quais ele foi alugado.
// Calcule o preço a pagar, sabendo que o carro custa R$ 60 por dia e R$ 0.15 por km rodado

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Informe a quantidade de quilômetros percorridos: ",
  (kmPercorridos) => {
    rl.question(
      "Informe a quantidade de dias que o carro foi alugado: ",
      (diasAlugado) => {
        const precoAPagar = kmPercorridos * 0.15 + diasAlugado * 60;

        console.log(`\nO custo total será de ${precoAPagar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
        rl.close();
      }
    );
  }
);
