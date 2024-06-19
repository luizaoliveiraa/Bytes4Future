function numeroTrilingue(n, lingua) {
  let ptg = new Map([
    [0, "zero"],
    [1, "um"],
    [2, "dois"],
    [3, "três"],
    [4, "quatro"],
    [5, "cinco"],
    [6, "seis"],
    [7, "sete"],
    [8, "oito"],
    [9, "nove"],
    [10, "dez"],
  ]);
  let eng = new Map([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
  ]);
  let fr = new Map([
    [0, "zéro"],
    [1, "un"],
    [2, "deux"],
    [3, "trois"],
    [4, "quatre"],
    [5, "cinq"],
    [6, "six"],
    [7, "sept"],
    [8, "huit"],
    [9, "neuf"],
    [10, "dix"],
  ]);
  if (lingua === "pt") return ptg.get(n);
  if (lingua === "eng") return eng.get(n);
  if (lingua === "fr") return fr.get(n);
}
// ou
function numeroTrilingue(n, lingua) {
  if (lingua === "pt") {
    switch (n) {
      case 0:
        return "zero";
      case 1:
        return "um";
      case 2:
        return "dois";
      case 3:
        return "três";
      case 4:
        return "quatro";
      case 5:
        return "cinco";
      case 6:
        return "seis";
      case 7:
        return "sete";
      case 8:
        return "oito";
      case 9:
        return "nove";
      case 10:
        return "dez";
    }
  }

  if (lingua === "eng") {
    switch (n) {
      case 0:
        return "zero";
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      case 10:
        return "ten";
    }
  }

  if (lingua === "fr") {
    switch (n) {
      case 0:
        return "zéro";
      case 1:
        return "un";
      case 2:
        return "deux";
      case 3:
        return "trois";
      case 4:
        return "quatre";
      case 5:
        return "cinq";
      case 6:
        return "six";
      case 7:
        return "sept";
      case 8:
        return "huit";
      case 9:
        return "neuf";
      case 10:
        return "dix";
    }
  }
}
//ou
function numeroTrilingue(n, lingua) {
  switch (n) {
    case 0:
      if (lingua === "pt") {
        return "zero";
      } else if (lingua === "eng") {
        return "zero";
      } else if (lingua === "fr") {
        return "zéro";
      }
      break;
    case 1:
      if (lingua === "pt") {
        return "um";
      } else if (lingua === "eng") {
        return "one";
      } else if (lingua === "fr") {
        return "un";
      }
      break;
    case 2:
      if (lingua === "pt") {
        return "dois";
      } else if (lingua === "eng") {
        return "two";
      } else if (lingua === "fr") {
        return "deux";
      }
      break;
    case 3:
      if (lingua === "pt") {
        return "três";
      } else if (lingua === "eng") {
        return "three";
      } else if (lingua === "fr") {
        return "trois";
      }
      break;
    case 4:
      if (lingua === "pt") {
        return "quatro";
      } else if (lingua === "eng") {
        return "four";
      } else if (lingua === "fr") {
        return "quatre";
      }
      break;
    case 5:
      if (lingua === "pt") {
        return "cinco";
      } else if (lingua === "eng") {
        return "five";
      } else if (lingua === "fr") {
        return "cinq";
      }
      break;
    case 6:
      if (lingua === "pt") {
        return "seis";
      } else if (lingua === "eng") {
        return "six";
      } else if (lingua === "fr") {
        return "six";
      }
      break;
    case 7:
      if (lingua === "pt") {
        return "sete";
      } else if (lingua === "eng") {
        return "seven";
      } else if (lingua === "fr") {
        return "sept";
      }
      break;
    case 8:
      if (lingua === "pt") {
        return "oito";
      } else if (lingua === "eng") {
        return "eight";
      } else if (lingua === "fr") {
        return "huit";
      }
      break;
    case 9:
      if (lingua === "pt") {
        return "nove";
      } else if (lingua === "eng") {
        return "nine";
      } else if (lingua === "fr") {
        return "neuf";
      }
      break;
    case 10:
      if (lingua === "pt") {
        return "dez";
      } else if (lingua === "eng") {
        return "ten";
      } else if (lingua === "fr") {
        return "dix";
      }
      break;
    default:
      return "Número inválido, Digite um número de 1 a 10.";
  }
}
