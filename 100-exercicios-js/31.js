// Desenvolva um programa que pergunte a distância de uma viagem em Km.
// Calcule o preço da passagem, cobrando R$ 0,50 por Km para viagens de até 200km
// e R$ 0,45 para viagens mais longas

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe a distância da viagem em KM: ", (input) => {
  const distancia = Number(input);
  let precoDaPassagem = 0

  if (distancia > 200) {
    precoDaPassagem = distancia * 0.45
  } else {
    precoDaPassagem = distancia * 0.50
  }

  console.log(`\nO custo da passagem será ${precoDaPassagem.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
  rl.close()
})