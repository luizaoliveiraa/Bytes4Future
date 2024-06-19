// Cria uma função que recebe uma data como argumento e a retorna o dia da semana por extenso.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function diaDaSemanaPorExtenso(data) {
  let diaSemana = data.getDay();
  let diaMap = new Map([
    [0, "domingo"],
    [1, "segunda-feira"],
    [2, "terça-feira"],
    [3, "quarta-feira"],
    [4, "quinta-feira"],
    [5, "sexta-feira"],
    [6, "sábado"],
  ]);

  //ou
  function diaDaSemanaPorExtenso(data) {
    // escreve aqui a função
    let dayMap = new Map([
      [0, "domingo"],
      [1, "segunda-feira"],
      [2, "terça-feira"],
      [3, "quarta-feira"],
      [4, "quinta-feira"],
      [5, "sexta-feira"],
      [6, "sábado"],
    ]);
    return dayMap.get(data.getDay());
  }

  return diaMap.get(diaSemana);
}
