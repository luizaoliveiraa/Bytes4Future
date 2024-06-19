// Cria uma função que recebe um array como argumento e retorna o primeiro elemento primo.
// Utiliza o que aprendeste sobre o find para resolver este exercício.

function encontraPrimo(array) {
  function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  return array.find((element) => ehPrimo(element));
}

// Um número primo é um número natural maior que 1 que só é divisível por 1 e por ele mesmo, ou seja, não possui divisores além desses dois. Em outras palavras, um número primo é um número que não pode ser formado pela multiplicação de dois números inteiros diferentes de 1 e do próprio número.
// Por exemplo, os números 2, 3, 5, 7, 11, 13, 17, 19, 23, entre outros, são exemplos de números primos, pois não têm divisores além de 1 e do próprio número.
// Por outro lado, números como 4, 6, 8, 9, 10, 12, não são primos, pois podem ser divididos por outros números além de 1 e deles mesmos. Por exemplo, o número 4 pode ser dividido por 2, além de 1 e 4.
