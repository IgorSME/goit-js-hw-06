const inputEl = document.querySelector("input");
console.log(inputEl.value);


inputEl.addEventListener('blur', onValidationInput);


function onValidationInput(event) {
    
    // if (+inputEl.dataset.length === event.currentTarget.value.length) {
    //     inputEl.classList.add('valid');
        
    // } else {
    //     inputEl.classList.add('invalid');
    // }
    +inputEl.dataset.length === event.currentTarget.value.length ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
    
 }
