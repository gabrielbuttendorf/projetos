/**
Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa
O programa vai perguntar o valor da casa, o salário do comprador 
e em quantos anos ele vai pagar

Calcule o valor da prestação mensal,
sabendo que ela não pode exceder 30% do salário
ou então o empréstimo será negado 
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o valor da casa: ", (casa) => {
  rl.question("Informe o salário do comprador: ", (salario) => {
    rl.question("Em quantos anos será financiado?: ", (anos) => {
      rl.question("Qual será o valor da entrada?: ", (entrada) => {
        const valorCasa = Number(casa);
        const valorSalario = Number(salario);
        const valorAnos = Number(anos);
        const valorEntrada = Number(entrada);

        const valorParcela = (valorCasa - valorEntrada) / valorAnos / 12;

        console.log(`\nValor da casa: ${valorCasa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        console.log(`Salário do comprador: ${valorSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        console.log(`Tempo de financiamento: ${valorAnos} anos`)
        console.log(`Valor da entrada: ${valorEntrada.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        console.log(`Valor da parcela: ${valorParcela.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

        if (valorParcela > valorSalario * 0.30) {
          console.log("\nEmpréstimo negado, a parcela excede 30% do salário do comprador.")
        } else {
          console.log("\nEmpréstimo aprovado!")
        }
        
        rl.close()
      });
    });
  });
});
