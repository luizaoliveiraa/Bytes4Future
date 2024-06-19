// Cria uma função que recebe um array como argumento e encontra o valor máximo desse array.
// Utiliza o que aprendeste sobre o reduce para resolver este exercício.

function valorMaximo(array) {
  return array.reduce((acumulador, elemento) => Math.max(acumulador, elemento));
}

function valorMaximo(array) {
  function getMax(accumulator, element) {
    return Math.max(accumulator, element);
  }
  return array.reduce(getMax);
}

// OU
function valorMaximo(array) {
  return Math.max(...array);
}
Ou;
const values = [8, 2, 6, 4, 9];
const max = values.reduce(
  (accumulator, currentValue) => Math.max(accumulator, currentValue),
  values[0]
);

console.log(max); // Saída: 9
