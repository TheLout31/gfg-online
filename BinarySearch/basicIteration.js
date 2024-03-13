const binarySearch = function (arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      return mid;
    } else if (x > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
