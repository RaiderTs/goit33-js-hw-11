const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let intervalId = null;
let isActive = false;
const DELAY_TIME = 1000;

refs.btnStart.addEventListener('click', onSwitchColorStart);
refs.btnStop.addEventListener('click', onSwitchColorStop);

function onSwitchColorStart() {
  isActive = true;
  refs.btnStart.disabled = true;
  intervalId = setInterval(() => {
    refs.body.style.cssText = `background-color: ${getRandomHexColor()}`;
  }, DELAY_TIME);
}

function onSwitchColorStop() {
  clearInterval(intervalId);
  isActive = false;
  refs.btnStart.disabled = false;
}

// функция для генерации случайного числа
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
