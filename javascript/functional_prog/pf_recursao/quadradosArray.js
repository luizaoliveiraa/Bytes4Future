// Cria uma função que recebe um array como argumento e retorna um array com o quadrado de cada elemento.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function quadradosDoArray(array) {
  if (array.length === 0) {
    return [];
  }

  return [array[0] ** 2].concat(quadradosDoArray(array.slice(1)));
}
