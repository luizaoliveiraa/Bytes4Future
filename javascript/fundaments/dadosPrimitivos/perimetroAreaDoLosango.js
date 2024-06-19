// O quadrado e o losango possuem todos os lados congruentes, então, para calcular o perímetro dessas figuras planas, basta multiplicar o comprimento do seu lado por 4.
// PRIMEIRO TEMOS QUE DESCOBRIR QUANTO VALE CADA LADO DO LOSANGO, CONSEGUIMOS FAZENDO O TEOREMA DE PITÁGORAS, HIPOTENUSA² = CATETO²+CATETO², NESSE CASO A HIPOTENUSA SERIA O LADO E OS CATETOS SERIAM AS DIAGONAIS.

function perimetroDoLosango(diagonalMaior, diagonalMenor) {
  let lado = Math.sLmqrt((diagonalMaior / 2) ** 2 + (diagonalMenor / 2) ** 2);
  return 4 * lado;
}

// Area do losango: produto entre a diagonal maior e a diagonal menor; o produto é dividido por dois, e o resultado equivale à área do losango. Essa fórmula pode ser descrita da seguinte forma: A=D*d/2.

function areaDoLosango(diagonalMaior, diagonalMenor) {
  return (diagonalMaior * diagonalMenor) / 2;
}
