// Crie uma tupla preenchida com os 20 primeiros colocados
// da Tabela do Campeonato Brasileiro,
// na ordem de colocação.
// Depois mostre:
// a) apenas os 5 primeiros colocados
// b) os últimos 4 colocados da tabela
// c) uma lista com os times em ordem alfabética
// d) em que posição na tabela está o Vasco

const brasileirao2025 = [
  "Flamengo",
  "Palmeiras",
  "Cruzeiro",
  "Mirassol",
  "Fluminense",
  "Botafogo",
  "Bahia",
  "São Paulo",
  "Grêmio",
  "Red Bull Bragantino",
  "Atlético-MG",
  "Santos",
  "Corinthians",
  "Vasco",
  "Vitória",
  "Internacional",
  "Ceará",
  "Fortaleza",
  "Juventude",
  "Sport",
];

const cincoPrimeirosColocados = [];
for (let i = 0; i < 5; i++) {
  cincoPrimeirosColocados.push(brasileirao2025[i]);
}

const quatroUltimosColocados = [];
for (let i = 16; i < 20; i++) {
  quatroUltimosColocados.push(brasileirao2025[i]);
}

const tabelaEmOrdemAlfabetica = [...brasileirao2025];
tabelaEmOrdemAlfabetica.sort();

const indexVasco = brasileirao2025.findIndex((time) => time === "Vasco");
const posicaoVasco = indexVasco + 1;

console.log(`\nPrimeiros 5 colocados: ${cincoPrimeirosColocados.join(", ")}`);
console.log(`Últimos 4 colocados: ${quatroUltimosColocados.join(", ")}`);
console.log(`Posição do Vasco na tabela: ${posicaoVasco}°`);
console.log(`\nTabela em ordem alfabética:\n ${tabelaEmOrdemAlfabetica.join("\n ")}`);
