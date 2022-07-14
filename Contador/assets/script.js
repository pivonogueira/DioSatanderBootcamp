const currentNumberWrapper = document.getElementById('currenteNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}
