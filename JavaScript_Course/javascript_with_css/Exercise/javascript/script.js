
function js_button(){
    const button = document.querySelector('.js-button');
    if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}

function js_button2(){
    const button = document.querySelector('.js-button-2');
    if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}

function js_button3(){
    const button = document.querySelector('.js-button-3');
    if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}

function calculate() {
    let userInput = document.querySelector('.cost-input');
    let userMessage = document.querySelector('.message');
    if (userInput.value < 0) {
        userMessage.classList.add("error-message");
        userMessage.textContent = "Enter a value greater than 0";
    } else {
        userMessage.classList.remove("error-message");
        userMessage.textContent = `Total bill is ${userInput.value}`;
    }
}
    

