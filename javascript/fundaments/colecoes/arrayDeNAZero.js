// Cria uma função que recebe um número como argumento e retorna um array com os números de n a 0.
// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
// Utiliza o que aprendeste sobre Recursão para resolver este exercício.

function arrayDeNAZero(n) {
  // escreve aqui a função
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  } else {
    let i = n;
    let novarray = [];
    function calcularNdeNs() {
      if (i < 0) {
        return 0;
      }
      novarray.push(i);
      i--;
      calcularNdeNs();
    }
    calcularNdeNs();
    return novarray;
  }
}

function arrayDeZeroAN(n) {
  // escreve aqui a função
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  } else {
    let i = 0;
    let novarray = [];
    function calcularNdeNs() {
      if (i === n + 1) {
        return 0;
      }
      novarray.push(i);
      i++;
      calcularNdeNs();
    }
    calcularNdeNs();
    return novarray;
  }
}

// Ouu

function arrayDeZeroAN(n) {
  if (n <= 0) return "Por favor insira um número superior a 0.";

  function gerarArray(i = 0, array = []) {
    if (i === n + 1) return array;
    array.push(i);
    return gerarArray(i + 1, array);
  }

  return gerarArray();
}
