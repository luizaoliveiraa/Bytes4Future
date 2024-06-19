// Cria uma função que recebe um array como argumento e retorna um array com o cubo de cada elemento.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function cubosDoArray(array) {
  if (array.length === 0) {
    return [];
  }
  return [array[0] ** 3].concat(cubosDoArray(array.slice(1)));
}
