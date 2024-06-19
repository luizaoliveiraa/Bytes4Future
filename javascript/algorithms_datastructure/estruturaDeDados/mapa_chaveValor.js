//  Implementa as classes Mapa e ChaveValor.
// A classe Mapa tem quatro métodos:
// 	1. set, este método adiciona um novo ChaveValor ao Mapa, o método recebe dois argumentos, sendo o primeiro a chave e o segundo o valor. Caso um elemento com essa chave já exista na coleção, substitui o seu valor com o novo valor.
// 	2. has, este método verifica se uma chave existe no Mapa, retorna true caso exista, e false caso contrário, recebe um argumento chave.
// 	3. get, este método recebe como argumento uma chave e retorna o valor associado a essa chave, retorna undefined se a chave não existir no Mapa.
// 	4. clear, este método "limpa" a lista, removendo todos os pares ChaveValor.
// 	5. delete, este método recebe uma chave como argumento e remove o par ChaveValor que tenha a mesma chave.
// A classe ChaveValor tem um construtor que recebe como argumentos uma chave e um valor respetivamente. Deve ter duas propriedades, chave e valor, deve ser possível aceder e alterar à propriedade valor, e deve ser possível aceder à propriedade chave.

class Mapa {
  constructor() {
    this.mapa = new Map();
  }

  set(chave, valor) {
    this.mapa.set(chave, valor);
  }

  has(chave) {
    return this.mapa.has(chave);
  }

  get(chave) {
    return this.mapa.get(chave);
  }

  clear() {
    this.mapa.clear();
  }

  delete(chave) {
    this.mapa.delete(chave);
  }
}
class ChaveValor {
  #chave;
  #valor;
  constructor(chave, valor) {
    this.#chave = chave;
    this.#valor = valor;
  }
  get valor() {
    return this.#valor;
  }
  set valor(novoValor) {
    this.#valor = novoValor;
  }
  get chave() {
    return this.#chave;
  }
}
