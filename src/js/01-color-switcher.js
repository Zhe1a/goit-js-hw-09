const start = document.querySelector("[data-start]");
const end = document.querySelector('[data-stop]');
const body = document.querySelector('body');
function button() {
// console.log(params.target.textContent);
// console.log(params.target.dataset.start);
    timer()  
 console.log("start");
}
function endColorInterval() {
 timer()

}

function timer(e) {
    setInterval(()=>{
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  end.addEventListener('click',endColorInterval);
  start.addEventListener('click',button);
