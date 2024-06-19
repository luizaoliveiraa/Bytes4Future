// Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma.

function adicionaSemanas(data, semanas) {
  let novaData = new Date(data);
  novaData.setDate(novaData.getDate() + semanas * 7);
  return novaData;
}
const datinha = new Date();
//console.log(datinha)