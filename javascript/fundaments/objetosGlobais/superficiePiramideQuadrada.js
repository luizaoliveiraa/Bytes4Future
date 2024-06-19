function superficieDaPiramideQuadrada(ladodabase, altura) {
  a = ladodabase / 2; //  a  seria o "m" na imagem - base do triangulo dividido por 2
  aTri = Math.sqrt(a ** 2 + altura ** 2); //  seria o "g" - hipotenusa - aplica pitágoras
  areaTri = (ladodabase * aTri) / 2; //área do triangulo - b*h/2
  return ladodabase ** 2 + 4 * areaTri; // area do quadrado (base da piramide) + area do triangulo * 4 > piramide quadrática tem 4 lados
}

function superficieDaPiramideQuadrada(ladodabase, altura) {
  let catetoTri = ladodabase / 2;
  let hipoTri = Math.sqrt(catetoTri ** 2 + altura ** 2);
  let areaTri = (ladodabase * hipoTri) / 2; //área do triangulo - b*h/2
  return ladodabase ** 2 + 4 * areaTri; // area do quadrado (base da piramide) + area do triangulo * 4
}
