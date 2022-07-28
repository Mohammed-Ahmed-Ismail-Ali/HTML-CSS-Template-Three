let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime(); 

  // Find The Difference Between Now and Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); // the good one

  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));

  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

  document.querySelector(".days").innerHTML = `${days}` < 10 ? `0${days}` : `${days}`;
  document.querySelector(".hours").innerHTML = `${hours}` < 10 ? `0${hours}` : `${hours}`;
  document.querySelector(".minutes").innerHTML = `${minutes}` < 10 ? `0${minutes}` : `${minutes}`;
  document.querySelector(".seconds").innerHTML = `${seconds}` < 10 ? `0${seconds}` : `${seconds}`;

  if(dateDiff < 0) {
    clearInterval(counter);
  }

}, 1000)

// Countdoan Timer

let nums = document.querySelectorAll(".box .number");
let statsSection = document.querySelector(".statistics");
let started = false;

window.onscroll = function() {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) { // started == false ?
      nums.forEach(num => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal)
}
