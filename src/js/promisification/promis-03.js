const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    return new Promise((onSuccess, onError) => {
        const delay = randomIntegerFromInterval(200, 500);
        setTimeout(() => {
          const canProcess = Math.random() > 0.3;
          if (canProcess) {
            onSuccess({ id: transaction.id, time: delay });
          } else {
            onError(transaction.id);
          }
        }, delay);
    });
  
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Currently the function works like this
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);

// The function should work like this
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);


// body
const refs = {
  body: document.querySelector('body'),
};

refs.body.style.cssText = `background-color: ${getRandomHexColor()}`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}