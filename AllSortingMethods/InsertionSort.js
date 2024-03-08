//Put the elemnt in its right position

function InsertionSort(arr) {
  let i, key, j;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(InsertionSort([13, 46, 24, 52, 2, 9]));
