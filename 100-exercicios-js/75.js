// Desenvolva um programa que leia quatro valores pelo teclado
// e guarde-os em uma tupla.
// No final, mostre:

// a) quantas vezes apareceu o valor 9
// b) em que posição foi digitado o primeiro valor 3
// b) quais foram os números pares

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayValores = [];
const numerosPares = []
let i = 1;
let valorNove = 0;
let posicaoPrimeiroValorTres = null;

function perguntar() {
  if (i > 4) {
    console.log(`\nO número 9 apareceu ${valorNove} ${valorNove > 1 ? 'vezes' : 'vez'}`)
    console.log(`O primeiro valor 3 apareceu na posição: ${posicaoPrimeiroValorTres === null ? "Não apareceu" : posicaoPrimeiroValorTres}`)
    console.log(`Números pares: ${numerosPares.join(", ")}`)
    rl.close();
    return;
  }

  rl.question(`Informe o ${i}° valor: `, (inputValor) => {
    const valor = Number(inputValor);

    if (valor === 9) {
      valorNove++
    }

    if (valor === 3) {
      posicaoPrimeiroValorTres = i - 1;
    }

    if (valor % 2 === 0) {
      numerosPares.push(valor);
    }

    arrayValores.push(valor);
    i++;
    perguntar();
  });
}

perguntar();
