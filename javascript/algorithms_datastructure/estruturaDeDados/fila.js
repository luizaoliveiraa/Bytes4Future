// Implementa a classe Fila, lembra-te que deve seguir as regras First In, First Out.
// A classe deve ter três métodos:
// 	1. adicionar, recebe um elemento como argumento e insere-o na Fila.
// 	2. remover, remove o elemento da frente da Fila, caso a Fila esteja vazia, retorna "Fila vazia!"
// 	3. obterElemento, retorna o elemento que esteja na frente da Fila, caso a Fila esteja vazia, retorna

class Fila {
  #array;
  constructor(array) {
    this.#array = [];
  }
  adicionar(elem) {
    this.#array.push(elem);
  }
  remover() {
    if (this.#array.length === 0) return "Fila vazia!";
    else this.#array.shift();
  }
  obterElemento() {
    if (this.#array.length === 0) return "Fila vazia!";
    return this.#array[0];
  }
}
