const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');

inputEl.addEventListener('input', onChangeSizeSpan);

function onChangeSizeSpan() {
    spanEl.style.fontSize = inputEl.value + "px";
}
// console.dir(inputEl.value);
// console.log(spanEl.style);