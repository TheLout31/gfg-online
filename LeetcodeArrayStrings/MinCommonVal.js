var getCommon = function (nums1, nums2) {
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            common = nums1[i];
            break;
        } else if (nums1[i] < nums2[j]) {
          i++;
        } else {
          j++;
        }
      }
    
      return common !== Infinity ? common : -1;
};

console.log(getCommon([1, 2, 3, 4], [2, 4]));
