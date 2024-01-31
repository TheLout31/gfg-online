let arr = [1, 2, 3, 4, 5];

function cal(val, v) {
  return val ** v;
}

function square(num, i, wrapper) {
  let newarr = [];
  for (let n of num) {
    newarr.push(wrapper(n, i));
  }
  return newarr;
}

let s = square(arr, 3, cal);


console.log(s);

