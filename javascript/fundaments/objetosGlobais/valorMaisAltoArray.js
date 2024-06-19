function valorMaisAltoDoArray(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

// ou

function valorMaisAltoDoArray(array) {
  return Math.max(...array);
}

// ou

function valorMaisAltoDoArray(array) {
  let valorAlto = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > valorAlto) {
      valorAlto = array[i];
    }
  }
  return valorAlto;
}

// console.log(valorMaisAltoDoArray(arr))
