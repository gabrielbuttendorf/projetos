// Faça um programa que tenha uma função chamada maior(), que receba vários parâmetros com valores inteiros.
// Seu programa tem que analisar todos os valores e dizer qual deles é o maior.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maior(valores) {
  const maiorValor = Math.max(...valores);

  console.log(`\nO maior valor é ${maiorValor}`);
}

rl.question("Quantos valores você quer comparar? ", (inputQtdValores) => {
  const qtdValores = Number(inputQtdValores);
  const valores = [];
  let contagem = 1;

  executar();

  function executar() {
    if (contagem > qtdValores) {
      maior(valores);
      rl.close();
      return;
    }

    rl.question(`Informe o ${contagem}° valor: `, (inputValor) => {
      const valor = Number(inputValor);
      valores.push(valor);
      contagem++;
      executar();
    });
  }
});
