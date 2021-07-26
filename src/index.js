import './sass/main.scss';
import { gsap } from 'gsap';

const text = document.querySelector('.title');

const splitText = el => {
  el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
    return (
      `<div class="word">` +
      m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
      `</div>`
    );
  });
  return el;
};

const split = splitText(text);

function random(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(split.querySelectorAll('.letter'));

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
  gsap.from(el, 2.5, {
    opacity: 0,
    scale: 0.1,
    x: random(-250, 500),
    y: random(-250, 500),
    z: random(-250, 500),
    delay: idx * 0.01,
    repeat: 0,
  });
});
