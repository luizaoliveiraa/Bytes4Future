function formataString(string) {
  return [...string].reduce(
    (acc, curr) =>
      curr === curr.toUpperCase()
        ? acc + curr.toLowerCase()
        : acc + curr.toUpperCase(),
    ""
  );
}
