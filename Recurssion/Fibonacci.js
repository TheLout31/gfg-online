var fib = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0 || i == 1) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[n];
  // console.log(fibonacciSeries(10))
  // //Output: [ 0, 1,  1,  2,  3,5, 8, 13, 21, 34, 55]
};

console.log(fib(4));
