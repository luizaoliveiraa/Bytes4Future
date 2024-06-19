// Cria uma função que recebe um array de palavras e uma letra como argumentos e verifica se todas as palavras possuem essa letra.
// Utiliza o que aprendeste sobre o every para resolver este exercício.

function todasPossuemLetra(array, letra) {
  // escreve aqui a função
  return array.every((e) => e.includes(letra));
}
