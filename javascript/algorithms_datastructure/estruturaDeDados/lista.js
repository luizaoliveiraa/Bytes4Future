// Implementa as classes Lista e ElementoDaLista.
// A classe Lista deve possuir 1 método:
// 	1. insereNoInicio()
// O método deve receber um ElementoDaLista como argumento, e define esse elemento como início da lista.
// Na classe Lista deve também ser possível aceder ao primeiro elemento da lista, ou seja, o início da lista.
// A classe Lista tem um construtor que recebe, opcionalmente, um elemento. Se o elemento for recebido, passa a ser o primeiro da lista.
// A classe ElementoDaLista deve ter um construtor, que define os dados do elemento, também tem uma propriedade proximo, que é uma referência para o próximo elemento da lista. Deve ser possível obter e alterar os valores do proximo elemento. Deve ser possível obter os dados do elemento.
// Deve também ser possível verificar se um ElementoDaLista eUltimo da

class Lista {
  #primeiro;
  constructor(elem) {
    this.#primeiro = elem;
  }
  get primeiro() {
    return this.#primeiro;
  }
  insereNoInicio(elem) {
    elem.proximo = this.#primeiro;
    this.#primeiro = elem;
  }
}
class ElementoDaLista {
  #proximo;
  #dados;
  constructor(dados, proximo) {
    this.#dados = dados;
    this.#proximo = proximo;
  }
  get proximo() {
    return this.#proximo;
  }
  set proximo(proxElem) {
    this.#proximo = proxElem;
  }
  get dados() {
    return this.#dados;
  }
  get eUltimo() {
    return !this.#proximo;
  }
}
