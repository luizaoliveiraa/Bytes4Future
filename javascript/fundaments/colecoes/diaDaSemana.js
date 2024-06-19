// Cria uma função que recebe um número como argumento e retorna o dia da semana correspondente.
// Caso o número seja inválido deve retornar a seguinte mensagem: "Número inválido. Por favor insira um número entre 1 e 7."
// 1 - Domingo 2 - Segunda-Feira 3 - Terça-Feira 4 - Quarta-Feira 5 - Quinta-Feira 6 - Sexta-Feira 7 - Sábado
// Utiliza o que aprendeste sobre Map para resolver este exercício.

function diaDaSemana(dia) {
  if (dia < 1 || dia > 7)
    return "Número inválido. Por favor insira um número entre 1 e 7.";
  let diaExtenso = new Map([
    [1, "Domingo"],
    [2, "Segunda-Feira"],
    [3, "Terça-Feira"],
    [4, "Quarta-Feira"],
    [5, "Quinta-Feira"],
    [6, "Sexta-Feira"],
    [7, "Sábado"],
  ]);
  return diaExtenso.get(dia);
}
