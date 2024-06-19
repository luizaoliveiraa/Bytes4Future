//  Cria a função arrayInfinito, que recebe como argumento um array "A" e dois valores esquerda e direita que vão servir de índices.
// Supõe agora um array hipotético "B" que é o array "A" repetido infinitas vezes.
// Por exemplo:

//     A = [1, 2, 3, 4]
//     B = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, ...]
// A função deve retornar o somatório dos elementos entre a esquerda e direita, incluindo os mesmos.
// Se o array não estiver definido ou se for um array vazio, deve retornar 0
// Por exemplo:

//     constA=[1,2,3,4]arrayInfinito(A,3,7)// 14 <=> 4 + 1 + 2 + 3 + 4// B = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, ...]//               ^  ^  ^  ^  ^// Deve retornar o somatório entre os elementos nos indices esquerda(3) e direita(7)

function arrayInfinito(array, esquerda, direita) {
  if (array === undefined || array.length === 0) return 0;
  // Verifica se o array está vazio ou não definido
  let soma = 0;
  for (let i = esquerda; i <= direita; i++) {
    // Percorre o intervalo de índices entre esquerda e direita
    soma += array[i % array.length];
    // Soma o elemento correspondente ao índice calculado

    // Calcula o índice no array real usando o operador de módulo (%)
  }
  return soma;
}
