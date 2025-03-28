function factorialOfNumber(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (number === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorialOfNumber(2)); // Output: 120
console.log(factorialOfNumber(0)); // Output: 1
console.log(factorialOfNumber(-1)); // Output: Factorial is not defined for negative numbers