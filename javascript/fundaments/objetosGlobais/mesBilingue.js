function mesPorExtensoBilingue(data, lingua) {
  // escreve aqui a função
  let monthNumber = data.getMonth();
  let monthPt = new Map([
    [0, "Janeiro"],
    [1, "Fevereiro"],
    [2, "Março"],
    [3, "Abril"],
    [4, "Maio"],
    [5, "Junho"],
    [6, "Julho"],
    [7, "Agosto"],
    [8, "Setembro"],
    [9, "Outubro"],
    [10, "Novembro"],
    [11, "Dezembro"],
  ]);
  let monthEn = new Map([
    [0, "January"],
    [1, "February"],
    [2, "March"],
    [3, "April"],
    [4, "May"],
    [5, "June"],
    [6, "July"],
    [7, "August"],
    [8, "September"],
    [9, "October"],
    [10, "November"],
    [11, "December"],
  ]);
  if (lingua === "pt") {
    return monthPt.get(monthNumber);
  } else {
    return monthEn.get(monthNumber);
  }
}

// ouuu;

// if (lingua === "pt") {
//   return monthPt.get(data.getMonth());
// } else {
//   return monthEn.get(data.getMonth());
// }
