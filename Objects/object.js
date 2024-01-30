// const readLineSync = require("readline-sync");
// const key = readLineSync.question("whaaat do you need to know??");

const obj = {
  name: "imraan",
  age: 22,
  heigth: "5'6",
  skill: {
    lang: "Javascript",
    tech: "Reactjs",
  },
  city: "delhi",
};

let entry = Object.entries(obj);

console.log(entry);
console.log(entry[0]);
console.log(entry[0][0]);
