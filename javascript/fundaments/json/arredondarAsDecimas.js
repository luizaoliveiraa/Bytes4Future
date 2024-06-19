//  Cria uma função que recebe um decimal como argumento e retorna o número arredondado às décimas, recorrendo ao arredondamento padrão (que aprendeste em Matemática).

function arredondarAsDecimas(d) {
  return Math.round(d * 10) / 10;
}
// /ouu
function arredondarAsDecimas(d) {
  let arredondar = parseFloat(d.toFixed(1));
  return arredondar;
}
