// Cria uma função que recebe um número como argumento e retorna o mês do ano correspondente.
// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número entre 1 e 12."
// Utiliza o que aprendeste sobre Map para resolver este exercício.
// Exemplo de Output:

function mesesDoAno(mes) {
  if (mes < 1 || mes > 12) return "Por favor insira um número entre 1 e 12.";
  let month = new Map([
    [1, "Janeiro"],
    [2, "Fevereiro"],
    [3, "Março"],
    [4, "Abril"],
    [5, "Maio"],
    [6, "Junho"],
    [7, "Julho"],
    [8, "Agosto"],
    [9, "Setembro"],
    [10, "Outubro"],
    [11, "Novembro"],
    [12, "Dezembro"],
  ]);
  return month.get(mes);
}
