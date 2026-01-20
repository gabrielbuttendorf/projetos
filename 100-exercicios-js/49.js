// Refaça o desafio 009, mostrando a tabuada de um número
// que o usuário escolher, só que agora utilizando um laço for

// Eu já utilizei o for no desafio 009 rsrs

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (num) => {
  console.log("-------------------")
  for(let i = 0; i < 11; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
    rl.close();
  }
  console.log("-------------------")
})