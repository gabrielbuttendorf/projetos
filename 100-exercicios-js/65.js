// Crie um programa que leia vários números inteiros pelo teclado
// No final da execução, mostre a média entre todos os valores
// e qual foi o maior e o menor valores lidos
// O programa deve perguntar ao usuário se ele quer ou não continuar
// a digitar valores

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayNumeros = [];

function perguntar() {
  rl.question("\nInforme um número: ", (inputNumero) => {
    rl.question("Deseja continuar? (S/N) ", (resposta) => {
      const numero = Number(inputNumero);
      arrayNumeros.push(numero);

      if (resposta.toLowerCase() === "n") {
        const somaNumeros = arrayNumeros.reduce((acumulator, valor) => {
          return acumulator + valor;
        });
        const media = somaNumeros / arrayNumeros.length;
        const maiorValor = Math.max(...arrayNumeros)
        const menorValor = Math.min(...arrayNumeros)

        console.clear();
        console.log(`\nMédia entre os valores: ${media}`);
        console.log(`Maior valor: ${maiorValor}`);
        console.log(`Menor valor: ${menorValor}`);
        rl.close();
        return;
      }

      if (resposta.toLowerCase() !== 's' && resposta.toLowerCase() !== 'n') {
        console.log(`\nResposta inválida. Seguindo adiante.`)
      }

      perguntar();
    });
  });
}

perguntar();
