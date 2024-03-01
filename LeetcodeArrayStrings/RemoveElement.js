var removeElement = function(nums, val) {
    let last = nums[nums.length-1];
    let count =0;
    for(let i =0; i<nums.length;i++){
        if(nums[i] === val){
            count++;
            let temp = nums[i];
            nums[i] = last;
            last = temp;
            
        }
        
    }
    return nums.length;
};

console.log(removeElement([3,2,2,3] , 3))