var removeElement = function (nums, val) {
    let [left, right] = [0, 0]

    while (right < nums.length) {
      if (nums[right] !== val) {
        nums[left] = nums[right]
        left += 1
      }
      
      right += 1
    }
  
    return left
};

console.log(removeElement([3, 2, 2, 3], 3));
