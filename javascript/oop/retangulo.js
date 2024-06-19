class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  calculaArea() {
    return this.altura * this.largura;
  }
}

class Quadrado extends Retangulo {
  constructor(lado) {
    super(lado, lado);
  }
}

// Exemplo de uso
const retangulo = new Retangulo(5, 10);
console.log("Área do retângulo:", retangulo.calculaArea()); // Saída: Área do retângulo: 50

const quadrado = new Quadrado(5);
console.log("Área do quadrado:", quadrado.calculaArea()); // Saída: Área do quadrado: 25

//"super" é uma palavra reservada em JavaScript, especificamente quando usada em uma classe, para acessar o objeto pai de uma classe filha. Não é possível usá-la para outros fins além disso. Quando você chama super() dentro do construtor de uma classe filha, está chamando o construtor da classe pai. Isso é útil para inicializar propriedades da classe pai que também são relevantes para a classe filha.
