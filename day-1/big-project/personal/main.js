const prompt = require('prompt-sync')();

// let monthlyIncome = 0;

// function calculateTotalIncome() {
//     let monthlyIncome = 0;
//     let income = Number(prompt('Enter monthly income: '));

//     if (Number.isNaN(income)) {
//         console.log('Please enter a valid amount.');
//         return 0;
//     } else {
//         monthlyIncome += income;
//         let otherIncome = prompt('Do you have any other income (yes/no): ');

//         if (otherIncome.toLowerCase() === 'yes') {
//             let extraIncome = Number(prompt('Enter additional income: '));
//             if (Number.isNaN(extraIncome)) {
//                 console.log('Enter a valid amount.');
//                 return monthlyIncome; //return the current monthly income.
//             } else {
//                 monthlyIncome += extraIncome;
//             }
//         }
//     }
//     return monthlyIncome;
// }

// let result = calculateTotalIncome();
// console.log(`Total income: $${result}`);



// const fixMonthlyExpense = {
//   rent: 3500,
//   electricity: 1000,
//   houseEquity: 1800,
//   personalLoans: 1000,
//   loans: 4780,

//   deductFixedMonthlyExpenses: function() {
//       for (const expense in this) {
//           if (typeof this[expense] === 'number') { // Check if it's a number (expense value)
//               monthlyIncome -= this[expense];
//               console.log(`Deducted ${expense}: $${this[expense]}`);
//           }
//       }
//       console.log(`Remaining income: $${monthlyIncome}`);
//   }
// };

// fixMonthlyExpense.deductFixedMonthlyExpenses();


function monthlyExpenses() {
    let monthlyExpenses = 0; // Corrected typo
    while (true) {
        let input = prompt('Enter a monthly expense (or "done" to finish): ');
        if (input.toLowerCase() === 'done') {
            break; // Exit the loop
        }
        let monthlyExpense = Number(input);
        if (isNaN(monthlyExpense)) {
            console.log('Please enter a monthly expense in numerical format');
        } else {
            monthlyExpenses += monthlyExpense;
        }
    }
    return monthlyExpenses;
}

let result = monthlyExpenses();
console.log(result);