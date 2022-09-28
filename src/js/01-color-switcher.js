const start = document.querySelector('button[data-start]');
const endStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
console.log(endStop);
start.disabled = false
endStop.disabled = true
let timeId = null

function timer() {
    body.style.backgroundColor = getRandomHexColor()
}
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }


start.addEventListener('click',button);

function button() {
    timeId = setInterval(timer,1000)
start.disabled = true
endStop.disabled = false
}



endStop.addEventListener('click',endColorInterval);

function endColorInterval() {
    console.log("folss");
    start.disabled = false
    end.disabled = true
    setInterval(timeId)
}









  // console.log(params.target.textContent);
// console.log(params.target.dataset.start);
