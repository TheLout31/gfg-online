
function nthlargest(arr, highest) {
	// write your code here
	let temp =0;
	for(let i =0;i<arr.length;i++){
        let smallest =i;
		for(let j=i+1;j<arr.length;j++){
            
            if(arr[smallest] > arr[j]){
                smallest = j;
            }
		    
		}
		temp = arr[smallest];
		arr[smallest] = arr[i]
		arr[i] =temp
	}
	return arr
}

const arr = [7,8,3,1,2];
const highest = 4;

console.log(nthlargest(arr, highest));