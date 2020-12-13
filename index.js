let jumped = false

document.getElementById("btn").onmouseover = ()=>{
  if(jumped) return;
jumped = true
document.getElementById("btn").id = "hammerbtn"
document.getElementById("hammerbtn").getAnimations().forEach(anim=>anim.play())
setTimeout(() => {
  document.getElementById("addtext").innerText = "Hammer time!"

}, 500);
}
const topbtn = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function toAbout(){
  window.scrollTo(0,document.body.scrollHeight);
}