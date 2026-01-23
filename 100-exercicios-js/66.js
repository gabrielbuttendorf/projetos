// Crie um programa que leia vários números inteiros pelo teclado
// O programa só vai parar quando o usuário digitar 999,
// que é a condição de parada (flag).
// No final, mostre quantos números foram digitados
// e qual foi a acc entre eles (desconsiderando o flag)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayNumeros = [];
let qtdNumerosDigitados = 0;
let somaNumeros = 0

function perguntar() {
  rl.question("Informe um número [999 para encerrar]: ", (inputNumero) => {
    const numero = Number(inputNumero);

    if (numero === 999) {
      console.log(`\nQuantidade de números digitados: ${qtdNumerosDigitados}`);

      if (arrayNumeros.length > 0) {
        somaNumeros = arrayNumeros.reduce((acumulator, valor) => {
          return acumulator + valor;
        });
      }

      console.log(`Soma entre eles: ${somaNumeros}`);
      rl.close();
      return;
    }

    qtdNumerosDigitados++;
    arrayNumeros.push(numero);
    perguntar();
  });
}

perguntar();
