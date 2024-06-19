function contaParesDoArray(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] % 2 === 0) {
    return 1 + contaParesDoArray(array.slice(1));
  } else {
    return 0 + contaParesDoArray(array.slice(1));
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(contaParesDoArray(arr))
