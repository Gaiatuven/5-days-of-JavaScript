
const fruits = ['apple', 'banana', 'cherry', 'watermelon'];

for (let i = 0; i <= fruits.length; i++) {
    if (i === fruits.length) {
        console.log('End of the list');
    } else {
        console.log(fruits[i]);
    }
}

fruits.forEach((fruit, index) => {
    if (index === fruits.length - 1) {
        console.log('End of the list');
    } else {
        console.log(fruit);
    }
})