// Cria uma função que recebe como argumentos dois booleanos e que retorna true se um, e apenas um, deles for true.

function umOuOutro(boolean1, boolean2) {
  if (boolean1 === boolean2) {
    return false;
  } else {
    return true;
  }
}

// Cria uma função que recebe como argumentos três booleanos e que retorna true se um, e apenas um, deles for true.

function umOuOutro(boolean1, boolean2, boolean3) {
  return (
    (boolean1 && !boolean2 && !boolean3) ||
    (!boolean1 && boolean2 && !boolean3) ||
    (!boolean1 && !boolean2 && boolean3)
  );
}
