// get the minimum and swap

function SelectionSort(nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[smallest] > nums[j]) {
        smallest = j;
      }
    }
    temp = nums[smallest];
    nums[smallest] = nums[i];
    nums[i] = temp;
  }
  return nums;
}

console.log(SelectionSort([13,46,24,52,2,9]))
