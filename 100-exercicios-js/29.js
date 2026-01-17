// Escreva um programa que leia a velocidade de um carro
// Se ele ultrapassar 80km/h, mostre uma mensagem dizendo que ele foi multado
// A multa vai custar R$7,00 por cada Km acima do limite.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("---------------= RADAR =---------------")
rl.question("\nInforme a velocidade atual do carro: ", (velocidade) => {
  if (velocidade > 80) {
    const velocidadeAcimaDoPermitido = velocidade - 80;
    const valorMulta = velocidadeAcimaDoPermitido * 7

    console.log(`\nVocê foi multado em ${valorMulta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por exceder 80km/h.`)
  } else {
    console.log("\nTudo certo! Você está dirigindo dentro da velocidade máxima da via.")
  }
  rl.close()
})