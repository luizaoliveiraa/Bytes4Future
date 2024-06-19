function contaVotos(array) {
  let objeto = {
    votos: 0,
    potencial: array.length,
  };
  numero()
  for (let i = 0; i < array.length; i++) {
    if (array[i].votou === true) {
      objeto.votos++;
    }
  }
  return objeto;
}

function numero() {
  return 1000;
}

module.exports = { contaVotos, numero };
