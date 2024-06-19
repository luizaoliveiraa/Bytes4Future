// Cria uma função que recebe como argumentos um dia e um mês e retorna a estação do ano.
// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

function calculaEstacaoDoAno(dia, mes) {
  if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
  if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
  if (
    (dia < 1 || dia > 30) &&
    (mes === 4 || mes === 6 || mes === 9 || mes === 11)
  )
    return "Por favor introduza um dia entre 1 e 30.";
  if ((dia < 1 || dia > 28) && mes === 2)
    return "Por favor introduza um dia entre 1 e 28.";
  if (
    (dia >= 21 && mes === 3) ||
    mes === 4 ||
    mes === 5 ||
    (dia <= 20 && mes === 6)
  )
    return "Primavera";
  else if (
    (dia >= 21 && mes === 6) ||
    mes === 7 ||
    mes === 8 ||
    (dia <= 20 && mes === 9)
  )
    return "Verão";
  else if (
    (dia >= 21 && mes === 9) ||
    mes === 10 ||
    mes === 11 ||
    (dia <= 20 && mes === 12)
  )
    return "Outono";
  else {
    return "Inverno";
  }
}
