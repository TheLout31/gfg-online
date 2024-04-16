function DecimalToBinary(n, result) {
  let newnum = n;

  if (newnum == 0) {
    return result;
  }

  result = (newnum % 2) + result;

  return DecimalToBinary(Math.floor(newnum / 2), result);
}

console.log(DecimalToBinary(233, ""));
