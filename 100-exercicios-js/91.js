// Crie um programa onde 4 jogadores joguem um dado
// e tenham resultados aleatórios.
// Guarde esses resultados em um dicionário.

// No final, coloque esse dicionário em ordem,
// sabendo que o vencedor tirou o maior número no dado

const jogo = [];

for (let i = 1; i < 5; i++) {
  const numeroSorteado = Math.floor(Math.random() * 6 + 1);

  const jogador = {
    nome: "jogador" + i,
    numero: numeroSorteado
  }

  jogo.push(jogador);
}

const jogoOrdenado = [...jogo].sort((a, b) => b.numero - a.numero);

console.log("\nJogo original")
console.log(jogo);

console.log("\nJogo ordenado")
console.log(jogoOrdenado);

console.log(`\nVencedor: ${jogoOrdenado[0].nome}`);
