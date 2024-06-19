function obterMedia(array) {
  const soma = array1.reduce(
    (accumulator, valorAtual) => accumulator + valorAtual,
    valorInicial
  );
  //console.log("saosao", soma);
  return Math.round(soma / array.length);
}

const array1 = [1, 2, 3, 4];

const valorInicial = 0;
function obterMedia(array) {
  const soma = array1.reduce(
    (accumulator, valorAtual) => accumulator + valorAtual,
    valorInicial
  );
  //console.log("saosao", soma);
  return Math.round(soma / array.length);
}

//console.log(obterMedia(array1));

// media sem for, apenas com sort
