// Cria uma função que recebe um array e um número como argumentos e verifica se todos os elementos são iguais a n.
// Utiliza o que aprendeste sobre o every para resolver este exercício.

function todosIguaisAN(array, n) {
  // escreve aqui a função
  return array.every((e) => e === n);
}

// Nesta função verificarIgualdade, estamos usando o método every para verificar se todos os elementos do array são iguais ao número n. O método every retorna true se a função de retorno de chamada (elemento => elemento === n) retornar true para todos os elementos do array e false caso contrário.
