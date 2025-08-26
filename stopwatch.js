let secs = document.getElementById("secs");
let mins = document.getElementById("mins");
let hrs = document.getElementById("hrs");
let intSecs = parseInt(secs.innerText);
let intMins = parseInt(mins.innerText);
let intHrs = parseInt(hrs.innerText);
let startButton = document.getElementById("startStopwatch");
let stopButton = document.getElementById("stopStopwatch");
let resetButton = document.getElementById("resetStopwatch");

function digits(num) {
  return num.toString().length;
}

startButton.addEventListener("click", () => {
  const timer = setInterval(() => {
    if (intSecs === 59) {
      intSecs = 0;
      secs.innerText = "00";
      if (intMins === 59) {
        intMins = 0;
        mins.innerText = "00";
        if (digits(intHrs) === 1) {
          intHrs += 1;
          hrs.innerText = "0" + intHrs.toString();
        } else {
          intHrs += 1;
          hrs.innerText = intHrs.toString();
        }
      }
      intMins += 1;
      if (digits(intMins) === 1) {
        mins.innerText = "0" + intMins.toString();
      } else {
        mins.innerText = intMins.toString();
      }
    } else {
      if (digits(intSecs) === 1) {
        intSecs += 1;
        secs.innerText = "0" + intSecs.toString();
        console.log(intSecs);
      } else {
        intSecs += 1;
        secs.innerText = intSecs.toString();
        console.log(intSecs);
      }
    }
  }, 1000);

  stopButton.addEventListener("click", () => {
    clearInterval(timer);
  });

  resetButton.addEventListener("click", () => {
    clearInterval(timer);
    intSecs = 0;
    intMins = 0;
    intHrs = 0;
    secs.innerText = "00";
    mins.innerText = "00";
    hrs.innerText = "00";
  });
});
