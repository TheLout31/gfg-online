
function countFreq(nums,x) {
    let freq = {};
    
    for (let num of nums) {
        if(freq[num]){
            freq[num]++
        }  else{
            freq[num] = 1;
        } // Increment the count for the current number
    }
    
    return `${x} : ${freq[x]}`;
}

// Example usage
const nums = [1, 2, 1, 3, 4, 2, 1];
const frequency = countFreq(nums,1);
console.log(frequency);
