const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
let timerId = null;

btnStartRef.addEventListener('click', onClickStart);
btnStopRef.addEventListener('click', onClickStop);

function onClickStart() { 
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStartRef.setAttribute('disabled', true);
    btnStopRef.removeAttribute('disabled');
};

function onClickStop() { 
    clearInterval(timerId);
    btnStartRef.removeAttribute('disabled');
    btnStopRef.setAttribute('disabled', true);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}