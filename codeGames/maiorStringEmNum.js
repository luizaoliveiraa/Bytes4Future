function maiorStringEmNumero(array) {
  let comprimentos = [];
  for (let i = 0; i < array.length; i++) {
    comprimentos.push(array[i].length);
  }
  let maior = Math.max(...comprimentos);
  let maiorString = "";
  for (let i = 0; i < comprimentos.length; i++) {
    if (comprimentos[i] === maior) {
      posicaoMaiorString = i;
      maiorString = array[posicaoMaiorString];
    }
  }
  const numerosPorExtenso = new Map([
    ["zero", 0],
    ["um", 1],
    ["dois", 2],
    ["três", 3],
    ["quatro", 4],
    ["cinco", 5],
    ["seis", 6],
    ["sete", 7],
    ["oito", 8],
    ["nove", 9],
    ["dez", 10],
  ]);
  return numerosPorExtenso.has(maiorString)
    ? numerosPorExtenso.get(maiorString)
    : "Insira um array com pelo menos um número entre zero e dez.";
}
