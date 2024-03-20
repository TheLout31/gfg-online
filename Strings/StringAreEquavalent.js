var arrayStringsAreEqual = function (word1, word2) {
  let str1 = "";
  let str2 = "";
  for (let i = 0; i < word1.length; i++) {
    str1 += word1[i];
  }
  for (let j = 0; j < word2.length; j++) {
    str2 += word2[j];
  }
  if (str1 == str2) {
    return true;
  }
  return false;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
