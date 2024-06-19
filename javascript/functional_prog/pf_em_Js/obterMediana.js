function calculaMediana(array) {
  if (array === 0) {
    return;
  }
  arrayOrganized = array.sort();
  console.log(arrayOrganized);
  const valorMeio = Math.floor(arrayOrganized.length / 2); //da a posição do meio
  if (arrayOrganized.length % 2 === 1) {
    return arrayOrganized[valorMeio];
  } else {
    return (arrayOrganized[valorMeio - 1] + arrayOrganized[valorMeio]) / 2;
  }
}
//console.log(calculaMediana(arr));
