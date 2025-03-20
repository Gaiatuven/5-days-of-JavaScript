function add(numb1, numb2) {
    return numb1 + numb2;
}

function subtract(numb1, numb2) {
    return numb1 - numb2;
}

function multiply(numb1, numb2) {
    return numb1 * numb2;
}

function divide(numb1, numb2) {
    return numb1 / numb2;
}

let operator = "-"
let result;

let numb1 = 3;
let numb2 = 4;

if (operator === "+") {
    result = add(numb1, numb2);
} else if (operator === "-") {
    result = subtract(numb1, numb2);
} else if (operator === "*") {
    result = multiply(numb1, numb2); // Corrected this line
} else if (operator === "/") {
    result = divide(numb1, numb2);
}

console.log(result);