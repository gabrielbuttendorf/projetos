// Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento
// Para salários superiores a R$ 1.250,00, calcule um aumento de 10%
// Para os inferiores ou iguais, o aumento é de R$ 15%.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o salário atual: ", (input) => {
  const salario = Number(input);
  let aumento = 0;

  if (salario > 1250) {
    aumento = 0.10;
  } else {
    aumento = 0.15;
  }

  const novoSalario = salario + salario * aumento;

  console.log(`\nSalário atual: ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
  console.log(`Aumento: ${aumento * 100}%`);
  console.log(`Novo salário: ${novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
  rl.close();
})