
function totalSum(array) {
    const total = [];
    for (let i = 0; i < array.length; i++) {
        total.push(array[i]);
    }
    return total.reduce((acc, curr) => acc + curr, 0);
}

console.log(totalSum([1, 2, 3, 4, 5])); 

function totalSum2(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }
    return totalSum;
}
console.log(totalSum2([1, 2, 3, 4, 5]));