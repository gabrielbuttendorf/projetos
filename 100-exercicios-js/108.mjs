// Adapte o código do desafio 107, criando uma função adicional chamada 'moeda()' que consiga mostrar os valores como um valor monetário formatado.

import { aumentar, diminuir, dobro, metade } from "./107-moeda.mjs";

// Utilize as funções abaixo:
// aumentar(preco, porcentagem)
// diminuir(preco, porcentagem)
// dobro(preco)
// metade(preco)

export function moeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const valorImprimir = aumentar(1000, 20);
console.log(moeda(valorImprimir));
