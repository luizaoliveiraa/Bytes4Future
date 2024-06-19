// Cria uma função que recebe como argumento um número e retorna o fatorial desse número.
// Utiliza o que aprendeste sobre while para resolver este exercício.

function fatorialN(n) {
  let result = BigInt(n);
  if (BigInt(n) === 0 || BigInt(n) === 1) {
    return 1n;
  }
  while (BigInt(n) > 1) {
    n--;
    result = result * BigInt(n); //ou result *=n
  }
  return BigInt(result);
}

