//CORRECAO

let calculadora = {
  historico: [],
  ultimoResultado: 0n,
};

function somar(a, b) {
  let res;
  if (b === undefined) {
    res = calculadora.ultimoResultado + BigInt(a);
    calculadora.historico.push(
      `${calculadora.ultimoResultado} + ${a} = ${res}`
    );
  } else {
    res = BigInt(a) + BigInt(b);
    calculadora.historico.push(`${a} + ${b} = ${res}`);
  }
  calculadora.ultimoResultado = res;
  return calculadora;
}
function multiplicar(a, b) {
  let res;
  if (b === undefined) {
    res = calculadora.ultimoResultado * BigInt(a);
    calculadora.historico.push(
      `${calculadora.ultimoResultado} * ${a} = ${res}`
    );
  } else {
    res = BigInt(a) * BigInt(b);
    calculadora.historico.push(`${a} * ${b} = ${res}`);
  }
  calculadora.ultimoResultado = res;
  return calculadora;
}
function subtrair(a, b) {
  let res;
  if (b === undefined) {
    res = calculadora.ultimoResultado - BigInt(a);
    calculadora.historico.push(
      `${calculadora.ultimoResultado} - ${a} = ${res}`
    );
  } else {
    res = BigInt(a) - BigInt(b);
    calculadora.historico.push(`${a} - ${b} = ${res}`);
  }
  calculadora.ultimoResultado = res;
  return calculadora;
}
function dividir(a, b) {
  let res;
  if (b === undefined) {
    res = calculadora.ultimoResultado / BigInt(a);
    calculadora.historico.push(
      `${calculadora.ultimoResultado} / ${a} = ${res}`
    );
  } else {
    res = BigInt(a) / BigInt(b);
    calculadora.historico.push(`${a} / ${b} = ${res}`);
  }
  calculadora.ultimoResultado = res;
  return calculadora;
}
function obterResultado() {
  return BigInt(calculadora.ultimoResultado);
  //Retorna o último resultado como um BigInt.
}
function limparHistorico() {
  calculadora.historico = [];
  calculadora.ultimoResultado = 0n;
  return calculadora;
  // Quando este método é invocado, a calculadora deve ficar num estado limpo, ou seja, com o histórico vazio e com o último resultado a 0.

  // Esta função deve retornar a instância da calculadora.
}
function toJSON() {
  return {
    ...calculadora,
    ultimoResultado: String(calculadora.ultimoResultado),
  };
  // Retorna um objecto em formato JSON com duas propriedades: historico e ultimoResultado.

  // O historico deve ser um array que tem, em cada posição, uma operação no formato a op b = resultado, ou seja, 1 + 2 = 3. O historico deve estar ordenado da primeira operação para a última.

  // O ultimoResultado deve ser a representação textual do número, ou seja, deve ser do tipo string.
}
function toString() {
  // Se não existir qualquer operação no historico, este método deve retornar "Calculadora Limpa"
  //     Caso contrário, deve retornar algo no formato seguinte:

  // === Histórico da Calculadora ===
  // 1. 1 - 1 = 0
  // 2. 0 + 10 = 10
  // 3. 10 + 100 = 110
  // 4. 110 + 200 = 310
  // 5. 10000 + 1 = 10001
  // === Fim do Histórico ===
  // Foram realizadas 5 operações
  // Último Resultado: 10001

  if (calculadora.historico.length === 0) {
    return "Calculadora Limpa";
  }
  let string = "=== HIstórico da Calculadora ===\n";
  for (let i = 0; i < calculadora.historico.length; i++) {
    string += i + 1 + ". " + calculadora.historico[i] + "\n";
  }
  string +=
    "=== Fim do Histórico ===\nForam realizadas " +
    calculadora.historico.length +
    " operações\nÚltimo Resultado: " +
    calculadora.ultimoResultado;
  return string;
}

console.log(toString());
console.log(somar(1, 2));
console.log(multiplicar(6));
console.log(toString());
console.log(toJSON());
console.log(obterResultado());
console.log(dividir(3));
console.log(toString());
console.log(limparHistorico());
console.log(toString());
