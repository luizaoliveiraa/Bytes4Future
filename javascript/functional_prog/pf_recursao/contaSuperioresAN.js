// Cria uma função que recebe um array e um número como argumentos e conta o número de elementos que são superiores ao número existentes no array.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function contaSuperioresAN(array, n) {
  if (array.length === 0) return 0;
  if (array[0] > n) {
    return 1 + contaSuperioresAN(array.slice(1), n);
  } else {
    return 0 + contaSuperioresAN(array.slice(1), n);
  }
}
