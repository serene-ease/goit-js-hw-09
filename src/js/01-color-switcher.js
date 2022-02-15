const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
let timerId = null;

btnStartRef.addEventListener('click', onClickStart);
btnStopRef.addEventListener('click', onClickStop);

function onClickStart() { 
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
};

function onClickStop() { 
    clearInterval(timerId);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}