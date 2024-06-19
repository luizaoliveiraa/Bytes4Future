//  Cria a função FizzBuzz, que tem o argumento n, que é um número inteiro, e que retorna um array com n elementos em que os índices múltiplos de 3 possuem o valor de "Fizz", os múltiplos de 5 possuem o valor de "Buzz" e os múltiplos de 15 possuem o valor de "FizzBuzz", todos os outros elementos do array devem possuir o valor de " ", os índices devem começar em 1.

function FizzBuzz(n) {
  let arrayNelem = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      arrayNelem.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arrayNelem.push("Buzz");
    } else if (i % 3 === 0) {
      arrayNelem.push("Fizz");
    } else {
      arrayNelem.push(" ");
    }
  }
  return arrayNelem;
}
