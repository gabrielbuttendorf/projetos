// Crie um programa que leia o nome completo de uma pessoa:
// Mostre o nome com todas as letras maiúsculas
// Mostre o nome com todas as letras minúsculas
// Mostre quantas letras ao todo (sem considerar espaços)
// Mostre quantas letras tem o primeiro nome:

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um nome completo: ", (nome) => {
  const nomeTodoMaiusculo = nome.toUpperCase();
  const nomeTodoMinusculo = nome.toLowerCase();
  const quantidadeDeLetras = nome.replace(/\s/g, '').length;
  const primeiroNome = nome.replace(/\s.*/g, '');
  const quantidadeDeLetrasPrimeiroNome = nome.replace(/\s.*/g, '').length;

  console.log(`\nNome com todas as letras maiúsculas: ${nomeTodoMaiusculo}`)
  console.log(`Nome com todas as letras minúsculas: ${nomeTodoMinusculo}`)
  console.log(`Quantidade de letras no nome: ${quantidadeDeLetras}`)
  console.log(`Primeiro nome: ${primeiroNome}`)
  console.log(`Quantidade de letras no primeiro nome: ${quantidadeDeLetrasPrimeiroNome}`)

  rl.close();
})