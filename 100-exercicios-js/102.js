// Crie um programa que tenha uma função fatorial() que receba dois parâmetros:
// o primeiro que indique o número a calcular
// e o outro chamado show, que será um valor lógico (opcional)
// indicando se será mostrado ou não na tela o processo de cálculo do fatorial.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculo = [];

function fatorial(n, show = true) {
  if (n < 0) {
    return `Fatorial não definido para números negativos.`;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = n; i >= 1; i--) {
      if (show) {
        calculo.push(i);
      }
      resultado = resultado * i;
    }
    return resultado;
  }
}

rl.question("Informe o número para calcular o fatorial: ", (inputNumero) => {
  rl.question("Deseja ver o cálculo? (S/N): ", (resposta) => {
    const numero = Number(inputNumero);
    if (resposta.toLowerCase() === "s") {
      const resultado = fatorial(numero, true);
      console.log(`\nO fatorial de ${numero} é ${resultado}`);
      console.log(`${calculo.join(" * ")} = ${resultado}`);
    } else {
      const resultado = fatorial(numero, false);
      console.log(`\nO fatorial de ${numero} é ${resultado}`);
    }

    rl.close();
  });
});
