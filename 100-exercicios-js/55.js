// Faça um programa que leia o peso de cinco pessoas
// No final, mostre qual foi o maior e o menor peso lidos

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
const arrayPesos = [];

function perguntar() {
  if (i > 5) {
    console.log(`\nMaior peso da lista: ${Math.max(...arrayPesos)}`)
    console.log(`Menor peso da lista: ${Math.min(...arrayPesos)}`)

    rl.close();
    return;
  }

  rl.question(`Informe o peso da ${i}° pessoa (kg): `, (inputPeso) => {
    const peso = Number(inputPeso);
    arrayPesos.push(peso);
    i++;
    perguntar();
  });
}

perguntar();