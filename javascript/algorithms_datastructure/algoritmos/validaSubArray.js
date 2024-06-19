// Cria a função validaSubArray, que recebe como argumentos dois arrays de inteiros.
// A função deve determinar se o segundo array é subsequente do primeiro, retorna true se for e false caso contrário

function validaSubsequente(array, subarray) {
  // Escreve aqui a função
  return subarray.every((elemento) => array.includes(elemento));
}
