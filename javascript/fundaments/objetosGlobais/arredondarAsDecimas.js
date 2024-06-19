function arredondarAsDecimas(d) {
  return Math.round(d * 10) / 10;
}
// Math.round(d * 10): Esta linha multiplica o número d por 10 e então aplica o método Math.round() para arredondar o resultado para o número inteiro mais próximo. Multiplicar por 10 move o ponto decimal uma posição para a direita, o que nos permite arredondar para as décimas.
// / 10: Após o arredondamento, dividimos o resultado por 10 para mover o ponto decimal de volta para a posição original. Isso restaura o valor original do número, mas agora arredondado para as décimas.

//ou

function arredondarAsDecimas(d) {
  return parseFloat(d.toFixed(1));
}
