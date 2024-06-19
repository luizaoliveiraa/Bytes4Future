// 7. Cria uma função que recebe um array como argumento e retorna um array com a raiz cúbica de cada elemento.
// Utiliza o que aprendeste sobre o map para resolver este exercício.

function raizesCubicas(array) {
  return array.map((elemento) => Math.cbrt(elemento));
}
