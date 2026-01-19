/*
A Confederação Nacional de Natação precisa de um programa que leia
o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:

- até 9 anos: mirim
- até 14 anos: infantil
- até 19 anos: júnior
- até 20 anos: sênior
acima de 20: master
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o ano de nascimento do atleta: ", (input) => {
  const anoNascimento = Number(input);
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  console.log("\nCategoria:");
  if (idade <= 9) {
    console.log("Mirim");
  } else if (idade <= 14) {
    console.log("Infantil");
  } else if (idade <= 19) {
    console.log("Júnior");
  } else if (idade <= 20) {
    console.log("Sênior");
  } else {
    console.log("Master");
  }

  rl.close();
});
