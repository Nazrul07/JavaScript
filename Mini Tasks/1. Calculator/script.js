function calculate() {
    const firstNumber = document.getElementById('num1').value;
    const secondNumber = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;

    // parseFloat() converts text into decimal numbers
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if(isNaN(num1) && isNaN(num2)){
        alert('Please enter valid numbers in both fields');
        return;
    }
    if(isNaN(num1)){
        alert('Please enter a valid number in the first field');
        return;
    }
    if(isNaN(num2)){
        alert('Please enter a valid number in the second field');
        return;
    }

    let result;

    if (operator === '+') {
        result = num1 + num2;
    }
    else if (operator === '-') {
        result = num1 - num2;
    } 
    else if (operator === '*') {
        result = num1 * num2;
    } 
    else if (operator === '/') {
        // Division - check if divisor is not zero
        if (num2 === 0) {
            alert('Cant not divide by zero! Please enter a non-zero number in the second field.');
            return;
        }
        result = num1 / num2;
    }
    else if (operator === '%'){
        // Modulo - check if divisor is not zero
        if (num2 === 0) {
            alert('Cant not divide by zero! Please enter a non-zero number in the second field.');
            return;
        }
        result = num1 % num2;
    }
    else if(operator === '^'){
        result = Math.pow(num1, num2);
    }

    // toFixed(2) keeps only 2 digits after decimal point
    result = result.toFixed(2);

    // textContent updates the text inside the result span
    document.getElementById('result').textContent = result;
}

// Add event listener to the input fields
document.getElementById('num1').addEventListener('keypress', function(event) {
    // If user pressed Enter key
    if (event.key === 'Enter') {
        calculate();
    }
});

document.getElementById('num2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
