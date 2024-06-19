// Cria uma função que recebe dois objetos do tipo Date como argumentos e retorna o tempo entre a primeira e a segunda string em dias (períodos de 24h).
// O valor retornado deve ser sempre um número positivo e inteiro. Utiliza o que aprendeste sobre Date para resolver este exercício.
// Exemplo de Output:

function diferencaEmDias(data1, data2) {
  let diaMilissegundos = 1000 * 60 * 60 * 24;
  let data1mili = data1.getTime();
  let data2mili = data2.getTime();
  let diferencaMili = Math.abs(data1mili - data2mili);
  let diferencaDias = Math.floor(diferencaMili / diaMilissegundos);
  return diferencaDias;
}

//ou

function diferencaEmDias(data1, data2) {
  // escreve aqui a função
  let diferencaMs = data1.getTime() - data2.getTime();
  let diaMs = 1000 * 60 * 60 * 24;
  let difDias = Math.abs(diferencaMs / diaMs);
  return Math.floor(difDias);
}

function diferencaEmDias(data1, data2) {
  let data1Ms = data1.getTime();
  let data2Ms = data2.getTime();
  let diaMs = 1000 * 60 * 60 * 24;
  let diferencaMs = Math.abs(data1Ms - data2Ms);
  return Math.floor(diferencaMs / diaMs);
}
let a = new Date(2021, 3, 4);
let b = new Date(2021, 2, 28);

// console.log(diferencaEmDias(a, b));
