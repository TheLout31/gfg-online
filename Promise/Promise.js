const url = "https://reqres.in/api/products/3";

// const promise = fetch(url)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     return data.data;
//   })
//   .then(function (newData) {
//     console.log(newData.id);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(promise);

// function db() {
//   return 10 < 2 ? true : false;
// }

// console.log(db());

// let newPromise = new Promise((resolve, reject) => {
//   if (db === true) {
//     resolve("my code works");
//   } else {
//     const error = new Error("something went wrong");
//     reject("you code is wrong", error.message);
//   }
// });

// newPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error, "Your code failed");
//   });

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

getData().then((res) => {
  console.log(`Name:${res.name}  
  Year :${res.year}`);

});
