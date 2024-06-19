function superficieDoParalelepipedoQuadrado(ladodabase, comprimento) {
  let areaPara =
    2 * comprimento * ladodabase +
    2 * comprimento * ladodabase +
    2 * ladodabase * ladodabase;
  return areaPara;
}


//Area do paralelepipedo = 2ab + 2ac + 2bc. > a = "altura" > basta multiplicar as duas dimensões da face.

//OUUU

function superficieDoParalelepipedoQuadrado(ladodabase, comprimento) {
  let areaPara = 4 * comprimento * ladodabase + 2 * ladodabase * ladodabase;
  return areaPara;
}
