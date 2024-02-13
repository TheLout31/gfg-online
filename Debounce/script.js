let typeInput = document.querySelector(".input");

function changeHandler(e) {
  console.log(e.target.value);
}

function debounce(callback, delay) {
  let timeID;
  return function (...args) {
    timeID = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

let handleDebounce = debounce(changeHandler, 1000);

typeInput.addEventListener("keyup", handleDebounce);
