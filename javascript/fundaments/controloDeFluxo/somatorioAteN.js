// Cria uma função que recebe como argumento um número e retorna a soma de todos os números do zero até ao número inclusive.

function somatorioAteN(n) {
  let contador = 0;
  let i = 0;
  while (i <= n) {
    contador += i;
    i++;
  }
  return contador;
}
