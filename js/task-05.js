const inputEl = document.querySelector("input#name-input");
const titleEl = document.querySelector("span#name-output");

inputEl.addEventListener('input', onChangeTitleText);

function onChangeTitleText(event) {
    // titleEl.textContent = event.currentTarget.value;
    titleEl.textContent = event.currentTarget.value === "" ? "Anonymus" : event.currentTarget.value;
    
    
}