function dataMaisRecente(data1, data2) {
  let dataA = data1.getTime();
  let dataB = data2.getTime();
  if (dataA > dataB) {
    return data1;
  } else {
    return data2;
  }
}
