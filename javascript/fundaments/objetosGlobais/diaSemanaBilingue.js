function diaDaSemanaPorExtensoBilingue(data, lingua) {
  let weekDay = data.getDay();
  let semanaPt = new Map([
    [0, "domingo"],
    [1, "segunda-feira"],
    [2, "terça-feira"],
    [3, "quarta-feira"],
    [4, "quinta-feira"],
    [5, "sexta-feira"],
    [6, "sábado"],
  ]);
  let semanaEn = new Map([
    [0, "sunday"],
    [1, "monday"],
    [2, "tuesday"],
    [3, "wednesday"],
    [4, "thursday"],
    [5, "friday"],
    [6, "saturday"],
  ]);
  if (lingua === "pt") {
    return semanaPt.get(weekDay);
  } else {
    lingua === "en";
    return semanaEn.get(weekDay);
  }
}

//ou

function diaDaSemanaPorExtensoBilingue(data, lingua) {
  let semanaPt = new Map([
    [0, "domingo"],
    [1, "segunda-feira"],
    [2, "terça-feira"],
    [3, "quarta-feira"],
    [4, "quinta-feira"],
    [5, "sexta-feira"],
    [6, "sábado"],
  ]);
  let semanaEn = new Map([
    [0, "sunday"],
    [1, "monday"],
    [2, "tuesday"],
    [3, "wednesday"],
    [4, "thursday"],
    [5, "friday"],
    [6, "saturday"],
  ]);
  if (lingua === "pt") {
    return semanaPt.get(data.getDay());
  } else {
    lingua === "en";
    return semanaEn.get(data.getDay());
  }
}
