// Cria uma função que recebe um array como argumento e retorna um array clone do array inicial.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function cloneDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) {
    return [];
  }
  return [array[0]].concat(cloneDoArray(array.slice(1)));
}
