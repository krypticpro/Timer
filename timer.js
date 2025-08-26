let display = document.querySelector(".display");
let setTimer = document.getElementById("setTimer");
let startTimer = document.getElementById("startTimer");
let stopTimer = document.getElementById("stopTimer");
let resetTimer = document.getElementById("resetTimer");

function digits(num) {
  return num.length;
}

setTimer.addEventListener("click", () => {
  // async function getInputs() {
  //   let hrInput = await document.getElementById("hrInput");
  //   let minInput = await document.getElementById("minInput");
  //   let secInput = await document.getElementById("secInput");
  // }
  // getInputs();

  if (isNaN(parseInt(hrInput.value)) || !hrInput.value) {
    hrsLeft = 0;
    hrInput.value = hrsLeft;
  }
  if (isNaN(parseInt(minInput.value)) || !minInput.value) {
    minsLeft = 0;
    minInput.value = minsLeft;
  }
  if (isNaN(parseInt(secInput.value)) || !secInput.value) {
    secsLeft = 0;
    secInput.value = secsLeft;
  }

  display.innerHTML = `
  <span id="hrsLeft">${
    digits(hrInput.value) === 1 ? "0" + hrInput.value : hrInput.value
  }</span>
  <span> : </span>
  <span id="minsLeft">${
    digits(minInput.value) === 1 ? "0" + minInput.value : minInput.value
  }</span>
  <span> : </span>
  <span id="secsLeft">${
    digits(secInput.value) === 1 ? "0" + secInput.value : secInput.value
  }</span>`;

  startTimer.addEventListener("click", () => {
    let hrDisplay = document.getElementById("hrsLeft");
    let minDisplay = document.getElementById("minsLeft");
    let secDisplay = document.getElementById("secsLeft");
    let hrsLeft = parseInt(hrDisplay.innerText);
    let minsLeft = parseInt(minDisplay.innerText);
    let secsLeft = parseInt(secDisplay.innerText);

    const timer = setInterval(() => {
      if (isNaN(hrsLeft) || !hrsLeft || hrsLeft < 0) {
        hrsLeft = 0;
        hrDisplay.innerText = "0" + hrsLeft;
      }
      if (isNaN(minsLeft) || !minsLeft || minsLeft < 0) {
        minsLeft = 0;
        minDisplay.innerText = "0" + minsLeft;
      }
      if (isNaN(secsLeft) || !secsLeft || secsLeft < 0) {
        secsLeft = 0;
        secDisplay.innerText = "0" + secsLeft;
      }

      if (secsLeft === 0 && minsLeft === 0 && hrsLeft === 0) {
        clearInterval(timer);
        alert("Time's up!");
        return;
      } else if (secsLeft > 0) {
        secsLeft -= 1;
        if (digits(secsLeft) === 1) {
          secDisplay.innerText = "0" + secsLeft;
          console.log(secsLeft);
        } else {
          secDisplay.innerText = secsLeft;
          console.log(secsLeft);
        }
      } else if (minsLeft > 0) {
        minsLeft -= 1;
        if (digits(minsLeft) === 1) {
          minDisplay.innerText = "0" + minsLeft;
        } else {
          minDisplay.innerText = minsLeft;
        }
        secsLeft = 59;
        secDisplay.innerText = secsLeft;
      } else if (hrsLeft > 0) {
        hrsLeft -= 1;
        if (digits(hrsLeft) === 1) {
          hrDisplay.innerText = "0" + hrsLeft;
        } else {
          hrDisplay.innerText = hrsLeft;
        }
        minsLeft = 59;
        minDisplay.innerText = minsLeft;
        secsLeft = 59;
        secDisplay.innerText = secsLeft;
      }
    }, 1000);

    stopTimer.addEventListener("click", () => {
      console.log("cleared!");
      clearInterval(timer);
    });

    resetTimer.addEventListener("click", () => {
      display.innerHTML = `
            <input type="number" id="hrInput" placeholder="00" min="0" max="99" />
            <span> : </span>
            <input type="number" id="minInput" placeholder="00" min="0" max="59" />
            <span> : </span>
            <input type="number" id="secInput" placeholder="00" min="0" max="59" />`;
    });
  });
});
