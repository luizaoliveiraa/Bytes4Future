//strig funciona como um array = "HELLO" > str[0] = "h" str [1] = "e" > logo, podemos percorrê-la e encontrar comprimento string.length
//string sao IMUTAVEIS - nao podem ser alteradas, o jeito para alterar é CRIAR UMA NOVA string e adicionar um novo caracter a essa nova string

function hacker(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
      case "A":
        newString += "4";
        break;
      case "e":
      case "E":
        newString += "3";
        break;
      case "i":
      case "I":
        newString += "1";
        break;
      case "o":
      case "O":
        newString += "0";
        break;
      case "a":
      case "A":
        newString += "4";
        break;
      case "s":
      case "S":
        newString += "5";
        break;
      default:
        newString += string[i];
    }
  }
  return newString;
}

console.log(hacker("hackers"));
