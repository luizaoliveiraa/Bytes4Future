// Cria uma função que recebe como argumentos um dia e um mês e retorna o número de dias em falta para o Natal.
// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "PPor favor introduza um mês entre 1 e 12."
// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."
// No dia 25 de Dezembro deve retornar a seguinte mensagem: "Hoje é Natal!"
// Nos restantes dias deve retornar a seguinte mensagem: "Faltam x dias até ao Natal."

function calculaDiasAteAoNatal(dia, mes) {
  if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
  if (mes < 1 || mes > 12) return "PPor favor introduza um mês entre 1 e 12.";
  if (dia > 31 && (mes === 4 || mes === 6 || setembro === 9 || mes === 11))
    return "Por favor introduza um dia entre 1 e 30.";
  if (dia > 28 && mes === 2) return "Por favor introduza um dia entre 1 e 28.";
  if (dia === 25 && mes === 12) return "Hoje é Natal!";
  if (dia > 25 && mes === 12)
    return `Faltam ${365 + 31 - dia} dias até ao natal.`;
  if (mes === 1) return `Faltam ${359 - dia} dias até ao natal.`;
  let mesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let diasNatal = 0;
  for (let i = 0; i < mes - 1; i++) {
    if (mesArray[i] === 2) {
      diasNatal += 28;
    } else if (
      mesArray[i] === 4 ||
      mesArray[i] === 6 ||
      mesArray[i] === 9 ||
      mesArray[i] === 11
    ) {
      diasNatal += 30;
    } else {
      diasNatal += 31;
    }
  }
  return `Faltam ${359 - diasNatal - dia} dias até ao natal.`;
}

// OUUUU

function calculaDiasAteAoNatal(dia, mes) {
  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31";
  } else if (mes < 1 || mes > 12) {
    return "PPor favor introduza um mês entre 1 e 12.";
  } else if (
    (mes === 4 || mes === 6 || mes === 9 || mes === 11) &&
    (dia > 30 || dia < 1)
  ) {
    return "Por favor introduza um dia entre 1 e 30.";
  } else if (mes == 2 && (dia > 28 || dia < 1)) {
    return "Por favor introduza um dia entre 1 e 28.";
  }
  if (mes === 12 && dia === 25) {
    return "Hoje é Natal!";
  } else if (mes === 12 && dia > 25) {
    return "Faltam " + (365 - (dia - 25)) + " dias até ao Natal.";
  } else if (mes === 1) {
    return "Faltam " + (359 - dia) + " dias até ao Natal.";
  } else if (mes === 2) {
    return "Faltam " + (328 - dia) + " dias até ao Natal.";
  } else if (mes === 3) {
    return "Faltam " + (300 - dia) + " dias até ao Natal.";
  } else if (mes === 4) {
    return "Faltam " + (269 - dia) + " dias até ao Natal.";
  } else if (mes === 5) {
    return "Faltam " + (239 - dia) + " dias até ao Natal.";
  } else if (mes === 6) {
    return "Faltam " + (208 - dia) + " dias até ao Natal.";
  } else if (mes === 7) {
    return "Faltam " + (178 - dia) + " dias até ao Natal.";
  } else if (mes === 8) {
    return "Faltam " + (147 - dia) + " dias até ao Natal.";
  } else if (mes === 9) {
    return "Faltam " + (116 - dia) + " dias até ao Natal.";
  } else if (mes === 10) {
    return "Faltam " + (86 - dia) + " dias até ao Natal.";
  } else if (mes === 11) {
    return "Faltam " + (55 - dia) + " dias até ao Natal.";
  } else if (mes === 12) {
    return "Faltam " + (25 - dia) + " dias até ao Natal.";
  }
}
