// Cria uma função que recebe um array como argumento e retorna um array com a parte inteira de cada elemento.
// Utiliza o que aprendeste sobre o map para resolver este exercício.

function partesInteiras(array) {
  const arrayInteiro = array.map((n) => parseInt(n));
  return arrayInteiro;
}
