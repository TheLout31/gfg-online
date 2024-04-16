function SumOfNatural(n) {
  if (n <= 1) {
    return n;
  }

  return n + SumOfNatural(n - 1);
}

console.log(SumOfNatural(10));
