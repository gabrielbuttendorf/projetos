// Faça um programa que leia 5 números e guarde-os em uma lista.
// No final, mostre qual foi o maior e o menor valor digitados
// e as suas respectivas posições na lista.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
const numeros = [];

function perguntar() {
  if (i > 5) {
    console.clear();
    console.log(`\nNúmeros: ${numeros.join(", ")}`);
    console.log(`Maior valor: ${Math.max(...numeros)} - Posição ${numeros.findIndex((num) => num === Math.max(...numeros))}`)
    console.log(`Menor valor: ${Math.min(...numeros)} - Posição ${numeros.findIndex((num) => num === Math.min(...numeros))}`)
    rl.close();
    return;
  }

  rl.question(`Informe o ${i}° número: `, (inputNumero) => {
    const numero = Number(inputNumero);
    numeros.push(numero);
    i++
    perguntar();
  });
}

perguntar();
