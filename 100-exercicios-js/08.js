// Escreva um programa que leia um valor em metros e o exiba convertido em centímetros e milímetros

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira o valor em metros: (m) ", (valorEmM) => {
  const valorEmCm = valorEmM * 100
  const valorEmMm = valorEmM * 1000

  console.log(`\nValor em centímetros: (cm) ${valorEmCm}`)
  console.log(`Valor em milímetros: (mm) ${valorEmMm}`)
  rl.close()
})