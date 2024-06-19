function calculaForcaDaPassword(string) {
  let forca = 0;
  if (string.length === 0) return "Por favor introduza uma password válida.";
  if (string.length >= 8) forca += 1;
  if (/[0-9]/.test(string)) forca += 1;
  if (/[A-Z]/.test(string)) forca += 1;
  return forca;
}
