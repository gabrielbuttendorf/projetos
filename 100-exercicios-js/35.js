// Desenvolva um programa que leia o comprimento de três retas
// e diga ao usuário se elas podem ou não formar um triângulo.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayRetas = [];
let i = 1;

function perguntar() {
  if (i > 3) {
    const [a, b, c] = arrayRetas;
    if (a + b > c && b + c > a && c + a > b) {
      console.log("\nAs retas informadas podem formar um triângulo.");
    } else {
      console.log("\nAs retas informadas NÃO podem formar um triângulo.");
    }
    rl.close();
    return;
  }

  rl.question(`Informe o comprimento da ${i}° reta: `, (input) => {
    const reta = Number(input);

    arrayRetas.push(reta);
    i++;
    perguntar();
  });
}

perguntar();
