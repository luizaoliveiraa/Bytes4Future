// Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor absoluto da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).

function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;
  for (let i = 0; i < matrizquadrada.length; i++) {
    diagonalPrincipal += matrizquadrada[i][i];
    diagonalSecundaria += matrizquadrada[i][matrizquadrada.length - 1 - i];
  }
  return Math.abs(diagonalPrincipal - diagonalSecundaria);
}

let array = [
  [3, 2, 3],
  [1, 5, 3],
  [1, 2, 3],
];

console.log(diferencaAbsolutaEntreDiagonais(array));

// 17. Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).

function diferencaEntreDiagonais(matrizquadrada) {
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;
  for (let i = 0; i < matrizquadrada.length; i++) {
    diagonalPrincipal += matrizquadrada[i][i];
    diagonalSecundaria += matrizquadrada[i][matrizquadrada.length - 1 - i];
  }
  return diagonalPrincipal - diagonalSecundaria;
}

//matriz: são arrays dentro de arrays, aí para aceder a cada array é como os índices, o primeiro array todo é 0, o segundo 1 e assim por diante, para aceder o elementro de dentro do array 8, por ex, devo fazer [1].[1], pq vai aceder o array[1] - de fora, e depois o elemento desse array na posição 1 - é como se fosse aceder a um objeto, logo é [1].[1]
function diferenciaDiagonal(matriz) {
  let diagonal1 = matriz[0][0] + matriz[1][1] + matriz[2][2];
  let diagonal2 = matriz[0][2] + matriz[1][1] + matriz[2][0];

  if (diagonal1 < diagonal2) {
    return diagonal2 - diagonal1;
  }
  return diagonal1 - diagonal2;
}
//ou outra forma

function diferencaDiagonal(arr) {
  let diagonal1 = arr[0][0] + arr[1][1] + arr[2][2];
  let diagonal2 = arr[0][2] + arr[1][1] + arr[2][0];

  let diferenca = diagonal1 - diagonal2;

  return Math.abs(diferenca);
}

//console.log(diferenciaDiagonal([[3, 3, 3],[4, 8, 9], [1, 8, 9], ])); // 20 - 12 = 8
