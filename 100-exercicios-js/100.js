// Faça um programa que tenha uma lista chamada números e duas funções chamadas sorteia() e soma_par().
// A primeira função vai sortear 5 números e vai colocá-los dentro da lista
// e a segunda função vai mostrar a soma entre todos os valores pares sorteados pela função anterior.

const numeros = [];

function sorteia() {
  for (let i = 0; i < 5; i++) {
    const numeroSorteado = Math.floor(Math.random() * 10 + 1);
    numeros.push(numeroSorteado);
  }

  console.log(`\nNúmeros sorteados: ${numeros.join(", ")}`);
  somarPar();
}

function somarPar() {
  let somaPares = 0;

  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      somaPares += numero;
    }
  })

  console.log(`Soma dos números pares: ${somaPares}`);
}

sorteia();
