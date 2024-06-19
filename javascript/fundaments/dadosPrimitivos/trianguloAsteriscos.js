//triangulo invertido
function problemaAsteriscos() {
  let triangulo = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      triangulo = triangulo + "*";
    }
    triangulo = triangulo + "\n";
  }
}

//   console.log(triangulo);
// problemaAsteriscos()

//triangulo normal
function problemaAsteriscos() {
  let string = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
//console.log(problemaAsteriscos())
