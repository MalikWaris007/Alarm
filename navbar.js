var colorchanger;

function countdown() {
  var usersecs = document.getElementById("secInput");
  var uservalue = usersecs;
  colorchanger = document.getElementById("timer");
  var currentTimes = new Date().getSeconds();
  if (uservalue.value - 10 == currentTimes) {
    document.getElementById("timer").innerHTML = "10";
    document.getElementById("1").play();
    colorchanger.style.color = "blue";
  } else if (uservalue.value - 9 == currentTimes) {
    document.getElementById("timer").innerHTML = "9";
    colorchanger.style.color = "yellowgreen";
  } else if (uservalue.value - 8 == currentTimes) {
    document.getElementById("timer").innerHTML = "8";
    colorchanger.style.color = "red";
  } else if (uservalue.value - 7 == currentTimes) {
    document.getElementById("timer").innerHTML = "7";
    colorchanger.style.color = "chartreuse";
  } else if (uservalue.value - 6 == currentTimes) {
    document.getElementById("timer").innerHTML = "6";
    colorchanger.style.color = "indianred";
  } else if (uservalue.value - 5 == currentTimes) {
    document.getElementById("timer").innerHTML = "5";
    colorchanger.style.color = "gray";
  } else if (uservalue.value - 4 == currentTimes) {
    document.getElementById("timer").innerHTML = "4";
    colorchanger.style.color = "black";
  } else if (uservalue.value - 3 == currentTimes) {
    document.getElementById("timer").innerHTML = "3";
    colorchanger.style.color = "blueviolet";
  } else if (uservalue.value - 2 == currentTimes) {
    document.getElementById("timer").innerHTML = "2";
    colorchanger.style.color = "chocolate";
  } else if (uservalue.value - 1 == currentTimes) {
    document.getElementById("timer").innerHTML = "1";
    colorchanger.style.color = "lime";
  } else {
    document.getElementById("timer").innerHTML = "";
  }
}

setInterval(countdown);

var btn;
function navbar() {
  document.getElementById("navbar");
  var btn = document.getElementById("navbarrr");
  btn.classList.add("ddd");
}
