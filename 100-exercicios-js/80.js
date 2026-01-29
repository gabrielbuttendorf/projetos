// Crie um programa onde o usuário possa digitar cinco valores numéricos
// e cadastre-os em uma lista, já na posição correta de inserção (sem usar o sort()).

// No final, mostre a lista ordenada na tela.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
const numeros = [];
let inserido = false;

function perguntar() {
  if (i > 5) {
    console.clear();
    console.log(`\nListagem ordenada: ${numeros.join(", ")}`);
    rl.close();
    return;
  }

  rl.question(`Informe o ${i}° número: `, (inputNumero) => {
    const numeroAtual = Number(inputNumero);
  
    if (numeros.length === 0) {
      numeros.push(numeroAtual);
    } else {
      inserido = false;

      for (let i = 0; i < numeros.length; i++) {
        if (numeroAtual < numeros[i]) {
          numeros.splice(i, 0, numeroAtual);
          inserido = true;
          break;
        }
      }

      if (!inserido) {
        numeros.push(numeroAtual);
      }
    }

    i++;
    perguntar();
  });
}

perguntar();
