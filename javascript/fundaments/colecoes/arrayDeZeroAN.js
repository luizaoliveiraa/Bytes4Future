// Cria uma função que recebe um número como argumento e retorna um array com os números de 0 a n. Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0." Utiliza o que aprendeste sobre Recursão para resolver este exercício.

function arrayDeZeroAN(n) {
  if (n < 0) return "Por favor insira um número superior a 0.";
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(i);
  }
  return array;
}

// /OU COM RECURSAO

function arrayDeZeroAN(n) {
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  } else {
    let i = 0;
    let novarray = [];
    function calcularN() {
      if (i === n + 1) {
        //verificamos se i é igual a n + 1. Se for, significa que já preenchemos o array até n e podemos encerrar a recursão retornando 0.

        return 0;
      }
      novarray.push(i); //Adicionamos o valor atual de i ao array novarray, incrementamos i e chamamos recursivamente a função calcularN.  > preencher o array novarray com os números de 0 a n.
      i++;
      calcularN();
    }
    calcularN();
    return novarray;
  }
}

//OUUUU DESSA FORMA
function arrayDeZeroAN(n) {
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  } else {
    return Array.from({ length: n + 1 }, (_, i) => i);
  }
}
