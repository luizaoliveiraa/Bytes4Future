// Cria uma função que recebe uma data como argumento e a retorna o mês por extenso.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function mesPorExtenso(data) {
  let monthWord = data.getMonth();
  let monthMap = new Map([
    [0, "janeiro"],
    [1, "fevereiro"],
    [2, "março"],
    [3, "abril"],
    [4, "maio"],
    [5, "junho"],
    [6, "julho"],
    [7, "agosto"],
    [8, "setembro"],
    [9, "outubro"],
    [10, "novembro"],
    [11, "dezembro"],
  ]);
  return monthMap.get(monthWord);
}

//OU

function mesPorExtenso(data) {
  let monthMap = new Map([
    [0, "janeiro"],
    [1, "fevereiro"],
    [2, "março"],
    [3, "abril"],
    [4, "maio"],
    [5, "junho"],
    [6, "julho"],
    [7, "agosto"],
    [8, "setembro"],
    [9, "outubro"],
    [10, "novembro"],
    [11, "dezembro"],
  ]);
  return monthMap.get(data.getMonth());
}
