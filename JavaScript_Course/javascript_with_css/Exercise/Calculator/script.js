let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
    calculation += value;

    // Display the calculation on the page
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}

function calculate() {
    try {
        calculation = eval(calculation);
        displayCalculation();
        localStorage.setItem('calculation', calculation);
    } catch (error) {
        alert('Invalid calculation');
    }
}

function clearCalculation() {
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}
