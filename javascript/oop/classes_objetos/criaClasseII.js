// Cria a classe  que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.
// Deve ser possível aceder e alterar a propriedade valor garantindo as regras acima.
// Se o valor estiver definido e for passado um novo valor inválido, deve manter-se o valor anterior.

class Inteiro {
  #valor;
  constructor(valor) {
    if (typeof valor === "number") {
      this.#valor = Math.floor(valor);
    } else {
      this.#valor = 0;
    }
  }
  get valor() {
    return this.#valor;
  }
  set valor(novoValor) {
    if (typeof novoValor === "number") {
      this.#valor = Math.floor(novoValor);
    } else {
      return this.#valor;
    }
  }
}

const algo = new Inteiro(5);
algo.valor = "sausja";
