//array que recebe um array e retorna os elementos ímpares

function mantemIndicesImpares(array) {
  console.log(array);
  const proximoArray = array.slice(1);
  if (array.length === 0 || array.length === 1) {
    //ou (array.length <=1)
    //essas poisices nao sao ímpares - vazio ou posição 0 caso tenha um só elemento
    return [];
  }
  if (array.length >= 2) {
    return [array[1]].concat(mantemIndicesImpares(array.slice(2)));
  }
}
