// function maxValue(a, b) {
//     return Math.max(a, b);
// }

// let result = maxValue(2, 6);
// console.log(result);

function maxValueAmount(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('Enter a number');
    } else {
        if (a < b) {
            console.log('b'); // Corrected to print 'b' when b is larger
        } else {
            console.log('a'); // Corrected to print 'a' when a is larger or equal
        }
    }
}

maxValueAmount(10, 8); // Output: a
maxValueAmount(5, 12); // Output: b
maxValueAmount('hello', 5); // Output: Enter a number
maxValueAmount(3, 'world'); // Output: Enter a number
maxValueAmount('test', 'case'); // Output: Enter a number