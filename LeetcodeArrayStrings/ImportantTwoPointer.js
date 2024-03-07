var twoSum = function (numbers, target) {
  let s1 = 0;
  let s2 = numbers.length - 1;
  let sum = 0;
  let arr = [];
  while (s1 < s2) {
    sum = numbers[s1] + numbers[s2];
    if (sum == target) {
      arr.push(s1 + 1);
      arr.push(s2 + 1);
      return arr;
    } else if (sum > target) {
      s2--;
    } else {
      s1++;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
