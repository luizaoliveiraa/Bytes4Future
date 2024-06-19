// Cria uma função que recebe um array como argumento e retorna o valor mínimo par.
// Utiliza o que aprendeste sobre o reduce para resolver este exercício.

function minimoPar(array) {
  return array.reduce((minPar, elemento) => {
    if (elemento < minPar && elemento % 2 === 0) {
      return elemento;
    }
    return minPar;
  });
}
