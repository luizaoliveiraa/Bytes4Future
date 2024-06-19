// Completa a classe Calculadora que tem um construtor que cria uma propriedade historico, do tipo array. Deve ter quatro métodos somar, subtrair, multiplicar e dividir. Estes métodos recebem dois argumentos a e b, que são números.
// Os métodos devem retornar o resultado da operação.
// Devem também adicionar ao histórico um objeto com as seguintes propriedades:

// {
//     operacao: <- o tipo de operação que foi efetuada
//     a: <- com o valor de a
//     b: <- com o valor de b
//     resultado: <- com o resultado da operação
// }
// Os valores possíveis para a propriedade operacao são: "soma", "subtração", "multiplicação" e "divisão".
// A classe também deve ter um método lerHistorico, que recebe um argumento operacao, se esse argumento não estiver definido, retorna o histórico, caso esteja definido, retorna todos os elementos do histórico com a operação indicada. Ex:

class Calculadora {
  constructor() {
    this.historico = [];
  }
  somar(a, b) {
    let resultado = a + b;
    this.adicionarHistorico(a, b, resultado, "soma");
    return resultado;
  }
  subtrair(a, b) {
    let resultado = a - b;
    this.adicionarHistorico(a, b, resultado, "subtração");
    return resultado;
  }
  multiplicar(a, b) {
    let resultado = a * b;
    this.adicionarHistorico(a, b, resultado, "multiplicação");
    return resultado;
  }
  dividir(a, b) {
    let resultado = a / b;
    this.adicionarHistorico(a, b, resultado, "divisão");
    return resultado;
  }
  lerHistorico(operacao) {
    if (operacao === undefined) {
      return this.historico;
    } else {
      return this.historico.filter((item) => item.operacao === operacao);
    }
  }
  adicionarHistorico(a, b, resultado, operacao) {
    this.historico.push({
      a: a,
      b: b,
      resultado: resultado,
      operacao: operacao,
    });
  }
}
