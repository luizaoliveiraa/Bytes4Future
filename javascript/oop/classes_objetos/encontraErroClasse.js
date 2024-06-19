// Encontra os erros que existem na classe Inteiro, é esperado que:
// A classe Inteiro tenha um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.
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
  set valor(nv) {
    if (Number.isNaN(Number(nv))) {
      this.#valor = this.#valor;
    } else {
      this.#valor = Math.floor(nv);
    }
  }
}

class Inteiro {
  #inteiro;
  constructor(inteiro) {
    this.#inteiro = inteiro;
  }

  get inteiro() {
    return this.#inteiro;
  }
  set inteiro(nv) {
    if (Number.isNaN(Number(nv))) {
      this.#inteiro = this.#inteiro ? this.#inteiro : 0;
    } else {
      this.#inteiro = Math.round(nv);
    }
  }
}
