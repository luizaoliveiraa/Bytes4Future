// Cria uma função que recebe um array e um número como argumentos e retorna o número de vezes em que n aparece nesse array.
// Utiliza o que aprendeste sobre filter para resolver este exercício.

function contarNsNoArray(n, array) {
  const quantosNs = array.reduce((contador, numero) => {
    return contador + (numero === n ? 1 : 0);
  }, 0);
  return quantosNs;
}
// /ouuuu

function contarNsNoArray(n, array) {
  const quantosNs = array.filter((element) => element === n);
  return quantosNs.length;
}
