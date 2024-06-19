// Cria uma função que recebe um array como argumento e conta o número de elementos pares existentes nesse array.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function contaParesDoArray(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] % 2 === 0) {
    return 1 + contaParesDoArray(array.slice(1));
  }

  return 0 + contaParesDoArray(array.slice(1));
}
// ou
function countEven(array) {
  const element = array[0];
  const isEven = element % 2 === 0; //(é par)
  if (array.length === 0) {
    return 0;
  }
  if (isEven) {
    return 1 + countEven(array.slice(1)); //numero > + pq queremos somar e não concatenar td num array > assim podemos fazer outras operacoes tb, dividir...
  }
  return 0 + countEven(array.slice(1));
}
