class Inteiro {
  static nulo = 0;
  static eInteiro(n) {
    return Number.isInteger(n); // ele sozinho já verifica se é inteiro o numero e retorna true se sim, false se não
  }
}
//Number.isInteger(n); >> isso já retorna true ou false, nao precisa de condição if.

class Integer {
  static eInteger(number) {
    return Number.isInteger(number);
  }

  static null = 0;
}

// console.log(Integer.eInteger(100))
// console.log(Integer.eInteger(100.3))
// console.log(Integer.eInteger(1004))
// console.log(Integer.null)
