function Fibonaccinew(n) {
  if (n < 2) {
    return n;
  }

  return Fibonaccinew(n - 1) + Fibonaccinew(n - 2);
}

console.log(Fibonaccinew(8))