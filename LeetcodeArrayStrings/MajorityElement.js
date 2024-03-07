var majorityElement = function (nums) {
  let hash = {};
  let max = 0;
  let index = nums[0];
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1;

    if (hash[nums[i]] > max) {
      max = hash[nums[i]];
      index = nums[i];
    }
  }
  return index;
};

console.log(majorityElement([6, 6, 6, 7, 7]));
