//hello imran
//narmi olleh

function ReverseAString(str) {
  let newstr = str;
  let result = "";
  if (newstr === "") {
    return "";
  }

  return ReverseAString(newstr.substring(1)) + newstr[0];
}

console.log(ReverseAString("car"));
