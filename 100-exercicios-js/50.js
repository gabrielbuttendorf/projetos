// Desenvolva um programa que leia seis números inteiros
// e mostre a soma apenas daqueles que forem pares
// Se o valor digitado for ímpar, desconsidere-o.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
const arrayNumeros = [];

function perguntar() {
  if (i > 6) {
    const somaPares = arrayNumeros.reduce((acc, numeroAtual) => {
      if (numeroAtual % 2 === 0) {
        return acc + numeroAtual
      }

      return acc;
    }, 0)

    console.log(`\nNúmeros informados: ${arrayNumeros.join(", ")}`)
    console.log(`A soma dos números pares é ${somaPares}.`)
    rl.close()
    return;
  }

  rl.question(`Informe o ${i}° número: `, (inputNumero) => {
    arrayNumeros.push(Number(inputNumero));
    i++
    perguntar()
  })
}

perguntar();