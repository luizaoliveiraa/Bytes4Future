class Porta {
  constructor() {
    this.trinco = false;
  }

  trancar() {
    this.trinco = true;
    console.log("Porta trancada.");
  }

  destrancar() {
    this.trinco = false;
    console.log("Porta destrancada.");
  }

  verificaEstado() {
    if (this.trinco) {
      console.log("A porta está trancada.");
    } else {
      console.log("A porta está destrancada.");
    }
  }
}

class PortaBlindada extends Porta {
  constructor() {
    super();
    this.trincoSuperior = false;
    this.trincoInferior = false;
    this.trincoTraseiro = false;
  }

  trancar() {
    super.trancar();
    this.trincoSuperior = true;
    this.trincoInferior = true;
    this.trincoTraseiro = true;
    console.log("Trincos superior, inferior e traseiro acionados.");
  }

  destrancar() {
    super.destrancar();
    this.trincoSuperior = false;
    this.trincoInferior = false;
    this.trincoTraseiro = false;
    console.log("Trincos superior, inferior e traseiro recolhidos.");
  }

  verificaEstado() {
    super.verificaEstado();
    if (this.trincoSuperior && this.trincoInferior && this.trincoTraseiro) {
      console.log("Trincos superior, inferior e traseiro estão acionados.");
    } else {
      console.log("Trincos superior, inferior e traseiro não estão acionados.");
    }
  }
}

// Exemplo de uso
const porta = new Porta();
const portaBlindada = new PortaBlindada();

porta.trancar(); // Saída: Porta trancada.
porta.verificaEstado(); // Saída: A porta está trancada.

portaBlindada.trancar(); // Saída: Porta trancada. Trincos superior, inferior e traseiro acionados.
portaBlindada.verificaEstado(); // Saída: A porta está trancada. Trincos superior, inferior e traseiro estão acionados.

porta.destrancar(); // Saída: Porta destrancada.
porta.verificaEstado(); // Saída: A porta está destrancada.

portaBlindada.destrancar(); // Saída: Porta destrancada. Trincos superior, inferior e traseiro recolhidos.
portaBlindada.verificaEstado(); // Saída: A porta está destrancada. Trincos superior, inferior e traseiro não estão acionados.

//Nesse exemplo, ambas as classes Porta e PortaBlindada possuem os métodos trancar, destrancar e verificaEstado. A classe PortaBlindada herda da classe Porta e reimplementa os métodos trancar e destrancar para lidar com os trincos específicos de uma porta blindada.
