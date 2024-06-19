// Cria uma função que recebe um array como argumento e retorna um array com o fatorial de cada elemento.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function fatoriaisDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) {
    return [];
  }
  function fatorial(n) {
    if (n === 1 || n === 0) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  }
  return [fatorial(array[0])].concat(fatoriaisDoArray(array.slice(1)));
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
/*
factorial(2) -> 2 * 1
factorial(3) -> 3 * 2 * 1
factorial(4) -> 4 * 3 * 2 * 1
factorial(n) -> n * factorial(n - 1)   
*/
