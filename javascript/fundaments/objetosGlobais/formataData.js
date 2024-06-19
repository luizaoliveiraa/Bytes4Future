//  Cria uma função que recebe uma data como argumento e a retorna com o formato: mm-dd-aaaa.
// Utiliza o que aprendeste sobre Date para resolver este exercício.
// Exemplo de Output: formataData(new Date(2022,03,04)) // 04-04-2022

function formataData(data) {
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }
  return mes + "-" + dia + "-" + ano;
}

function formataData(data) {
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  dia = dia < 10 ? "0" + dia : dia;
  mes = mes < 10 ? "0" + mes : mes;
  return mes + "-" + dia + "-" + ano;
}

// Cria uma função que recebe uma data como argumento e a retorna com o formato: dd-mm-aaaa.

function formataData(data) {
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }
  return dia + "-" + mes + "-" + ano;
}

function formataData(data) {
  return `${data.getDate() < 10 ? "0" : ""}${data.getDate()}-${
    data.getMonth() + 1 < 10 ? "0" : ""
  }${data.getMonth() + 1}-${data.getFullYear()}`;
}

//ou com ternário

function formataData(data) {
  // escreve aqui a função
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  dia < 10 ? (dia = "0" + dia) : dia;
  mes < 10 ? (mes = "0" + mes) : mes;
  return dia + "-" + mes + "-" + ano;
}

//ouuu
function formataData(data) {
  let dia = data.getDate().toString().padStart(2, "0");
  let mes = (data.getMonth() + 1).toString().padStart(2, "0");
  let ano = data.getFullYear();
  return `${dia}-${mes}-${ano}`;
}

// toString() e padStart(2, '0'):
// Convertendo o dia e o mês para strings e usando padStart(2, '0') para adicionar um zero à esquerda se o número tiver apenas um digito.
