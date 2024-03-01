let LongestPrefix = function (x) {
  if (x.length < 1) {
    return "";
  }

  x.sort();

  let s1 = x[0];
  let s2 = x[x.length - 1];
  let idx = 0;

  while (idx < s1.length && idx < s2.length) {
    if (s1[idx] == s2[idx]) {
      idx++;
    } else {
      break;
    }
  }
  return s1.substring(0, idx);
};

console.log(LongestPrefix(["Flower", "Flow", "Flight"]));
