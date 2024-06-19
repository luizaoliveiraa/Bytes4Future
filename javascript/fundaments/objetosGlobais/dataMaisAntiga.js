function dataMaisAntiga(datas) {
  let novaData = new Date(Math.min(...datas));
  return novaData;
}
