const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    if (formElements.email.value === "" || formElements.password.value === "") {
        alert("Все поля формы должны быть заполнены!!!")
    } else {
        const formData = {
        email: formElements.email.value,
        password: formElements.password.value,
    }
        console.log(formData);
        formEl.reset();
    }
    
}
