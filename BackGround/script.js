let change = document.querySelector(".btn");
let bg = document.getElementById("back-page");

function randomColors() {
  let colors = ["yellow", "purple", "green", "pink","blue","indigo","grey"];
  let color = Math.floor(Math.random() * colors.length);
  let c = colors[color];
  bg.style.backgroundColor = c;
}

change.addEventListener("click", randomColors);
