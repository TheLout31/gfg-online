var mostWordsFound = function (sentences) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; i < sentences.length; j++) {
      if (sentences[j] === " ") {
        count++;
      }
    }
    if (count > max) {
      max = count;
    }
  }
  return sentences[0].length;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
