function sleep(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

sleep(1000)
  .then(() => {
    console.log("Passou 1 segundo");
    return sleep(1000);
  })
  .then(() => {
    console.log("Passaram 2 segundos");
    return sleep(1000);
  })
  .then(() => {
    console.log("Passaram 3 segundos");
  })
  .catch((err) => console.log(err));
