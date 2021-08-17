// All clear data to display box
document.getElementById('clear').addEventListener('click', function () {
    const userInput = document.getElementById('user-input');
    userInput.value = '';
})

// back button 
document.getElementById('back-button').addEventListener('click', function () {
    const userInput = document.getElementById('user-input');
    const userInputValue = userInput.value;
    userInput.value = userInputValue.substr(0, userInputValue.length - 1);

})

// value of numbers
const numbers = document.getElementsByClassName('numbers');
for (const number of numbers) {
    number.addEventListener('click', function () {
        const userInput = document.getElementById('user-input');
        userInput.value = userInput.value + number.value;

    })
}

// calculateion of user inputs
document.getElementById('equal').addEventListener('click', function () {
    const display = document.getElementById('user-input');
    const displayValue = eval(display.value);
    display.value = displayValue;

    if (displayValue == undefined) {
        display.value = '';
    }

})
