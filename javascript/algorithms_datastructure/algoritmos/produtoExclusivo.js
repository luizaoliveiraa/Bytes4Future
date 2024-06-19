// Cria a função produtoExclusivo, que recebe como argumento um array de inteiros.
// A função deve retornar um array em que cada posição do array deve ser o produto de todos os outros valores do array excluindo o próprio.
// Por exemplo:

// produtoExclusivo([1, 3, 5]) //[15, 5, 3]
// //ou seja, no elemento com o índice 0, multiplica-se todos os elementos do array que não sejam o que está na posição 0
// [
//     1, <- Multiplica-se os outros <=> 3 * 5 => 15
//     3, <- Multiplica-se os outros <=> 1 * 5 => 5
//     5  <- Multiplica-se os outros <=> 1 * 3 => 3
// ]
// produtoExclusivo([3, 4, 5]) //[20, 15, 12]

function produtoExclusivo(array) {
  let produtoDeTodos = array.reduce((total, num) => total * num, 1);
  //o parâmetro 1 no final da função reduce é o valor inicial do total, garantindo que o produto comece com 1. Dentro do loop, dividimos o produto de todos pelo elemento atual para excluir o próprio elemento atual do cálculo.
  let arrayProdutos = [];
  for (let i = 0; i < array.length; i++) {
    arrayProdutos.push(produtoDeTodos / array[i]); //calcula o produto de todos elementos do array excluindo o próprio  - elemento atual e adiciona ao novo array
  }
  return arrayProdutos;
}
