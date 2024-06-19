function calculaAreaSuperficiePiramidePentagonal(ladodabase, altura) {
  // Escreve aqui o teu código
  if (ladodabase < 0 || altura < 0)
    return "Por favor introduza valores positivos.";
  const cima =
    ladodabase +
    Math.sqrt(ladodabase ** 2 + 4 * altura ** 2 * (5 - 2 * Math.sqrt(5)));
  const baixo = Math.sqrt(5 - 2 * Math.sqrt(5));
  return Math.round((5 / 4) * ladodabase * (cima / baixo));
}
