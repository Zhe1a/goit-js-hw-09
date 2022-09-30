
    import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from "notiflix";
import {convertMs} from"./02.convertMs";
const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button[data-start]');
const timerDiv = document.querySelector('.timer');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minEl = document.querySelector('span[data-minutes]');
const secEl = document.querySelector('span[data-seconds]');
let userDate = null



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);

        if(selectedDates[0] < Date.now()) {
            Notify.failure('Please choose a date in the future');
            userDate = new Date();
        } else { 
            btnEl.disabled = false;
            userDate = selectedDates[0];
        }
    },
};

class Timer  {
    constructor() {
        this.isActive = false;
        this.timerId = null;
        btnEl.disabled = true;
    }
    timerStart() {
        if (this.isActive) {
            return;
        }
    this.isActive = true;
    this.timerId = setInterval(()=> {
        const currentTime = Date.now();
        const deltaTime = userDate - currentTime;
        const components = convertMs(deltaTime);

                secEl.textContent = components.seconds;
                minEl.textContent = components.minutes;
                hoursEl.textContent = components.hours;
                daysEl.textContent = components.days;
                if (deltaTime <= 0) {
                    this.timerStop();
                    timerDiv.innerHTML = "Time is over!";
                } 
    }, 1000)

    }
    timerStop() {
        clearInterval(this.timerId);
    }
}

const timer = new Timer();
flatpickr(inputEl,options);
btnEl.addEventListener('click', () => timer.timerStart());