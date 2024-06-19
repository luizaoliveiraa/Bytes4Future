function verificaPangrama(string) {
  const todas = "abcdefghijlmnopqrstuvxz";
  const minusculas = string.toLowerCase();

  return [...todas].every((l) => minusculas.includes(minusculas));
}
