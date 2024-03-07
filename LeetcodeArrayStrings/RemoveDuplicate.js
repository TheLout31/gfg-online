var removeDuplicates = function (nums) {
  let count = 0;
  let start = 0;
  let temp = 0;
  let same = 0;
  let element = nums[start];
  let last = nums.length - 1;
  while (start < nums.length) {
    element = nums[start];
    if (element == nums[start] && count > 2) {
      temp = nums[start];
      nums[start] = nums[last];
      nums[last] = temp;
      same++;
      last--;
      count =0;
    }
    start++;
    count++;
  }
  return nums.length-1;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
