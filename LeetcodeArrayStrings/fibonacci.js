function Fibo(n) {
  let start = 0;
  let second = 1;
  let third = 0;

  for (let i = 1; i <= n; i++) {
    console.log(start);
    third = start + second;
    start = second;
    second = third;
  }
}

Fibo(10);
