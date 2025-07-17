
function greetMsg(age) {
    if (age < 15) {
        return "Hello kid!";
    } else if (age > 15 && age < 25) {
        return "Hello young adult!";
    } else if (age >= 25 && age < 35) {
        return "Hello adult!";
    } else if (age >= 35 && age < 50) {
        return "Hello middle-aged!";
    } else {
        return "Hello senior!";
}}

const greeting = greetMsg(5);
console.log(greeting); 