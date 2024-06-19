class Car {
  constructor(brand, color, model, price, bhp) {
    this.brand = brand; //usa-se THIS para atribuir os argumentos do constructor à instância
    this.color = color;
    this.model = model;
    this.price = price;
    this.bhp = bhp;
  }
  get getBrand() {
    // quero retornar a brand
    return this.brand; //irá retornar a brand daquela instância
  }
}

let myCar = new Car("Ferrari", "red", "F40", "13k", 570);

//console.log(myCar)
