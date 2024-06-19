// Cria uma função que recebe uma data como argumento e a retorna por extenso.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function dataPorExtenso(data) {
  let diaSemana = data.getDay();
  let diaMes = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();
  let mesMap = new Map([
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
  let semanaMap = new Map([
    [0, "domingo"],
    [1, "segunda-feira"],
    [2, "terça-feira"],
    [3, "quarta-feira"],
    [4, "quinta-feira"],
    [5, "sexta-feira"],
    [6, "sábado"],
  ]);
  return `${semanaMap.get(diaSemana)}, ${diaMes} de ${mesMap.get(
    mes
  )} de ${ano}`;
}

//The getDate() method of Date instances returns the day of the month for this date according to local time.
// const birthday = new Date('August 19, 1975 23:15:30');
// const date1 = birthday.getDate(); console.log(date1); // Expected output: 19

//The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday.
// const birthday = new Date('August 19, 1975 23:15:30');
// const day1 = birthday.getDay(); // Sunday - Saturday : 0 - 6   console.log(day1); // Expected output: 2

//The getMonth() method of Date instances returns the month for this date according to local time, as a zero-based value (where zero indicates the first month of the year).
// const moonLanding = new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getMonth()); // (January gives 0) // Expected output: 6

//The getFullYear() method of Date instances returns the year for this date according to local time.
// const moonLanding = new Date('July 20, 69 00:20:18');
// console.log(moonLanding.getFullYear());  // Expected output: 1969

function dataPorExtenso(data) {
  // escreve aqui a função
  let weekDay = new Map([
    [0, "domingo"],
    [1, "segunda-feira"],
    [2, "terça-feira"],
    [3, "quarta-feira"],
    [4, "quinta-feira"],
    [5, "sexta-feira"],
    [6, "sábado"],
  ]);
  let month = new Map([
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
  return (
    weekDay.get(data.getDay()) +
    ", " +
    data.getDate() +
    " de " +
    month.get(data.getMonth()) +
    " de " +
    data.getFullYear()
  );
}
