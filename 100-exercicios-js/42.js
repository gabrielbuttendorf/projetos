/*
Refaça o DESAFIO 35, dos triângulos, acrescentando o recurso de mostrar
que tipo de triângulo será formado:

- equilátero: todos os lados iguais
- isósceles: dois lados iguais
- escaleno: todos os lados diferentes
*/

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

      if (a === b && b === c) {
        console.log("O triângulo formado será EQUILÁTERO.");
      } else if (a !== b && b !== c) {
        console.log("O triângulo formado será ESCALENO.");
      } else {
        console.log("O triângulo formado será ISÓSCELES.");
      }
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
