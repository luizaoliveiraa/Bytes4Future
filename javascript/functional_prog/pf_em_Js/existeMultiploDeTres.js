// // Cria uma função que recebe um array como argumento e verifica se possui algum elemento múltiplo de 3.
// // Utiliza o que aprendeste sobre o some para resolver este exercício.

function existeMultiploDeTres(array) {
  // escreve aqui a função
  return array.some((element) => element % 3 === 0);
}

// Um número é múltiplo de 3 se, ao dividirmos esse número por 3, o resto da divisão é igual a zero. Isso significa que o número pode ser expresso como uma quantidade inteira de grupos de 3.
