
function countFreq(nums) {
    let freq = {};
    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1; // Increment the count for the current number
    }
    
    return freq;
}

// Example usage
const nums = [1, 2, 1, 3, 4, 2, 1];
const frequency = countFreq(nums);
console.log(frequency);
