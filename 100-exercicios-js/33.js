// Faça um programa que leia três números e mostre qual é o maior e qual é o menor

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const array = [];
let i = 1;

function perguntar() {
  if (i > 3) {
    console.log("\nNúmeros informados: ", array);
    console.log(`Menor número: ${Math.min(...array)}`)
    console.log(`Maior número: ${Math.max(...array)}`)
    rl.close();
    return;
  }

  rl.question(`Informe o ${i}° número: `, (input) => {
    let numero = Number(input);

    array.push(numero);
    i++;
    perguntar();
  });
}

perguntar();
