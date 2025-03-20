const prompt = require('prompt-sync')();



function incomeSources() {

    let regularIncome = 0; 
    let regularExpenses = 0; 

    let income = Number(prompt('Please enter your monthly income: '));
    let otherMonthlyIncome = prompt('Do you have any other monthly income (yes/no): ');

    if (otherMonthlyIncome.toLowerCase() === 'yes') { // Added toLowerCase for case-insensitive comparison
        let otherIncome = Number(prompt('Please enter the amount of other monthly income: '));
        return regularIncome + income + otherIncome;
    } else {
        return regularIncome + income;
    }
}

const fixMonthlyExpense = {
    rent: 3500,
    electricity: 1000,
    houseEquity: 1800,
    personalLoans: 1000,
    loans: 4780,

    totalDebit: function() {
        return this.rent + this.electricity + this.houseEquity + this.personalLoans + this.loans;
    }
};

function monthlyExpenses() {
  const fixExpenses = fixMonthlyExpense.totalDebit(); // Corrected object name
  let currentExpense = true;
  let expenseList = [];

  while (currentExpense) {
    const userInput = prompt('Enter Expense for the month: ');

    if (userInput.toLowerCase() === "done") {
      currentExpense = false; // Set the flag to exit the loop
      console.log("Exiting loop.");
      expenseList.push(userInput);
      console.log(expenseList);
    } else {
      // Process the user's input here
      expenseList.push(userInput);
      console.log
      // You can add more logic here based on the user's input
    }
  }
}

let result = monthlyExpenses();
console.log(`Monthly Expenses: ${result}`); // Removed extra comma

// Example usage:
const totalExpenses = fixMonthlyExpense.totalDebit();
console.log(totalExpenses);
console.log(`Total Income: ${incomeSources()}`); // Added template literal.
console.log(expenseList)
