// Cria uma função que recebe um array como argumento e conta o número de elementos inteiros existentes nesse array.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function contaInteirosDoArray(array) {
  if (array.length === 0) {
    return 0;
  }
  if (Number.isInteger(array[0])) {
    return 1 + contaInteirosDoArray(array.slice(1));
  } else {
    return 0 + contaInteirosDoArray(array.slice(1));
  }
}
