var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i+1]) {
      return false;
    }
    i+=2 
  }
  return s.length;
};
console.log(isValid("()"));
