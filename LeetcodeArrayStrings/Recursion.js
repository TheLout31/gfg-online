function naturalNum(x, n) {
    if (n == 0) {
      return 1; // Base case: factorial of 0 is 1
    }
    if (x == 0) {
      return 0; // Base case: factorial of 0 is 1
    }
  
    let pow = naturalNum(x, n - 1);
    let s = x * pow;
    return s;
  }
  
  console.log(naturalNum(2,5));
