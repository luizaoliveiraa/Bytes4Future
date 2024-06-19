// Cria uma função que recebe um array como argumento e cria um mapa com o número de ocorrências de cada elemento.
// Utiliza o que aprendeste sobre o reduce para resolver este exercício.

function mapaDeOcorrencias(array) {
  const ocorrenciasMapa = array.reduce((ocorrencias, elemento) => {
    if (ocorrencias.has(elemento)) {
      ocorrencias.set(elemento, ocorrencias.get(elemento) + 1);
    } else {
      ocorrencias.set(elemento, 1);
    }
    return ocorrencias;
  }, new Map());

  return ocorrenciasMapa;
}

function contarOcorrencias(array) {
  return array.reduce((ocorrencias, elemento) => {
    ocorrencias[elemento] = (ocorrencias[elemento] || 0) + 1;
    return ocorrencias;
  }, {});
}
