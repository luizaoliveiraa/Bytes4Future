function quickSort(arr) {
  return quickSortAlg(arr, 0, arr.length - 1);
}
function quickSortAlg(arr, first, last) {
  if (first < last) {
    const pivot = partition(arr, first, last);
    quickSortAlg(arr, first, pivot - 1);
    quickSortAlg(arr, pivot + 1, last);
  }
  return arr;
}
