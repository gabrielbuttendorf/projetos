// Crie um módulo chamado moeda.py que tenha as funções incorporadas 'aumentar()', 'diminuir()', 'dobro()' e 'metade()'.
// Faça também um programa que importe esse módulo e use algumas dessas funções.
// Obs.: por exemplo, o 'aumentar()' recebe o preço e uma porcentagem, e calcula.
// o 'diminuir()', mesma coisa.

export function aumentar(preco, porcentagem) {
  preco = Number(preco);
  porcentagem = Number(porcentagem);
  return Number(preco + preco * (porcentagem / 100));
}

export function diminuir(preco, porcentagem) {
  preco = Number(preco);
  porcentagem = Number(porcentagem);
  return Number(preco - preco * (porcentagem / 100));
}

export function dobro(preco) {
  return Number(preco) * 2;
}

export function metade(preco) {
  return Number(preco) / 2;
}
