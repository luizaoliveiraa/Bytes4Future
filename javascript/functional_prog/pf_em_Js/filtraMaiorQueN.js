// Cria uma função que recebe um array e um número como argumentos e retorna um array com os elementos que são maiores que n.
// Utiliza o que aprendeste sobre o filter para resolver este exercício.

function filtraMaioresQueN(array, n) {
  return array.filter((elemento) => elemento > n);
}

//ou

function filtraMaioresQueN(array, n) {
  function isHigherThan(value) {
    return value > n;
  }
  return array.filter(isHigherThan);
}
