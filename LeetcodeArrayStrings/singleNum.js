var singleNumber = function(nums) {
    let hash = {}
    let smallest = 0
    for(let i = 0;i<nums.length;i++){
        hash[nums[i]] =  hash[nums[i]] ?  hash[nums[i]]+1 : 1; 
    }
    
    for (let num in hash) {
        if (hash[num] === 1) {
            return parseInt(num);
        }
    }
    
    return null; 
};

console.log(singleNumber([2,1,1,2]))