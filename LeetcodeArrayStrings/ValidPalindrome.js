var isPalindrome = function (s) {
  let s1 = s;
  let pattern = /[^a-zA-Z0-9]/g;
  s1 = s1.toLowerCase();
  let s2 = s1.replace(pattern ,"");
  let start =0;
  let last = s2.length -1;

  while(start <= last){
    if(s2[start] != s2[last]){
        return "Not Palindrome"
    } else{
        start++
        last --
    }
  }
  return "is a palindrome"
};

console.log(isPalindrome("race a car"));
