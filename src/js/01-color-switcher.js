const start = document.querySelector('[data-start]');
const endStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timeId = null;
start.disabled = false
endStop.disabled = true



function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 function bodyStyleColor() {
  body.style.backgroundColor = getRandomHexColor()
}


start.addEventListener('click', startColorInterval);

function startColorInterval() {
timeId = setInterval(bodyStyleColor,1000)
start.disabled = true
endStop.disabled = false
}

endStop.addEventListener('click',endColorInterval);

function endColorInterval() {
  clearInterval(timeId)
    start.disabled = false
    endStop.disabled = true
}


