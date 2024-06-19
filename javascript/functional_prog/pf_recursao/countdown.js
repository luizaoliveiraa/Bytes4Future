function countdown(n) {
  if (n === 0) {
    console.log("Wohooo!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
// countdown(5);
// 5
// 4
// 3
// 2
// 1
// Wohoo!
