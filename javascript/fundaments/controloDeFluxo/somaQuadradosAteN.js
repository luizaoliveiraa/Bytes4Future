// Cria uma função que recebe como argumento um número e retorna a soma de todos os quadrados de um até ao número inclusive.

function somaQuadradosAteN(n) {
  let somaQuadrados = 0;
  for (let i = 0; i <= n; i++) {
    somaQuadrados += i ** 2;
  }
  return somaQuadrados;
}
