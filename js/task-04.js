let counterValue = 0;
const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');

const counterEl = document.querySelector('#counter #value');

counterEl.textContent = counterValue;

decrBtnEl.addEventListener('click', () => {
  counterValue = counterValue - 1;
  counterEl.textContent = counterValue;
});

incrBtnEl.addEventListener('click', () => {
  counterValue = counterValue + 1;
  counterEl.textContent = counterValue;
})