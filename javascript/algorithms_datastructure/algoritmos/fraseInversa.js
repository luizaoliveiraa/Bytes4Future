// Cria a função fraseInversa, que recebe como argumento uma string.
// A função deve inverter a ordem das palavras na string.

// fraseInversa("Ola Mundo") //"Mundo Ola"
// fraseInversa("Buondi") //"Buondi"
// fraseInversa("Isto é um exemplo maior") //maior exemplo um é Isto

function fraseInversa(frase) {
  // Escreve aqui a função
  let dividirFrase = frase.split(" ");
  let fraseInverted = dividirFrase.reverse();
  return fraseInverted.join(" ");
}

function fraseInversa(frase) {
  // Dividindo a frase em palavras usando o espaço como separador
  const palavras = frase.split(" ");
  // Invertendo a ordem das palavras
  const palavrasInvertidas = palavras.reverse();
  // Juntando as palavras invertidas de volta em uma frase
  const fraseInvertida = palavrasInvertidas.join(" ");
  return fraseInvertida;
}

// console.log(fraseInversa("Ola mundo"));
