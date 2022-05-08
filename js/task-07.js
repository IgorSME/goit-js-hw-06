const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');
spanEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', onChangeSizeSpan);

function onChangeSizeSpan() {
    
    spanEl.style.fontSize = inputEl.value + "px";
}
