function combineArrays(array1, array2) {
  const result = [];
  const maxLen = Math.max(array1.length, array2.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < array1.length) {
      result.push(array1[i]);
    }
    if (i < array2.length) {
      result.push(array2[i]);
    }
  }

  return result;
}
