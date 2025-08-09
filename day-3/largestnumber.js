
function find(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [3, 5, 7, 2, 8];
console.log(find(numbers)); 

