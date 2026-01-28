// Crie um programa que vai gerar cinco números aleatórios 
// e colocar em uma tupla.
// Depois disso, mostre a listagem de números gerados
// e também indique o menor e o maior valor que estão na tupla

let numeroAleatorio = 0;
const arrayDeNumeros = []

for (let i = 0; i < 5; i++) {
  numeroAleatorio = Math.ceil(Math.random() * 100)
  arrayDeNumeros.push(numeroAleatorio);
}

const menorNumero = Math.min(...arrayDeNumeros)
const maiorNumero = Math.max(...arrayDeNumeros)

console.log(`\nNúmeros gerados: ${arrayDeNumeros.join(", ")}`);
console.log(`Menor número: ${menorNumero}`);
console.log(`Maior número: ${maiorNumero}`);
