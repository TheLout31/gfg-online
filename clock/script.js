let btn = document.getElementById("activate");
let hour = document.querySelector(".Hour .number");
let min = document.querySelector(".min .number");
let sec = document.querySelector(".sec .number");
let ap = document.querySelector(".ampm .am_pm");
 
 
function onClicked() {
  let amp = true
  let d = new Date();
  var audio = new Audio("tik.mp3")
  let h = d.getHours()
  if (h == '00') {
    h = 12;
    amp = false
    
  } else {
    h -= 12;
    amp = true
    // h.toString().padStart(2,"0")
  }
  let m = d.getMinutes().toString().padStart(2, "0");
  let s = d.getSeconds().toString().padStart(2, "0");

  hour.textContent = h.toString().padStart(2,"0");
  min.textContent = m;
  sec.textContent = s;
  if(!amp){
    ap.textContent = 'AM'
  } else{
    ap.textContent = 'PM'
  }
  
  audio.play();
}



setInterval(onClicked, 1000);


