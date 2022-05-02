const counterValue = document.querySelector('#value')
let counterEl = +counterValue.textContent;
console.log(counterEl);

const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");


incrementBtn.addEventListener("click", onIncrValue)
decrementBtn.addEventListener("click", onDecrValue)

function onIncrValue() {
    counterValue.innerHTML = counterEl += 1;
}
function onDecrValue() {
    counterValue.innerHTML = counterEl -= 1;
}