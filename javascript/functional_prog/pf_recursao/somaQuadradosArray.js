//  Cria uma função que recebe um array como argumento e retorna a soma dos quadrados de cada elemento.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function somaDosQuadradosDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) {
    return 0;
  }
  return array[0] ** 2 + somaDosQuadradosDoArray(array.slice(1));
}
