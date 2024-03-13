const binarySearchRecurssion = function (arr, x, low, high) {

  if (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (x > arr[mid]) {
      return binarySearchRecurssion(arr, x, mid + 1, high);
    } else {
      return binarySearchRecurssion(arr, x, low, mid - 1);
    }
  } else {
    return -1;
  }
};

let arr = [1, 2, 3, 4, 5, 6];
let x = 6;
let low = 0;
let high = arr.length - 1;
console.log(binarySearchRecurssion(arr, x, low, high));
