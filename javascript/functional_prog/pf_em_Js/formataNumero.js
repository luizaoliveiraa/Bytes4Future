function formataNumero(valor) {
  // Escreve aqui o teu código
  if (typeof valor !== "number") {
    return "Número não válido";
  }

  let numString = valor.toString();
  let resultado = " ";
  for (let i = 0; i < numString.length; i++) {
    resultado += numString[i];
    if (numString[i] % 2 === 0 && numString[i + 1] % 2 === 0) {
      resultado += "-";
    }
    return resultado;
  }
}

// console.log(formataNumero(649223));//
