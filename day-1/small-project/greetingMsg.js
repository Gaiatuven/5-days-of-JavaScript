
function greet() {
    let username = prompt('Enter your Name: ');
    let age = prompt('Enter your age: ');

    return `Welcome ${username}, here you will learn a lot about coding, at age ${age}`;
}

console.log(greet());