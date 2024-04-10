var myPow = function (x, n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }

  return x * myPow(x, n - 1);
};

console.log(myPow(2.0, -3));
