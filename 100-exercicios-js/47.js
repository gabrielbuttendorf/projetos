// Crie um programa que mostre na tela todos os números pares
// que estão no intervalo entre 1 e 50

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log("\nNúmeros pares:");

async function exibirPares() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
      await delay(50);
    }
  }
}

exibirPares();
