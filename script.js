

// Alarm
var newclass = document.getElementsByTagName("body");
 function setAudio() {
  var userMinute = document.getElementById("minuteInput").value;
  var usersec = document.getElementById("secInput").value;
  var userhour = document.getElementById("hourInput").value;
  
  if (userMinute == null || userMinute < 0 || userMinute >= 60) {
    alert("Please enter a valid minute (0-59).");
    return;
  }
  function audioplayer() {
    var currentTime = new Date().getMinutes();
    var currentTimes = new Date().getSeconds();
    var currentTimess = new Date().getHours();

    if (currentTime == userMinute && currentTimes == usersec && currentTimess == userhour) {
      document.getElementById("audioplayer").play();
      navbar();
    }
  }
  setInterval(audioplayer);
}
// Alarm
// countdown time set




// Countdown 
// document.addEventListener('DOMContentLoaded', function () {
//   let seconds = 10;
//   const timerElement = document.getElementById('timer');
//   function updateTimer() {
//     timerElement.textContent = seconds;
//   }

//   function countdown() {
//     if (seconds > 0) {
//       seconds--;
//       updateTimer();
//  }
//   }
//   const timerInterval = setInterval(countdown, 1000);

// });
// Countdown 


// Time
function displaytime() {
  var timee = new Date();
  var hrs = timee.getHours();
  hrs = hrs - 12;
  var mint = timee.getMinutes();
  var sec = timee.getSeconds();
 
  var session = document.getElementById("session");
  if (hrs >= 12) {
    session.innerHTML = "AM";
  } else {
    session.innerHTML = "PM";
  }
  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("mint").innerHTML = mint;
  document.getElementById("sec").innerHTML = sec;
}
setInterval(displaytime);
 // Time 

 
 // Snooze and Camcel Button
 let alartimeout;
function snoozebtn(){
  document.getElementById("audioplayer").pause();
  console.log("hi")
  clearTimeout(alartimeout)
  const trig = () =>{
    document.getElementById("audioplayer").play();
  }
  setTimeout(trig, 5000)
}

function Cancel(){
  document.getElementById("audioplayer").pause();
}

 // Snooze and Camcel Button