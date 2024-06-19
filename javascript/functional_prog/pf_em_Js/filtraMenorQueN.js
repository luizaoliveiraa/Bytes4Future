//  Cria uma função que recebe um array e um número como argumentos e retorna um array com os elementos que são menores que n.
// Utiliza o que aprendeste sobre o filter para resolver este exercício.

function filtraMenoresQueN(array, n) {
  // escreve aqui a função
  return array.filter((element) => element < n);
}

function arraySemN(n, array) {
  // escreve aqui a função
  return array.filter((e) => e !== n);
}
