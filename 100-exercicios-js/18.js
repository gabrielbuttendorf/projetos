// Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function arrumar(n) {
  if (Math.abs(n) < 1e-10) return 0;
  if (n > 1000000000) return "∞";
  return n.toFixed(4);
}

rl.question("Digite um ângulo qualquer: ", (angulo) => {
  const rad = (angulo * Math.PI) / 180;

  const seno = Math.sin(rad);
  const cosseno = Math.cos(rad);
  const tangente = Math.tan(rad);

  console.log(`\nSeno: ${arrumar(seno)}`);
  console.log(`Cosseno: ${arrumar(cosseno)}`);
  console.log(`Tangente: ${arrumar(tangente)}`);
  rl.close();
});
