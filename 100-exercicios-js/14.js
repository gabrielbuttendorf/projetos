// Conversor de temperaturas: escreva um programa que converta uma temperatura digitada em ºC para ºF

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe a temperatura em Graus Celsius (ºC): ", (tempEmCelsius) => {
  const tempEmFarenheit = (tempEmCelsius * 9/5) + 32
  
  console.log(`\n${tempEmCelsius} ºC equivalem a ${tempEmFarenheit} ºF`)
  rl.close();
})