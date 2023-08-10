const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const txt4 = document.getElementById("txt4");

const newYears = "13 Sept 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  if (seconds <= 0) {
    console.log("d");
    clearInterval(timer);
    console.log("db");
    // player.play();
    // daysEl.innerHTML = "Happy";
    // hoursEl.innerHTML = "Birthday";
    // minsEl.innerHTML = "Lakhan";
    // secondsEl.innerHTML = "!";
    // txt1.innerHTML = "";
    // txt2.innerHTML = "";
    // txt3.innerHTML = "";
    // txt4.innerHTML = "";
  } else {
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

var timer = setInterval(countdown, 1000);

//original
//    background-image: url("./snow.jpg");

// tiles
//background-image: url("https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
