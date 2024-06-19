// Crie uma função que recebe como argumentos um dia e um mês e retorna o signo  correspondente.
// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."
// Carneiro - 21.03 a 20.04 Touro - 21.04 a 20.05 Gémeos - 21.05 a 20.06 Caranguejo - 21.06 a 22.07 Leão - 23.07 a 22.08 Virgem - 23.08 a 22.09 Balança - 23.09 a 22.10 Escorpião - 23.10 a 21.11 Sagitário - 22.11 a 21.12
// Capricórnio - 22.12 a 20.01 Aquário - 21.01 a 18.02 Peixes - 19.02 a 20.03

function calculaSigno(dia, mes) {
  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }
  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }
  if (
    (dia < 1 || dia > 31) &&
    (mes === 4 || mes === 6 || mes === 9 || mes === 11)
  ) {
    return "Por favor introduza um dia entre 1 e 30.";
  }
  if ((dia < 1 || dia > 28) && mes === 2) {
    return "Por favor introduza um dia entre 1 e 28.";
  }
  if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) {
    return "Carneiro";
  }
  if ((dia >= 21 && mes === 4) || (dia <= 20 && mes === 5)) {
    return "Touro";
  }
  if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) {
    return "Gémeos";
  }
  if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) {
    return "Caranguejo";
  }
  if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
    return "Leão";
  }
  if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
    return "Virgem";
  }
  if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
    return "Balança";
  }
  if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
    return "Escorpião";
  }
  if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    return "Sagitário";
  }
  if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) {
    return "Capricórnio";
  }
  if ((dia >= 21 && mes === 1) || (dia <= 18 && mes === 2)) {
    return "Aquário";
  }
  if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
    return "Peixes";
  }
}
