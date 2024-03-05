var PlusOne = function(digits) {
    let num =0;
    let num2 = [];
    for(let i=0 ; i<digits.length;i++){
        num = (num * 10) + digits[i]
    }
    num = num+1;
    
    for(let j =0 ; j<num.length ; j++){
        num2[j] = num[j];
    }
    return num2;
};

console.log(PlusOne([9]))