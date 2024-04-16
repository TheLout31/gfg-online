function PalindromeRecursion(str) {
  let newstr = str;

  if (newstr.length == 0 || newstr.length == 1) {
    return true;
  }

  if (newstr[0] === newstr[newstr.length - 1]) {
    return PalindromeRecursion(newstr.substring(1, newstr.length - 1));
  }
  return false;
}

console.log(PalindromeRecursion("car"));
