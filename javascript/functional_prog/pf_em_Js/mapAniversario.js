function mapas(chaveMes) {
  let mesAniversario;
  let map = new Map([
    [1, "Janeiro"],
    [2, "Fevereiro"],
    [3, "Março"],
    [4, "Abril"],
    [5, "Maio"],
    [6, "Junho"],
    [7, "Julho"],
    [8, "Agosto"],
    [9, "Setembro"],
    [10, "Outubro"],
    [11, "Novembro"],
    [12, "Dezembro"],
  ]);

  if (chaveMes < 1 || chaveMes > 12) {
    return "favor inserir um mês válido";
  } else {
    mesAniversario = map.get(chaveMes);
    return `Faço anos em ${mesAniversario} !!`;
  }
}
//console.log(mapas("Jan")) //janeiro - quero que retorne o valor daquela chave - "Jan"
