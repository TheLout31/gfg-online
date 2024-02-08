let sentence  = "kese ho bhai tum"

// get each words from the sentence
function getWords(s){
    let newArr = [];
    let str="";
    let start = 0;
    for(let i=0;i<=s.length ;i++){
        str=""
        if(s[i] == ' ' || i === s.length){
            for(let j =start ; j<i;j++){
                str += s[j];
            }
            newArr.push(str);
            start = i+1;
        }
    }
    return newArr;
}
//sorting the arr using Selection sorting for each word length
function nthlargest(arr) {
	// write your code here
	let temp =0;
	for(let i =0;i<arr.length;i++){
        let smallest =i;
		for(let j=i+1;j<arr.length;j++){
            
            if(arr[smallest].length > arr[j].length){
                smallest = j;
            }
		    
		}
		temp = arr[smallest];
		arr[smallest] = arr[i]
		arr[i] =temp
	}
	return arr
}


let splitArr = getWords(sentence);
console.log(nthlargest(splitArr));