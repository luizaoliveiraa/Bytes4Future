function calculaAreaSuperficieDodecaedro(aresta) {
  // Escreve aqui o teu código
  if (aresta < 0) return "Por favor insira um valor positivo.";

  return Math.round(3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * aresta ** 2);
}
