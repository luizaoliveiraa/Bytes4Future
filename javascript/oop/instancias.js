class InstanceCounter {
  static instances = 0;

  constructor() {
    InstanceCounter.instances++;
  }
}
const a = new InstanceCounter();
const b = new InstanceCounter();
const c = new InstanceCounter();

//console.log(InstanceCounter.instances)

//console.log(Inteiro.eInteiro(5));

class ContadorDeIstancias {
  constructor() {
    this.instancias++; //propriedade da instância, cada vez que cria-se uma aqui é incrementado em 1, para sabermos a quantidade de instancias criadas. --> ou entao CriadorDeInstancias.instancias++
  }
  static instancias = 0;
}
