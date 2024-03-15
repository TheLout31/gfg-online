var rotate = function (nums, k) {
  const n = nums.length;
  k %= n; // Handle cases where k is greater than the length of the array

  reverse(nums, 0, n - 1); // Reverse the entire array
  reverse(nums, 0, k - 1); // Reverse the first part up to k
  reverse(nums, k, n - 1); // Reverse the rest after k
  return nums;

  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
};

console.log(rotate([1, 2, 3, 99], 2));
