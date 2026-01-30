// Crie um programa onde o usuário possa digitar
// sete valores numéricos
// e cadastre-os em uma lista única
// que mantenha separados os valores pares e ímpares.

// No final, mostre os valores pares e ímpares
// em ordem crescente.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
const listaNumeros = [[], []];

function perguntar() {
  if (i > 7) {
    console.clear();

    console.log(`\nPares: ${listaNumeros[0].sort((a, b) => a - b).join(", ")}`);
    console.log(`Ímpares: ${listaNumeros[1].sort((a, b) => a - b).join(", ")}`);
    rl.close();
    return;
  }

  rl.question(`Informe o ${i}° valor: `, (inputValor) => {
    const valor = Number(inputValor);

    if (valor % 2 === 0) {
      listaNumeros[0].push(valor);
    } else {
      listaNumeros[1].push(valor);
    }

    i++;
    perguntar();
  });
}

perguntar();
