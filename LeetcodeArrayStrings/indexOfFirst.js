var strStr = function (haystack, needle) {
  let hlength = haystack.length;
  let nlength = needle.length;

  for (let i = 0; i < hlength - nlength; i++) {
    let j = 0;

    while (j < nlength && haystack[i + j] == needle[j]) {
      j++;

      if (j === nlength) {
        return i;
      }
    }
    return -1;
  }
};

console.log(strStr("adbutsad", "sad"));
