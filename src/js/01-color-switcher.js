
const start = document.querySelector('[data-start]');
const endStop = document.querySelector('[data-stop]');

let setColor = null;
start.disabled = false;
endStop.disabled = true;

function startInterval() {
  start.disabled = true;
endStop.disabled = false;
  setColor = setInterval(()=>{
    getIntervalStart()
  },1000)
};
function endInterval() {
  clearInterval(setColor)
  start.disabled = false;
  endStop.disabled = true;
};
start.addEventListener('click',startInterval);
endStop.addEventListener('click',endInterval);



function getIntervalStart() {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
};
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 };