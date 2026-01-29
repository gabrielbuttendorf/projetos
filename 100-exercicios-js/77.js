// Crie um programa que tenha uma tupla com várias palavras (não usar acentos).
// Depois disso, você deve mostrar, para cada palavra,
// quais são as suas vogais

const tupla = [
  "Galadriel",
  "Luthien",
  "Killmonger",
  "Kendrick",
  "Galves",
  "Roberta",
  "Amanda",
];

const vogais = ["a", "e", "i", "o", "u"];

for (let i = 0; i < tupla.length; i++) {
  const palavra = tupla[i];
  const vogaisEncontradas = [];
  for (letra of palavra) {
    if (vogais.includes(letra)) {
      if (!vogaisEncontradas.includes(letra.toUpperCase())) {
        vogaisEncontradas.push(letra.toUpperCase());
      }
    }
  }

  console.log(
    `A palavra ${tupla[i].toUpperCase()} possui as vogais: ${vogaisEncontradas.join(", ")}`,
  );
}
