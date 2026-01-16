// Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último nome separadamente

// Ex.: Ana Maria de Souza
// Primeiro = Ana
// Último: Souza

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um nome completo: ", (nomeCompleto) => {
  const arrayNomeCompleto = nomeCompleto.split(' ');
  const primeiroNome = arrayNomeCompleto[0]
  const ultimoNome = arrayNomeCompleto[arrayNomeCompleto.length - 1];

  console.log(`\nNome completo: ${nomeCompleto}`);
  console.log(`Primeiro nome: ${primeiroNome}`)
  console.log(`Último nome: ${ultimoNome}`)

  rl.close()
})