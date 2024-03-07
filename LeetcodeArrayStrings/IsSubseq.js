var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sp] == t[tp]) {
      sp++;
      tp++;
      count++;
    } else {
      tp++;
    }
  }

  if (count === s.length) {
    return true;
  }
  return false;
};

console.log(isSubsequence("axc", "ahbgdc"));
