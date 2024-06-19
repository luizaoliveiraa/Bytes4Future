function verificaPalindromo(string) {
  let indiceCentral = Math.floor(string.length / 2);
  let primeiraMetade = "";
  let segundaMetade = "";

  for (let i = 0; i <= indiceCentral - 1; i++) {
    primeiraMetade += string[i];
  }
  for (let i = string.length - 1; i >= indiceCentral - 0.5; i--) {
    segundaMetade += string[i];
  }
  //console.log(segundaMetade);
  // console.log(primeiraMetade);
  return primeiraMetade.toLowerCase() === segundaMetade.toLowerCase();
}

function verificaPalindromoX(string) {
  // Remove espaços e converte para minúsculas para tornar a comparação insensível a maiúsculas/minúsculas e espaços
  const strSemEspacos = string.replace(/\s+/g, "").toLowerCase();
  // Inverte a string
  const strInvertida = strSemEspacos.split("").reverse().join("");
  // Verifica se a string original é igual à sua versão invertida
  return strSemEspacos === strInvertida;
}

function verificaPalindromoY(string) {
  let revStr = string.split("").reverse().join("");
  return revStr.toUpperCase() === string.toUpperCase();
}

function verificaPalindromo(string) {
  let indiceCentral = string.length / 2;
  let primeiraMetade = "";
  let segundaMetade = "";

  for (let i = 0; i <= indiceCentral; i++) {
    primeiraMetade += string[i];
  }
  for (let i = string.length - 1; i >= indiceCentral - 0.5; i--) {
    segundaMetade += string[i];
  }
  return primeiraMetade.toUpperCase() === segundaMetade.toUpperCase();
}

console.log(verificaPalindromoY("osso"));
