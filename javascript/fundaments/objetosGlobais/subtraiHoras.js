//  Cria uma função que recebe uma data e um número de horas como argumentos e retorna uma nova data resultante da subtração.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function subtraiHoras(data, horas) {
  let novaData = new Date(data);
  novaData.setHours(novaData.getHours() - horas);
  return novaData;
}
