// Faça um programa que leia um número qualquer e mostre o seu fatorial 

// exemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fatorial(n) {
  if (n < 0) {
    return `Fatorial não definido para números negativos.`
  } else if (n === 0 || n === 1) {
    return 1
  } else {
    let resultado = 1;
    for (let i = n; i >= 1; i--) {
      resultado = resultado * i;
    }

    return resultado;
  }
}

rl.question("Informe o número para calcular o fatorial: ", (inputNumero) => {
  const numero = Number(inputNumero);

  console.log(`\nO fatorial de ${numero} é ${fatorial(numero)}`)
  rl.close();
})