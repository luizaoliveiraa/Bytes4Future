// Cria uma função que recebe um array como argumento e retorna um array com a parte decimal de cada elemento arredondada às centésimas.
// Utiliza o que aprendeste sobre o map para resolver este exercício.

function partesDecimais(array) {
  // return array.map((numero) => (numero % 1).toFixed(2));
  function decimal(n) {
    n = Math.abs(n);
    return n - Math.floor(n);
  }
  let newarray = array.map((a) => Math.floor(decimal(a) * 100) / 100);
  return newarray;
}

let arrayyy = [1.5, 2.4, 4.1, 4.2];

//console.log(partesDecimais(arrayyy));