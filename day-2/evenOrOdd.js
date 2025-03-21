// Calculate if number is an odd or even number

var prompt = require('prompt-sync')();
function evenOrOdd(value) {

    let value2 = prompt('Enter a number to check whether its even or odd: ');
    value2 = parseInt(value2); // Convert the input to an integer

    if (isNaN(value2)) { // Check if the input is a valid number
        return "Invalid input. Please enter a number.";
    }

    if (value2 % 2 === 0) {
        return `Even number ${value2}`;
    } else {
        return `Odd number ${value2}`;
    }
}

let result = evenOrOdd(11);
console.log(result);