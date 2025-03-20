//  **Write a script that prints "Hello, World!" to the console.**
// console.log("Hello");

let stringWord = 'Hello';
let numberValue = 23;
let isWarm = false;
let nullValue = null;
let notDefined = undefined;

// **Create variables of different data types (string, number, boolean) and log them to the console
console.log(typeof stringWord);
console.log(typeof stringValue);
console.log(typeof isWarm);
console.log(typeof nullValue);
console.log(typeof notDefined);

// **Write a script that concatenates two strings and logs the result.**

let stringValue1 = 'Cherelene';
let stringValue2 = 'Meyer';

let combinedStringValue = stringValue1 + ' ' + stringValue2;
console.log(combinedStringValue);

console.log('Hello, My name is' +  ' ' + stringValue1 + ' ' + stringValue2);
console.log(`Hello, My name is ${combinedStringValue}`);
console.log(`Hello, My name is ${stringValue1 + ' ' + stringValue2}`);

// **Create a variable to store your age and log a message that includes your age.**

let age = 37;
console.log(`My age is ${age}`);
console.log('My age is',  + age);

// **Write a script that converts a number to a string and logs the type of the variable.**

let numberToBeConverted = Number(prompt('Enter a number to convert to a string'));
console.log(numberToBeConverted.toString())
