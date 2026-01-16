// Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos dígitos separado

// ex.: digite um número: 1834
// unidade: 4
// dezenas: 3
// centenas: 8
// milhares: 1

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um número de 0 a 9999: ", (num) => {
  num = num.padStart(4, "0");

  const unidades = num[3];
  const dezenas = num[2];
  const centenas = num[1];
  const milhares = num[0];

  console.log(`\nNúmero digitado: ${num}`);
  console.log(`Unidades: ${unidades}`);
  console.log(`Dezenas: ${dezenas}`);
  console.log(`Centenas: ${centenas}`);
  console.log(`Milhares: ${milhares}`);
  rl.close();
});
