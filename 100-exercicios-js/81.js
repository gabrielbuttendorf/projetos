// Crie um programa que vai ler vários números e colocá-los em uma lista
// Depois disso, mostre:
// a) quantos números foram digitados.
// b) a lista de valores, ordenada de forma decrescente
// c) se o valor 5 foi digitado e está ou não na lista.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valores = [];

function perguntar() {
  rl.question("Informe o valor: ", (inputValor) => {
    const valor = Number(inputValor);
    valores.push(valor);

    rl.question("Deseja continuar? (S/N) ", (resposta) => {
      if (resposta.toLowerCase() === "n") {
        console.clear();
        console.log(`\nQuantidade de números digitados: ${valores.length}`);
        console.log(`Valores digitados em ordem decrescente: ${valores.sort((a, b) => b - a).join(", ")}`);
        console.log(`O valor 5 foi digitado? ${valores.includes(5) ? 'sim' : 'não'}`);
        rl.close();
        return;
      }

      console.clear();
      perguntar();
    });
  });
}

perguntar();