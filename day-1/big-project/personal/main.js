const prompt = require('prompt-sync')();

function calculateTotalIncome() {
    let monthlyIncome = 0;
    let income = Number(prompt('Enter monthly income: '));

    if (Number.isNaN(income)) {
        console.log('Please enter a valid amount.');
        return 0;
    } else {
        monthlyIncome += income;
        let otherIncome = prompt('Do you have any other income (yes/no): ');

        if (otherIncome.toLowerCase() === 'yes') {
            let extraIncome = Number(prompt('Enter additional income: '));
            if (Number.isNaN(extraIncome)) {
                console.log('Enter a valid amount.');
                return monthlyIncome; //return the current monthly income.
            } else {
                monthlyIncome += extraIncome;
            }
        }
    }
    return monthlyIncome;
}

let result = calculateTotalIncome();
console.log(`Total income: $${result}`);

// const fixMonthlyExpense = {
//     rent: 3500,
//     electricity: 1000,
//     houseEquity: 1800,
//     personalLoans: 1000,
//     loans: 4780,

//     deductFixedMonthlyExpenses: function() {
//         for (const expense in fixMonthlyExpense) {

//         }
//     }
// };

// function monthlyExpenses() {
//   const fixExpenses = fixMonthlyExpense.totalDebit(); // Corrected object name
//   let currentExpense = true;
//   let expenseList = [];

//   while (currentExpense) {
//     const userInput = prompt('Enter Expense for the month: ');

//     if (userInput.toLowerCase() === "done") {
//       currentExpense = false; // Set the flag to exit the loop
//       console.log("Exiting loop.");
//       expenseList.push(userInput);
//       console.log(expenseList);
//     } else {
//       // Process the user's input here
//       expenseList.push(userInput);
//       console.log
//       // You can add more logic here based on the user's input
//     }
//   }
// }

// let result = monthlyExpenses();
// console.log(`Monthly Expenses: ${result}`); // Removed extra comma

// // Example usage:
// const totalExpenses = fixMonthlyExpense.totalDebit();
// console.log(totalExpenses);
// console.log(`Total Income: ${incomeSources()}`); // Added template literal.
// console.log(expenseList)
