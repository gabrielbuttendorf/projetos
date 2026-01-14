// Faça um programa que leia o comprimento do cateto oposto (co) e do cateto adjacente (ca) 
// de um triângulo retângulo, calcule e mostre o comprimento da hipotenusa.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o comprimento do Cateto Oposto (CO): ", (co) => {
  rl.question("Informe o comprimento do Cateto Adjacente (CA): ", (ca) => {
    
    const hipotenusa = Math.sqrt(Math.pow(co, 2) + Math.pow(ca, 2))
    console.log(`\nO comprimento da Hipotenusa é: ${hipotenusa.toFixed(3)}`)
    rl.close()
  })
})