const delay = ms => {
    return new Promise((resolve, reject) => {
        const success = true
        setTimeout(() => {
          if (success) {
            resolve(ms);
          } else {
            reject(console.log('Error'));
          }
        }, ms);
     })
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms



// body
const refs = {
  body: document.querySelector('body'),
};

refs.body.style.cssText = `background-color: ${getRandomHexColor()}`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

