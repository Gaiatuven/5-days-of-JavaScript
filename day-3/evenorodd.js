// function to determine if a number is even or odd
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const result = evenOrOdd(10);
console.log(`The number is: ${result}`);