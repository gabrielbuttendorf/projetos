// Crie um programa que leia duas notas de um aluno e calcule sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:

// - média abaixo de 5.0: reprovado
// - média entre 5.0 e 6,9: recuperação
// - média 7.0 ou superior: aprovado

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe a 1° nota: ", (nota1) => {
  rl.question("Informe a 2° nota: ", (nota2) => {
    const media = (Number(nota1) + Number(nota2)) / 2;

    console.log(`\nMédia: ${media}`);

    if (media < 5) {
      console.log("Reprovado.");
    } else if (media >= 7) {
      console.log("Aprovado.");
    } else {
      console.log("Recuperação.");
    }

    rl.close();
  });
});
