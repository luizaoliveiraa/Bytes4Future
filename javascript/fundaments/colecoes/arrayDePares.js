// Cria uma função que recebe um array como argumento e retorna um array com os números pares desse array.
// Utiliza o que aprendeste sobre Arrays para resolver este exercício.Exemplo de Output:

function arrayDePares(array) {
  let arrayPares = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPares.push(array[i]);
    }
  }
  return arrayPares;
}
