// Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).

function somaDiagonalSecundaria(matrizquadrada) {
  // escreve aqui a função
  let diagonalSecundaria = 0;
  for (let i = 0; i < matrizquadrada.length; i++) {
    diagonalSecundaria += matrizquadrada[i][matrizquadrada.length - 1 - i];
  }
  return diagonalSecundaria;
}
