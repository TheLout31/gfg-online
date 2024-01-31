// const readLineSync = require("readline-sync");
// const key = readLineSync.question("whaaat do you need to know??");

const obj = {
  name: "imraan",
  age: 22,
  heigth: "5'6",
  get: function () {
    console.log(this.name);
  },
  skill: {
    lang: "Javascript",
    tech: "Reactjs",
  },
  city: "delhi",
};

// obj.get();
class useName {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let newUserName = new useName("imran", 23);
newUserName.name = "harun";
console.log(newUserName.name);
