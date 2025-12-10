// Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre a sua média

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\nNota 1: ", (n1) => {
  rl.question("Nota 2: ", (n2) => {

    console.log(`\nMédia: ${(Number(n1) + Number(n2)) / 2}`)
    rl.close()
  })
})