// Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o seu salário atual: ", (entrada) => {
  const salarioAtual = Number(entrada);
  const acrescimo = salarioAtual * 0.15;
  const novoSalario = salarioAtual + acrescimo;
  const novoSalarioFormatado = novoSalario.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(
    `\nO seu salário com aumento de 15% ficará em ${novoSalarioFormatado}`
  );
  rl.close();
});
