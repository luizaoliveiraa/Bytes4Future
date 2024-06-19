// Cria uma função que recebe um array como argumento e retorna a soma dos elementos do array.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function somaDoArray(array) {
  if (array.length === 0) return 0;
  return array[0] + somaDoArray(array.slice(1)); // o slice corta 1 elemento, nesse caso, sempre o primeiro a seguir da atribuicao do primeiro elemento ali no array[0]
}

//console.log(correrArray(arr))
