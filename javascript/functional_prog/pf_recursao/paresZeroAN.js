// Cria uma função que recebe um número como argumento e retorna um array com os números pares de 0 a n.
// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
// Utiliza o que aprendeste sobre Recursão para resolver este exercício.
// Exemplo de Output:

function paresDeZeroAN(n) {
  if (n <= 0 || isNaN(n)) {
    return "Por favor insira um número superior a 0.";
  } else {
    let novarray = [];

    function calcularNdeNs(i) {
      if (i > n) {
        // Condição de parada: quando i for maior que n
        return;
      }

      if (i % 2 === 0) {
        // Verifica se i é par
        novarray.push(i);
      }

      calcularNdeNs(i + 1); // Chamada recursiva com i + 1
    }

    calcularNdeNs(0); // Inicia a chamada recursiva com i = 0
    return novarray;
  }
}

// Exemplo de uso:
console.log(paresDeZeroAN(10)); // [0, 2, 4, 6, 8, 10]
console.log(paresDeZeroAN(5)); // [0, 2, 4]
console.log(paresDeZeroAN(-3)); // "Por favor insira um número superior a 0."
console.log(paresDeZeroAN("abc")); // "Por favor insira um número superior a 0."
