//  Completa a classe GarrafaDeAgua que tem um construtor que recebe uma capacidade.
// Deve ter a propriedade aberta, que é um booleano e deve inicializada a false.
// Deve ter a propriedade quantidade, que é um valor entre 0 e capacidade e deve ser inicializada com o valor 0.
// Deve ser possível aceder às propriedades capacidade, quantidade e aberta garantindo as regras acima.
// Deve ser possível abrir e fechar a GarrafaDeAgua através do método abrirFechar.
// Deve ser possível beber da garrafa, através do método beber, consumindo 200 da quantidade e deve ser possível encher a garrafa através do método encher que recebe um argumento quant.

class GarrafaDeAgua {
  #capacidade;
  #quantidade;
  #aberta;
  constructor(capacidade) {
    this.#capacidade = capacidade;
    this.#quantidade = 0;
    this.#aberta = false;
  }
  beber() {
    if (this.#aberta) {
      if (this.#quantidade === 0) {
        return "A garrafa está vazia";
      }
      if (this.#quantidade < 200) {
        this.#quantidade = 0;
      } else {
        this.#quantidade -= 200;
      }
    } else {
      return "A garrafa está fechada";
    }
  }
  encher(quant) {
    if (this.#aberta) {
      if (this.#quantidade + quant > this.#capacidade) {
        this.#quantidade = this.#capacidade;
      } else {
        this.#quantidade += quant;
      }
    } else {
      return "A garrafa está fechada";
    }
  }
  abrirFechar() {
    if (!this.#aberta) {
      this.#aberta = true;
    } else {
      this.#aberta = false;
    }
  }
  get quantidade() {
    return this.#quantidade;
  }
  get aberta() {
    return this.#aberta;
  }
  get capacidade() {
    return this.#capacidade;
  }
}
