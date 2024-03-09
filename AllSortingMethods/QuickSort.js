// function Partition(arr, low, high) {
//   let pivot = arr[low];
//   let i = low;
//   let j = high;

//   while (i < j) {
//     while (arr[i] <= pivot && i <= high - 1) {
//       i++;
//     }
//     while (arr[j] > pivot && j >= low - 1) {
//       j--;
//     }
//     if (i < j) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   let temp = arr[low];
//   arr[low] = arr[j];
//   arr[j] = temp;
//   return j;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     let idx = Partition(arr, low, high);
//     quickSort(arr, low, idx - 1);
//     quickSort(arr, idx + 1, high);
//   }
// }
// let arr = [4, 6, 2, 5, 7, 9, 1, 3];
// console.log(quickSort(arr, 0, arr.length - 1));
let arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log(Math.floor(arr.length/2))