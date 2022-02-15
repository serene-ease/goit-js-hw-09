import { Notify } from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;

  let iterationDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayStep)
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