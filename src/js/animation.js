export default function animation() {
  let wrapper = document.querySelector('.title');
  let text = document.querySelector('.title-text');
  let textCont = text.textContent;
  text.style.display = 'none';

  for (let i = 0; i < textCont.length; i += 1) {
    (function (i) {
      setTimeout(function () {
        let texts = document.createTextNode(textCont[i]);
        let span = document.createElement('span');
        span.appendChild(texts);

        span.classList.add('wave');
        wrapper.appendChild(span);
      }, 100 * i);
    })(i);
  }
}
