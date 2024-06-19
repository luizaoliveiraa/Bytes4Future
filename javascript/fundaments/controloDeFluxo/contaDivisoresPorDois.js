// Cria uma função que recebe como argumento um número e retorna o número de vezes em que é possível fazer a divisão inteira desse número por 2.

function contaNumeroDeDivisoesPorDois(n) {
  let contador = 0;
  let divisores = n;
  for (; divisores >= 2; contador++) {
    divisores = Math.floor(divisores / 2);
  }
  return contador;
}

// OUUU

function contaNumeroDeDivisoesPorDois(n) {
  let contador = 0;
  let divisao = n;
  while (divisao >= 2) {
    divisao = Math.floor(divisao / 2);
    contador++;
  }
  return contador;
}


