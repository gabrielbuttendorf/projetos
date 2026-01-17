// Escreva um programa que leia um número inteiro qualquer
// e peça para o usuário escolher qual será a base de conversão:

// 1. Binário
// 2. Octal
// 2. Hexadecimal

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe um número inteiro qualquer: ", (inputNumero) => {
  console.log("\n1. Binário");
  console.log("2. Octal");
  console.log("3. Hexadecimal");
  
  rl.question("\nQual conversão você deseja realizar?: ", (inputOpcao) => {
    const numero = Number(inputNumero);
    const opcao = Number(inputOpcao);

    switch (opcao) {
      case 1:
        

      
        break;

      case 2:
        
        break;

      case 3:
        
        break;
    
      default:
        console.log("\nOpção inválida, execute novamente.")
        break;
    }
    rl.close();
  });
});
