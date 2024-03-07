var reverseWords = function (s) {
    let s1 = ""
    let word = ""
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === " ") {
            s1 += " " + word;
            word = "";
        }
        word += s[i];
    }
    return s1;
};

console.log(reverseWords("hello world"))