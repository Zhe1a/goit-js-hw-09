const start = document.querySelector('button[data-start]');
const endStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timeId = null;
const INTERVAL_DELAY = 1000;
start.disabled = false;
endStop.disabled = true;



function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 function timer() {
  body.style.backgroundColor = getRandomHexColor()
}


start.addEventListener('click', button);

function button() {
    timeId = setInterval(timer,INTERVAL_DELAY)
start.disabled = true
endStop.disabled = false
}

endStop.addEventListener('click',endColorInterval);

function endColorInterval() {

    start.disabled = false
    endStop.disabled = true
    clearInterval(timeId)
}

