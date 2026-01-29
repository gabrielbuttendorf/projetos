// Crie um programa onde o usuário possa digitar vários valores numéricos
// e cadastre-os em uma lista.

// Caso o número já exista lá dentro, ele não será adicionado.
// No final, serão exibidos todos os valores únicos digitados, em ordem crescente.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valores = [];

function perguntar() {
  rl.question("Informe o valor: ", (inputValor) => {
    const valor = Number(inputValor);
    if (!valores.includes(valor)) {
      valores.push(valor);
    }

    rl.question("Deseja continuar? (S/N) ", (resposta) => {
      if (resposta.toLowerCase() === "n") {
        console.clear();
        console.log(`Valores digitados: ${valores.sort((a, b) => a - b).join(", ")}`);
        rl.close();
        return;
      }

      console.clear();
      perguntar();
    });
  });
}

perguntar();
