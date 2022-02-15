import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

const startButtonRef = document.querySelector("button[data-start]");
const daysRef = document.querySelector("span[data-days]");
const hoursRef = document.querySelector("span[data-hours]");
const minutesRef = document.querySelector("span[data-minutes]");
const secondsRef = document.querySelector("span[data-seconds]");

const date = new Date();
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {    
       if (selectedDates[0].getTime() < date.getTime()) {
          Notiflix.Notify.failure("Please choose a date in the future");          
      } else {
          startButtonRef.disabled = false;
        };        
        
        const onStartTimer = () => { 
          intervalId = setInterval(() => {            
            const currentTime = Date.now();
            const timeToAction = msToSeconds(selectedDates[0].getTime() - currentTime);

            const { days, hours, minutes, seconds } = timeToAction;  

                daysRef.textContent = days;
                hoursRef.textContent = hours;
                minutesRef.textContent = minutes;
                secondsRef.textContent = seconds;

            if (selectedDates[0].getTime() - currentTime <1000) { clearInterval(intervalId) };            
          }, 1000)   
};
        
        startButtonRef.addEventListener("click", onStartTimer);
  },
};

function msToSeconds(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = addLeadingZero(Math.floor(ms / day));
  const hours =addLeadingZero(Math.floor((ms % day) / hour));
  const minutes =addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds =addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};
function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};

startButtonRef.disabled = true;
flatpickr("input#datetime-picker", options);
