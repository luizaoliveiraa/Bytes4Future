// Cria uma função que recebe um dia, um mês e um ano como argumentos e retorna essa data por extenso.
// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
// No mês de Fevereiro em anos não bissextos só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."
// No mês de Fevereiro em anos bissextos só pode aceitar o número de dias até 29, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 29."
// Os anos devem estar entre 2000 e 2030. Caso seja inserido um ano inválido deve retornar a mensagem de erro: "Por favor introduza um ano entre 2000 e 2030."
// Utiliza o que aprendeste sobre Map para resolver este exercício.
// Exemplo de Output:

function diaEmPalavras(dia, mes, ano) {
  if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
  if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
  if (
    dia < 1 ||
    (dia > 30 && (mes === 4 || mes === 6 || mes === 9 || mes === 11))
  )
    return "Por favor introduza um dia entre 1 e 30.";
  let anoBiss = ano % 4 === 0 && ano % 100 === !0;
  if (dia > 28 && mes === 2 && !anoBiss)
    return "Por favor introduza um dia entre 1 e 28.";
  if (dia > 29 && mes === 2 && anoBiss)
    return "Por favor introduza um dia entre 1 e 29.";
  if (ano < 2000 || ano > 2030)
    return "Por favor introduza um ano entre 2000 e 2030.";
  let diaMap = new Map([
    [0, " "],
    [1, "um"],
    [2, "dois"],
    [3, "três"],
    [4, "quatro"],
    [5, "cinco"],
    [6, "seis"],
    [7, "sete"],
    [8, "oito"],
    [9, "nove"],
    [10, "dez"],
    [11, "onze"],
    [12, "doze"],
    [13, "treze"],
    [14, "catorze"],
    [15, "quinze"],
    [16, "dezasseis"],
    [17, "dezassete"],
    [18, "dezoito"],
    [19, "dezanove"],
    [20, "vinte"],
    [21, "vinte e um"],
    [22, "vinte e dois"],
    [23, "vinte e três"],
    [24, "vinte e quatro"],
    [25, "vinte e cinco"],
    [26, "vinte e seis"],
    [27, "vinte e sete"],
    [28, "vinte e oito"],
    [29, "vinte e nove"],
    [30, "trinta"],
    [31, "trinta e um"],
  ]);
  let mesMap = new Map([
    [0, " "],
    [1, "janeiro"],
    [2, "fevereiro"],
    [3, "março"],
    [4, "abril"],
    [5, "maio"],
    [6, "junho"],
    [7, "julho"],
    [8, "agosto"],
    [9, "setembro"],
    [10, "outubro"],
    [11, "novembro"],
    [12, "dezembro"],
  ]);
  if (ano === 2000)
    return diaMap.get(dia) + " de " + mesMap.get(mes) + " de dois mil";
  else
    return (
      diaMap.get(dia) +
      " de " +
      mesMap.get(mes) +
      " de dois mil e " +
      diaMap.get(ano - 2000)
    );
}

// OUUU

function diaEmPalavras(dia, mes, ano) {
  if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 2000 || ano > 2030) {
    return "Por favor introduza uma data válida.";
  }
  const dias = [
    "",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "catorze",
    "quinze",
    "dezasseis",
    "dezassete",
    "dezoito",
    "dezanove",
    "vinte",
    "vinte e um",
    "vinte e dois",
    "vinte e três",
    "vinte e quatro",
    "vinte e cinco",
    "vinte e seis",
    "vinte e sete",
    "vinte e oito",
    "vinte e nove",
    "trinta",
    "trinta e um",
  ];
  const meses = [
    "",
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  if (ano === 2000) {
    return `${dias[dia]} de ${meses[mes]} de dois mil`;
  } else {
    return `${dias[dia]} de ${meses[mes]} de dois mil e ${dias[ano - 2000]}`;
  }
}
