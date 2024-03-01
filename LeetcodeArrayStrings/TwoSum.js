var twoSum = function (nums, target) {
  let last = nums.length - 1;
  let start = 0;
  let sum = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    sum = nums[start] + nums[last];

    if (sum === target) {
      arr.push(start);
      arr.push(last);
      return arr;
    } else if (sum > target) {
      last -= 1;
    } else if (sum < target) {
      start += 1;
    }
  }
};

console.log(twoSum([2,7,11,15],9))
