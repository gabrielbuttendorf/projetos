// Faça um programa que mostre na tela
// Uma contagem regressiva para o estouro e fogos de artifício,
// Indo de 10 até 0, com uma pausa de 1 segundo entre eles.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function virada() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
    await delay(1000);
  }

  console.log("\nFELIZ ANO NOVO !!");
}

virada();
