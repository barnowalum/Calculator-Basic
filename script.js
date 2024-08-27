let lastChar = ''; // To keep track of the last character added

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (['+', '-', '×', '÷', '%'].includes(value)) {
        // Replace the last operator if the new value is an operator
        if (['+', '-', '×', '÷', '%'].includes(lastChar)) {
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
    let expression = display.value;
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
    expression = handlePercentages(expression);
    try {
        let result = eval(expression);

        if (typeof result === 'number') {
            if (result % 1 !== 0) {
                result = result.toFixed(2);
            }
        }

        display2.value = result;
    } catch (e) {
        display2.value = 'Error';
    }

    if(display2.value == 'undefined'){
        display2.value = '';
    }
    lastChar = display.value; // Update lastChar with the result 
}

function handlePercentages(expression) {
    // Convert percentage expressions to decimal
    return expression.replace(/(\d+\.?\d*)%(\d+\.?\d*)/g, '($1 * $2) / 100').replace(/(\d+)%/g, '$1 / 100');
   // return expression.replace(/(\d+)%(\d+)/g, '($1 * $2) / 100').replace(/(\d+)%/g, '$1 / 100');
}
