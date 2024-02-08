let str = "react is a string";



function reverseStr(s){
    let newstr = s.split(" ");
    let rev = ""
    let temp =""
    for(let i of newstr){
         temp = i.split("").reverse().join("");
         rev += " "+temp
         temp="";
    }
    return rev;
}


console.log(reverseStr(str));