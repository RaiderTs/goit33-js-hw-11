import Swal from 'sweetalert2';
var debounce = require('lodash.debounce');
import animation from './animation';
animation();

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),
  date: document.querySelector('#date-selector'),
  startBtn: document.querySelector('[data-start]'),
};

refs.date.addEventListener('input', debounce(onInput, 400));
refs.startBtn.addEventListener('click', onClick);
refs.startBtn.setAttribute('disabled', true);


let currentDate = 0;
let settledDate = 0;
let delta = 0;


function onInput(event) {
  currentDate = Date.now();
  settledDate = Date.parse(event.target.value);
  delta = settledDate - currentDate;
  if (delta > 0) {
    refs.startBtn.removeAttribute('disabled');
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      background: '#FFE2E2',
      icon: 'error',
      title: 'Please choose a date in the future',
    });
    refs.startBtn.setAttribute('disabled', true);
  }
}


function onClick() {
  currentDate = Date.now();
  delta = settledDate - currentDate;

  if (delta > 0) {
    const intervalId = setInterval(() => {
      currentDate = Date.now();
      delta = settledDate - currentDate;
      let { days, hours, minutes, seconds } = convertMs(delta);
      if (delta >= 0) {
        updateClockFace(days, hours, minutes, seconds);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  } else {
    Swal.fire('Please choose a date in the future');
  }
}
// функция для подсчета дней
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//  Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function pad(value) {
  return String(value).padStart(2, '0');
}

// подставляем получившиеся значения в интерфейс
function updateClockFace(days, hours, mins, secs) {
  refs.days.textContent = pad(`${days}`);
  refs.hours.textContent = pad(`${hours}`);
  refs.mins.textContent = pad(`${mins}`);
  refs.secs.textContent = pad(`${secs}`);
}

