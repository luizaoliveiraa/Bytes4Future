function superficieDoCone(raio, altura) {
  let area = Math.PI * raio * (raio + Math.sqrt(altura ** 2 + raio ** 2));
  return area;
}



function superficieDoCone(raio, altura) {
  // escreve aqui a função
  let geratrizHipot = Math.sqrt(raio ** 2 + altura ** 2);
  return Math.PI * raio * (raio + geratrizHipot);
}
