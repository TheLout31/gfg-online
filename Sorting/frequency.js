const arr = [1, 2, 4, 2, 3, 2, 4, 1];

function freq(arr) {
  let max = 0;
  let count = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      num = arr[i];
    }
  }
  return num;
}

console.log(freq(arr));
