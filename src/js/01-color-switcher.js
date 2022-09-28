const start = document.querySelector('button[data-start]');
const endStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

start.disabled = false
endStop.disabled = true
let timeId = null


function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 function timer() {
  body.style.backgroundColor = getRandomHexColor()
}


start.addEventListener('click',button);

function button() {
    timeId = setInterval(timer,1000)
start.disabled = true
endStop.disabled = false
}



endStop.addEventListener('click',endColorInterval);

function endColorInterval() {
    start.disabled = false
    endStop.disabled = true
    setInterval(timeId)
}









  // console.log(params.target.textContent);
// console.log(params.target.dataset.start);
