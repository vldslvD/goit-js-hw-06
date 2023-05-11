function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.widget .color');
const bodyEl = document.querySelector('body');

changeBtnEl.addEventListener('click', onChangeBtnClick);

function onChangeBtnClick() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}