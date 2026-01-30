// Crie um programa onde o usuário digite uma expressão qualquer que use parênteses.
// Seu aplicativo deverá analisar se a expressão passada
// está com os parênteses abertos e fechados na ordem correta.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let saldo = 0;
let expressaoValida = true;

rl.question("Informe uma expressão com parênteses: ", (expressao) => {
  const expressaoSplitada = expressao.split("")
  const expressaoSemEspacos = expressaoSplitada.filter(item => item.trim() !== '');

  for (caractere of expressaoSemEspacos) {
    if (caractere === "(") {
      saldo++
    }

    if (caractere === ")") {
      saldo--
      if (saldo < 0) {
        expressaoValida = false;
        break;
      }
    }
  }

  if (saldo !== 0) {
    expressaoValida = false;
  }

  if (expressaoValida) {
    console.log("\nExpressão válida.")
  } else {
    console.log("\nExpressão inválida.")
  }

  rl.close();
});