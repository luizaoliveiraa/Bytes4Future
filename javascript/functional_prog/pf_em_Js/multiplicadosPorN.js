// Cria uma função que recebe um array e um número como argumentos e retorna um array com cada número multiplicado por n.
// Utiliza o que aprendeste sobre o map para resolver este exercício.

function multiplicadosPorN(array, n) {
  const arrayMultiplicado = array.map((element) => element * n);
  return arrayMultiplicado;
}
