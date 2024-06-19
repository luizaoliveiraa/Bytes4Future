// Cria uma função que recebe um array como argumento e retorna um array com os números pares.
// Utiliza o que aprendeste sobre a Recursão para resolver este exercício.

function paresDoArray(array) {
  const isEven = array[0] % 2 === 0; //(é par)
  if (array.length === 0) {
    //se length for 0 não há elementos lá dentro, retorna só a estrutura
    return [];
  }
  if (isEven) {
    return [array[0]].concat(paresDoArray(array.slice(1))); //manter elemento par e junta isso ao chamar a função para os próximos elementos
  }
  return [].concat(paresDoArray(array.slice(1))); // isso signifIca, se ele é [] significa que não é impar - NÃO TEM NADA PAR LÁ DENTRO, logo não adiciona nada e retorna o resto
}

function contaParesRecursao(array) {
  if (array.length === 0) {
    return contador;
  }
  if (array[0] % 2 === 0) {
    contador++;
  }
  return contaParesRecursao(array.slice(1));
}

function contaPares(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] % 2 === 0) {
    return 1 + contaPares(array.slice(1));
  }
}
