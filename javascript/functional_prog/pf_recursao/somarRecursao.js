function somarRecursao(n) {
  if (n === 10) return n;
  return somarRecursao(n + 1);
}

console.log(somarRecursao(5));
