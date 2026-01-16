// Crie um programa que leia o nome de uma pessoa e diga se ela tem "Silva" no nome

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um nome brasileiro completo: ", (nome) => {
  const array = nome.split(" ");

  const contemSilva = array.some((item) => item.toLowerCase() === "silva");

  console.log(contemSilva);

  if (contemSilva) {
    console.log("O nome CONTÉM 'SILVA'. ");
  } else {
    console.log("O nome NÃO CONTÉM 'SILVA'. ");
  }
  rl.close();
});
