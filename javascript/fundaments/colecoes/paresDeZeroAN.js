// Cria uma função que recebe um array como argumento e retorna um array com os números pares desse array.

// Utiliza o que aprendeste sobre Arrays para resolver este exercício.

function paresDeZeroAN(n) {
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  } else {
    let i = 0;
    let novoArray = [];
    function paresArray() {
      if (i > n) {
        return;
      } else if (i % 2 === 0) {
        novoArray.push(i);
      }
      i++;
      paresArray();
    }

    paresArray();
    return novoArray;
  }
}
