class Mesa {
  constructor(tampo) {
    this.tampo = tampo;
    this.pernas = [];
  }
  montaPerna(perna) {
    if (perna instanceof Perna) {
      this.pernas.push(perna);
    }
    return this; //nao quer retornar a classe e sim o objeto/instancia
  }
  estaMontada() {
    return this.pernas.length === 4; // == é uma comparação que já retorna boleano por > this pega a perna da própria classe.
  }
}

class Perna {
  constructor() {}
}
class Tampo {
  constructor() {}
}

const tampao = new Tampo();
const mesinha = new Mesa(tampao);

//correcao abaixo

class Table {
  constructor(table_top) {
    this.table_top = table_top;
    this.legs = [];
  }

  buildLeg(leg) {
    if (leg instanceof Leg) {
      this.legs.push(leg);
      return this;
    } else {
      console.log("Error");
      return null;
    }
  }

  isBuilt() {
    return this.legs.length === 4;
  }
}

class Leg {
  constructor() {}
}

class TableTop {
  constructor() {}
}

let table_top = new TableTop();
let table = new Table(table_top);

table.buildLeg(new Leg());
table.buildLeg(new Leg());
table.buildLeg(new Leg());
table.buildLeg(new Leg());

//console.log("Is the table done ? : ", table.isBuilt())

//console.log(mesinha)
