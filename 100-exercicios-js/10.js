// Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function conversor() {
  const response = await fetch("https://br.dolarapi.com/v1/cotacoes/usd");
  const dolar = await response.json();

  rl.question("Digite o valor em reais: ", (valorEmReais) => {
    const valorEmDolar = valorEmReais / dolar.compra;
    console.log(`Com R$ ${valorEmReais} você pode comprar $ ${valorEmDolar.toFixed(2)}`)
    rl.close();
  });
}

conversor()
