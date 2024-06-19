// Cria uma função que recebe um array como argumento e retorna o array invertido.
// // Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function inverteArray(array) {
  // escreve aqui a função
  if (array.length === 0) {
    return [];
  }
  return [array[array.length - 1]].concat(
    inverteArray(array.slice(0, array.length - 1))
  ); //(0, array.length-1))) PEGA DO ZERO ATÉ A PENÚLTIMA POSICAO
}

// a função concatena o último elemento do array com a chamada recursiva de inverteArray no restante do array (exceto o último elemento). Isso cria o efeito de inverter o array.

//ou

function inverteArray(array) {
  // escreve aqui a função
  if (array.length === 0) {
    return [];
  }
  return array.reverse();
}
