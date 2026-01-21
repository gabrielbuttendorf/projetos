// Crie um programa que leia uma frase qualquer
// E diga se ela é um palíndromo, desconsiderando os espaços

// Exemplos:
// Após a sopa
// A sacada da casa
// A torre da derrota
// o lobo ama o bolo
// Anotaram a data da maratona

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\n------- Identificador de Palíndromos -------")
rl.question("\nInforme a frase: ", (frase) => {
  const fraseLimpa = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
  const fraseLimpaInvertida = fraseLimpa.split('').reverse().join('')

  if (fraseLimpa.toLowerCase() === fraseLimpaInvertida.toLowerCase()) {
    console.log(`\nA frase "${frase}" é um palíndromo!`)
  } else {
    console.log(`\nA frase "${frase}" NÃO é um palíndromo.`)
  }
  
  rl.close();
})