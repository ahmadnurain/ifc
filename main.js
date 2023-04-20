//time start
function time() {
  let a_p = "";
  let date = new Date();
  let hs = date.getHours();
  let ms = date.getMinutes();
  let ss = date.getSeconds();

  if (hs < 12) {
    a_p = "AM";
  } else {
    a_p = "PM";
  }
  if (hs == 0) {
    hs = 12;
  }
  if (hs > 12) {
    hs = hs - 12;
  }
  hs = cekjam(hs);
  ms = cekjam(ms);
  ss = cekjam(ss);

  document.getElementById("jam").innerHTML = hs + ":" + ms + ":" + ss + " " + a_p;
  function cekjam(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
setInterval(time, 100);
//time end

//navbar start
let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

//navbar end

//count start
let countDownDate = new Date("Apr 21,2023 18:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);
