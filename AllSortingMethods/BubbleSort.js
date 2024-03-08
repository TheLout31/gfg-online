//Take the maximum to the end 

function BubbleSort(nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

console.log(BubbleSort([13, 46, 24, 52, 2, 9]));
