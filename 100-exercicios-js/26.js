// Faça um programa que leia uma frase qualquer e mostre:
// Quantas vezes aparece a letra "a"
// Em que posição ela aparece pela primeira vez
// Em que posição ela aparece pela última vez

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma frase ou palavra qualquer: ", (input) => {
  const arrayInput = input.split('');
  const quantidadeDeLetraA = arrayInput.filter((item) => item.toLowerCase() === 'a')
  const primeiroRegistro = arrayInput.findIndex((item) => item.toLowerCase() === 'a')
  const ultimoRegistro = arrayInput.findLastIndex((item) => item.toLowerCase() === 'a')
  
  console.log(quantidadeDeLetraA.length > 1 ? `\nA letra A apareceu ${quantidadeDeLetraA.length} vezes.` : `\nA letra A apareceu ${quantidadeDeLetraA.length} vez.`)
  console.log(`A primeira letra A aparece no índice ${primeiroRegistro}.`)
  console.log(`A última letra A aparece no índice ${ultimoRegistro}.`)

  rl.close();
})
