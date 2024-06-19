function partition(arr, first, last) {
  const pivotIndex = Math.floor(Math.random() * (last - first)) + first;

  const tempPivot = arr[last];
  arr[last] = arr[pivotIndex];
  arr[pivotIndex] = tempPivot;

  const x = arr[last];
  let i = first;

  for (let j = first; j < last; j++) {
    if (arr[j] < x) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }
  const tempLast = arr[last];
  arr[last] = arr[i];
  arr[i] = tempLast;
  return i;
}
