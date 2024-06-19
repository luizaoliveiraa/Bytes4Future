//  Implementa a class Pilha, que recebe no construtor um argumento capacidade.
// Deve possuir pelo menos uma propriedade:
// 	1. capacidade, inicializada com o valor do argumento do construtor se estiver definido, ou infinito se esse valor não estiver definido.
// Não deve ser possível adicionar mais elementos à pilha do que a capacidade da mesma.
// Deve possuir dois métodos:
// 	1. adicionar(elem)
// 	2. remover()
// 	3. obterValor()
// O método adicionar recebe como argumento o elemento que se pretende inserir na pilha, se a pilha já estiver com tantos quanto a capacidade, retorna "Pilha cheia!".
// O método remover, retira um elemento da pilha, caso a pilha esteja vazia, deve retornar "Pilha vazia!".
// O método obterValor deve retornar o elemento mais recentemente adicionado à pilha, caso a pilha esteja vazia, deve retornar "Pilha vazia!".
// Lembra-te que uma Pilha é sempre LIFO - Last In, First Out.

class Pilha {
  #capacidade;
  #elementos;
  constructor(capacidade, elementos) {
    this.#capacidade = capacidade;
    this.#elementos = [];
  }
  adicionar(elem) {
    if (
      this.#elementos.length === this.#capacidade ||
      this.#elementos > this.#capacidade
    )
      return "Pilha cheia!";
    else this.#elementos.push(elem);
  }
  remover() {
    if (this.#elementos.length === 0) return "Pilha vazia!";
    else this.#elementos.pop();
  }
  obterValor() {
    if (this.#elementos.length === 0) return "Pilha vazia!";
    return this.#elementos[this.#elementos.length - 1];
  }
}
