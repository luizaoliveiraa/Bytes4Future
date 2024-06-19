// Cria uma função que recebe um array como argumento e retorna o número que mais vezes se repete.
// Utiliza o que aprendeste sobre Map para resolver este exercício

function calculaModa(array) {
  const contador = {};
  array.map((numero) => {
    if (contador[numero]) {
      contador[numero]++;
    } else {
      contador[numero] = 1;
    }
  });
  let moda;
  let maxRepeticoes = 0;
  for (const numero in contador) {
    if (contador[numero] > maxRepeticoes) {
      moda = numero;
      maxRepeticoes = contador[numero];
    }
  }
  return parseInt(moda);
}
