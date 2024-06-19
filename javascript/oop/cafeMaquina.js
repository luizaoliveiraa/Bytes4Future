class MaquinaDeCafe {
  constructor(custoDoCafe, capacidadeDepositoBorra) {
    this.custoDoCafe = custoDoCafe;
    this.capacidadeDepositoBorra = capacidadeDepositoBorra;

    // Estado inicial dos depósitos
    this.capacidadeDepositoAgua = 0;
    this.capacidadeDepositoCafe = 0;
    this.capacidadeDepositoTroco = 0;
    this.capacidadeDepositoBorra = capacidadeDepositoBorra;

    // Valor introduzido pelo utilizador
    this.valorIntroduzido = 0;

    // Valor recebido pelos cafés feitos
    this.valorRecebido = 0;

    // Inicializa o número de doses de café
    this.dosesDeCafe = 0;

    // Inicializa o número de cêntimos disponíveis para troco e recolha
    this.centimosParaTroco = 0;
    this.centimosParaRecolha = 0;
  }

  fazCafe() {
    if (this.valorIntroduzido >= this.custoDoCafe) {
      this.valorRecebido += this.custoDoCafe;
      this.centimosParaRecolha += this.valorIntroduzido - this.custoDoCafe;
      this.valorIntroduzido = 0;
      this.dosesDeCafe--;
      this.devolveTroco();
      this.imprimeEstado();
    } else {
      console.log("Por favor, insira mais dinheiro para fazer café.");
    }
  }

  devolveTroco() {
    this.centimosParaRecolha += this.valorIntroduzido;
    this.valorIntroduzido = 0;
  }

  recebeCentimos(centimos) {
    this.valorIntroduzido += centimos;
  }

  cancelaOperacao() {
    this.devolveTroco();
  }

  esvaziaDepositoBorra() {
    this.capacidadeDepositoBorra = 0;
  }

  adicionaAgua(doses) {
    this.capacidadeDepositoAgua += doses;
  }

  adicionaCafe(doses) {
    this.capacidadeDepositoCafe += doses;
    this.dosesDeCafe += doses;
  }

  adicionaTroco(centimos) {
    this.centimosParaTroco += centimos;
  }

  toString() {
    return `Estado da Máquina de Café:
Doses de Café Disponíveis: ${this.dosesDeCafe}
Valor Introduzido: ${this.valorIntroduzido} cêntimos
Valor Recebido: ${this.valorRecebido} cêntimos
Cêntimos para Troco: ${this.centimosParaTroco}
Cêntimos para Recolha: ${this.centimosParaRecolha}
Depósito de Borra: ${this.capacidadeDepositoBorra} doses
Depósito de Água: ${this.capacidadeDepositoAgua} doses
Depósito de Café: ${this.capacidadeDepositoCafe} doses`;
  }

  imprimeEstado() {
    console.log(this.toString());
  }
}
const maquina = new MaquinaDeCafe(50, 10);
