// Cria uma função que recebe como argumentos um dia e um mês e retorna o dia do ano correspondente (entre 1 e 365).
// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

function calculaDiaDoAno(dia, mes) {
  if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
  if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
  if (dia > 31 && (mes === 4 || mes === 6 || mes === 9 || mes === 11))
    return "Por favor introduza um dia entre 1 e 30.";
  if (dia > 28 && mes === 2) return "Por favor introduza um dia entre 1 e 28.";
  let diasContados = 0;
  let mesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (mes === 1) return dia;
  for (let i = 0; i < mes - 1; i++) {
    if (mesArray[i] === 2) {
      diasContados += 28;
    } else if (
      mesArray[i] === 4 ||
      mesArray[i] === 6 ||
      mesArray[i] === 9 ||
      mesArray[i] === 11
    ) {
      diasContados += 30;
    } else {
      diasContados += 31;
    }
  }
  return diasContados + dia;
}

// OUU

function calculaDiaDoAno(dia, mes) {
  if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
  if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
  if (dia > 31 && (mes === 4 || mes === 6 || mes === 9 || mes === 11))
    return "Por favor introduza um dia entre 1 e 30.";
  if (dia > 28 && mes === 2) return "Por favor introduza um dia entre 1 e 28.";
  let diasContados = 0;
  if (mes === 1) return dia;
  for (let i = 1; i < mes; i++) {
    if (i === 2) {
      diasContados += 28;
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
      diasContados += 30;
    } else {
      diasContados += 31;
    }
  }
  return diasContados + dia;
}

//ou

function calculaDiaDoAno(dia, mes) {
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
  if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
  if (dia > diasPorMes[mes - 1])
    return `Por favor introduza um dia entre 1 e ${diasPorMes[mes - 1]}.`;

  let diasContados = dia;

  for (let i = 0; i < mes - 1; i++) {
    diasContados += diasPorMes[i];
  }

  return diasContados;
}
