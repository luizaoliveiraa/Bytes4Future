// Cria uma função que recebe uma data e um número de dias como argumentos e retorna uma nova data resultante da subtração.Utiliza o que aprendeste sobre Date para resolver este exercício.

function subtraiDias(data, dias) {
  let novaData = new Date(data);
  novaData.setTime(data.getTime() - dias * 1000 * 60 * 60 * 24);
  return novaData;
}

function subtraiDias(data, dias) {
  data.setDate(data.getDate() - dias);
  return data;
}

function subtraiDiasMs(data, dias) {
  return new Date(data.getTime() - dias * 1000 * 60 * 60 * 24);
}
