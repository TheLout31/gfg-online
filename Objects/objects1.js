// let arr = [1, 2, 3, 4, 5];
// let b = `Hello`;
// // function hello (){
// //   var a =10;
// // }

// console.log(typeof b);

//recursve
// let sum = 0;
// function total(n) {
//   if (n === 1) {
//     return n;
//   }
//   return n + total(n - 1);
// }

// let result = total(5);

// console.log(result);

// var array = [36, 25, 6, 15];

// let a =array.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, {}); // 36 + 25 + 6 + 15 = 82

// console.log(a);

// function noVowels(str) {
//   let v = ["a", "e", "i", "o", "u"];
//   let result = "";
//   for (let char of str) {
//     if (!v.includes(char)) {
//       result += char;
//     }
//   }
//   return result;
// }

// console.log(noVowels("Hello how are you"));

// function hashtag(str) {
//   let temp = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i < str.length - 4) {
//       temp += str[i];
//     } else {
//       temp += "#";
//     }
//   }
//   return temp;
// }
// // BIRTHDAY
// console.log(hashtag("birthday"));

function encode(str, n) {
  let encoded = "";
  let currposition = 0;
  let newposition = 0;
  let newStr = "";
  for (let i in str) {
    currposition = str.charCodeAt(i);
    newposition = currposition + n;
    newStr = String.fromCharCode(newposition);
    encoded += newStr;
  }
  return encoded;
}

console.log(encode("Imran", 5));
