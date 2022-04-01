import { Notify } from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;

    // if (Math.sign(delay.value) !== 1 && Math.sign(step.value) !== 1 && Math.sign(amount.value) !== 1)
    
    
    if (delay.value <= 0 || step.value <= 0 || amount.value <= 0)
    { 
      alert('You are inserted incorrect value');
      return
    }
    
  let iterationDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, iterationDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
      });
      iterationDelay += Number(step.value);
  }  
  }
function createPromise(position, delay) {
  const evaluate = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (evaluate) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}