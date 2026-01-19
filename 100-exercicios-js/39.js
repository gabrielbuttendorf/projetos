// Faça um programa que leia o ano de nascimento de um jovem e informe de acordo com sua idade:

// - Se ele ainda vai se alistar ao serviço militar
// - Se é a hora de se alistar
// - Se já passou do tempo do alistamento

// Seu programa também deverá mostrar o tempo que faltou ou que passou do prazo

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe o seu ano de nascimento: ", (input) => {
  const anoNascimento = Number(input);
  const anoAtual = new Date().getFullYear();
  let tempo = anoAtual - anoNascimento - 18;

  if (anoAtual - anoNascimento < 18) {
    console.log(`\nVocê deverá se alistar em ${Math.abs(tempo)} ${Math.abs(tempo) > 1 ? 'anos' : 'ano'}.`);
  } else if (anoAtual - anoNascimento > 18) {
    console.log(`\nVocê deveria ter se alistado há ${tempo} ${tempo > 1 ? 'anos' : 'ano'}.`);
  } else {
    console.log("\nVocê deve se alistar este ano.")
  }
  rl.close();
})