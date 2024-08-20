let lastChar = ''; // To keep track of the last character added
let dvd = document.getElementsByClassName('dvd');
let tms = document.getElementsByClassName('tms');

function appendToDisplay(value) {
    const display = document.getElementById('display');
    tms = '*'
    dvd = '/'
    if (['+', '-', tms, dvd].includes(value)) {
        // Replace the last operator if the new value is an operator
        if (['+', '-', tms, dvd].includes(lastChar)) {
            display.value = display.value.slice(0, -1);
        }
        display.value += value;
    } else {
        display.value += value;
    }
    
    lastChar = value; // Update the last character
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display2').value = '';
    lastChar = ''; // Reset lastChar
}

function backspace() {
    const display = document.getElementById('display');
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
        lastChar = display.value.slice(-1); // Update lastChar
    }
    document.getElementById('display2').value = '';
}

function computeResult() {
    const display = document.getElementById('display');
    const display2 = document.getElementById('display2');
    try {
        // Evaluate the expression
        tms = '*'
        dvd = '/'
        display2.value = eval(display.value);
    } catch (e) {
        display2.value = 'Error';
        console.log(e)
    }
    if(display2.value == 'undefined'){
        display2.value = '';
    }
    lastChar = display.value; // Update lastChar with the result
    
}
