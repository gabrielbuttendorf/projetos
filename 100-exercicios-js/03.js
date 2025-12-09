// Crie um script Python que leia dois números e tente mostrar a soma entre eles

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    console.log(`\n${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
    rl.close()
  })
})