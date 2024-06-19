// Cria a função obtemPropriedades que recebe um objeto e retorna um array que inclui os nomes de todas as propriedades.

function obtemPropriedades(objeto) {
  return Object.keys(objeto);
}

//ou

function obtemPropriedades(objeto) {
  // escreve aqui a função
  let arr = [];
  for (let prop in objeto) {
    arr.push(prop);
  }
  return arr;
}

