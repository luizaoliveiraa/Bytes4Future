// Cria uma função que recebe como argumentos dois booleanos e que retorna false se ambos forem true. E retorna true em todos os outros casos.

function contrarioDoE(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return false;
  } else {
    return true;
  }
}
