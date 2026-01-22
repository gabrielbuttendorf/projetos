// Faça um programa que leia o sexo de uma pessoa mas só aceite os valores "M" ou "F".
// Caso esteja errado, peça a digitação novamente até ter um valor correto.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question("Informe o sexo da pessoa (M/F): ", (sexo) => {
    if (sexo.toLowerCase() === "f" || sexo.toLowerCase() === "m") {
      console.log(`\nSexo informado: ${sexo.toLowerCase() === "f" ? "Feminino" : "Masculino"}`)
      rl.close();
      return;
    }

    console.log("\nValor inválido. Digite novamente");
    perguntar();

  });
}

perguntar();