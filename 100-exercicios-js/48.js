// Faça um programa que calcule a soma entre todos os números impares
// que são múltiplos de três (3) e que se encontram no intervalo de 1 até 500.

let soma = 0;

function somarImparMultiploDeTres() {
  for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0 && i % 3 === 0) {
      soma += i;
    }
  }

  console.log(`A soma dos números é ${soma}.`)
}

somarImparMultiploDeTres();