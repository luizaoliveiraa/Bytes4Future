// Por outro lado, no hexágono, que tem seis lados iguais, vamos ter que multiplicar o comprimento dos lados por seis: Perímetro do hexágono = 6 x comprimento lados.

function perimetroDoHexagono(lado) {
  return lado * 6;
}

// Área = (3* lado2*√3)/ 2, onde lado é o tamanho de um lado do hexágono regular

function areaDoHexagono(lado) {
  let area = (3 * lado ** 2 * Math.sqrt(3)) / 2;
  return Math.floor(area);
}
