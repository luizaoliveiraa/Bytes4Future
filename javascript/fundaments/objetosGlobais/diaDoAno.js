// Cria uma função que recebe uma data como argumento e retorna o dia do ano entre 1 e 366.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function diaDoAno(data) {
  let inicioAno = new Date(data.getFullYear() - 1, 11, 31);
  data.setHours(5);
  return Math.floor((data - inicioAno) / (1000 * 60 * 60 * 24));
}
//ou

function diaDoAno(data) {
  let date = new Date(data);
  let firstDay = new Date(date.getFullYear(), 0, 0);
  let diff = date - firstDay;
  let dayM = Math.floor(diff / (1000 * 60 * 60 * 24));
  date.setHours(5);
  return dayM;
}

function diaDoAno(data) {
  let inicioDoAno = new Date(data.getFullYear(), 0, 0);
  let diferenca = data - inicioDoAno;
  let umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
  let diaDoAno = Math.floor(diferenca / umDiaEmMilissegundos);
  return diaDoAno + 1; //+1 é quando é ano bissexto, quando não é bissexto não é necessário o +1 > mas no caso só se a data que ele quer for a partir de 29 de fevereira
}

let minhaData = new Date(2024, 4, 9);
//console.log(diaDoAno(minhaData));

let today = new Date();
let year = today.getFullYear;

// console.log(year);

function diaDoAno(data) {
  let diaNumber = data.getFullYear();
  let diaMs = 1000 * 60 * 60 * 24;
  let quantosDias = diaNumber / diaMs;
  return Math.floor(quantosDias);
}
const nova = new Date();

//console.log(diaDoAno(nova));
