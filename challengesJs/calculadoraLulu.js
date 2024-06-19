//MINHA VERSÃO

let calculadora = {
  historico: [],
  ultimoResultado: 0,
};

function somar(a, b) {
  if (b === undefined) {
    b = a;
    a = calculadora.ultimoResultado;
  }
  let res = BigInt(a) + BigInt(b);
  calculadora.historico.push(`${a} + ${b} = ${res}`);
  calculadora.ultimoResultado = res;
  return calculadora;
}

function subtrair(a, b) {
  if (b === undefined) {
    b = a;
    a = calculadora.ultimoResultado;
  }
  let res = BigInt(a) - BigInt(b);
  calculadora.historico.push(`${a} - ${b} = ${res}`);
  calculadora.ultimoResultado = res;

  return calculadora;
}

function multiplicar(a, b) {
  if (b === undefined) {
    b = a;
    a = calculadora.ultimoResultado;
  }
  let res = BigInt(a) * BigInt(b);
  calculadora.historico.push(`${a} * ${b} = ${res}`);
  calculadora.ultimoResultado = res;

  return calculadora;
}
function dividir(a, b) {
  if (b === undefined) {
    b = a;
    a = calculadora.ultimoResultado;
  }
  let res = BigInt(a) / BigInt(b);
  calculadora.historico.push(`${a} / ${b} = ${res}`);
  calculadora.ultimoResultado = res;
  return calculadora;
}

function limparHistorico() {
  calculadora.historico = [];
  calculadora.ultimoResultado = 0;
  return calculadora;
}
function toJSON() {
  calculadora.ultimoResultado = calculadora.ultimoResultado.toString();
  return calculadora;
}

function obterResultado() {
  return BigInt(calculadora.ultimoResultado);
}

function toString() {
  if (calculadora.historico.length === 0) {
    template = "Calculadora Limpa";
  }
  let template = "=== Histórico da Calculadora === \n";

  for (let i = 0; i < calculadora.historico.length; i++) {
    template += i + 1 + ". " + calculadora.historico[i] + "\n";
  }
  (template += "=== Fim do Histórico ==="),
    (template +=
      "\nForam realizadas " + calculadora.historico.length + " operações");

  template += "\nÚltimo Resultado: " + calculadora.ultimoResultado;
  return template;
}

console.log(somar(2, 4));
console.log(somar(2));
console.log(subtrair(4, 2));
console.log(multiplicar(4, 2));
console.log(dividir(4, 2));
console.log(obterResultado());
console.log(toJSON());
console.log(toString());
