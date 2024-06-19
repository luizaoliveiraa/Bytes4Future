// Cria uma função que recebe um array como argumento e encontra o valor máximo ímpar.
// Utiliza o que aprendeste sobre o reduce para resolver este exercício.

function valorMaximoImpar(array) {
  return array.reduce((maxImpar, current) => {
    // Verifica se o número atual é ímpar e se é maior que o máximo ímpar encontrado até agora
    if (current % 2 == 1 && current > maxImpar) {
      return current; // Se ambos os critérios forem atendidos, retorna o número atual como novo máximo ímpar
    }
    return maxImpar; // Caso contrário, retorna o máximo ímpar atual
  }, -Infinity); // Inicializa o acumulador com -Infinity para garantir que qualquer número ímpar do array seja considerado maior que ele
}
