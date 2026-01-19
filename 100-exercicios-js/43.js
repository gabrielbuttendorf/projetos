/*
Desenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule seu IMC
e mostre seu status, e acordo com a tabela abaixo:

- abaixo de 18.5: abaixo do peso
- entre 18.5 e 25: peso ideal
- 25 até 30: sobrepeso
- 30 até 40: obesidade
- acima de 40: obesidade mórbida
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o peso (kg): ", (inputPeso) => {
  rl.question("Informe a altura (m): ", (inputAltura) => {
    const peso = Number(inputPeso);
    const altura = Number(inputAltura);
    const imc = peso / (altura * altura);

    console.log(`\nIMC: ${imc.toFixed(1)}`);
    if (imc < 18.5) {
      console.log("Status: Abaixo do peso.");
    } else if (imc <= 25) {
      console.log("Status: Peso ideal.");
    } else if (imc <= 30) {
      console.log("Status: Sobrepeso.");
    } else if (imc <= 40) {
      console.log("Status: Obesidade.");
    } else {
      console.log("Status: Obesidade mórbida.");
    }

    rl.close();
  });
});
