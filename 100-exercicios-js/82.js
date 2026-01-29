// Crie um programa que vai ler vários números e colocar em uma lista.
// Depois disso, crie duas listas extras que vão conter apenas os valores pares
// e os valores ímpares digitados, respectivamente.

// Ao final, mostre o conteúdo das três listas geradas.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valores = [];
const pares = [];
const impares = [];

function perguntar() {
  rl.question("Informe o valor: ", (inputValor) => {
    const valorInserido = Number(inputValor);
    valores.push(valorInserido);

    rl.question("Deseja continuar (S/N)? ", (resposta) => {
      if (resposta.toLowerCase() === "n") {

        for (const valor of valores) {
          if (valor % 2 === 0) {
            pares.push(valor)
          } else {
            impares.push(valor)
          }
        }

        console.clear();
        console.log(`\nLista original: ${valores.join(", ")}`);
        console.log(`Pares: ${pares.join(", ")}`);
        console.log(`Ímpares: ${impares.join(", ")}`);
        rl.close();
        return;
      }

      console.clear();
      perguntar();
    });
  });
}

perguntar();