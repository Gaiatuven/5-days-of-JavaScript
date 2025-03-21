const prompt = require("prompt-sync")();

let monthlyIncome = 0;

function calculateTotalIncome() {
  let monthlyIncome = 0;
  let income = Number(prompt("Enter monthly income: "));

  if (Number.isNaN(income)) {
    console.log("Please enter a valid amount.");
    return 0;
  } else {
    monthlyIncome += income;
    let otherIncome = prompt("Do you have any other income (yes/no): ");

    if (otherIncome.toLowerCase() === "yes") {
      let extraIncome = Number(prompt("Enter additional income: "));
      if (Number.isNaN(extraIncome)) {
        console.log("Enter a valid amount.");
        return monthlyIncome; //return the current monthly income.
      } else {
        monthlyIncome += extraIncome;
      }
    }
  }
  return monthlyIncome;
}

const fixMonthlyExpense = {
  rent: 3500,
  electricity: 1000,
  houseEquity: 1800,
  personalLoans: 1000,
  loans: 4780,
};

const calculateTotalFixedExpenses = (expenses) => {
  let total = 0;
  for (let expense in expenses) {
    if (typeof expenses[expense] === "number") {
      total += expenses[expense];
    }
  }
  return total;
};

function monthlyExpenses() {
  let monthlyExpenses = 0; // Corrected typo
  while (true) {
    let input = prompt('Enter a monthly expense (or "done" to finish): ');
    if (input.toLowerCase() === "done") {
      break; // Exit the loop
    }
    let monthlyExpense = Number(input);
    if (isNaN(monthlyExpense)) {
      console.log("Please enter a monthly expense in numerical format");
    } else {
      monthlyExpenses += monthlyExpense;
    }
  }
  return monthlyExpenses;
}

function budget() {
  console.log(' ---------- Monthly Budget ---------------');
  let income = calculateTotalIncome();
  console.log(`Total income: $${income.toFixed(2)}`);

  const fixedExpenses = calculateTotalFixedExpenses(fixMonthlyExpense);
  console.log(`Total Fixed monthly expenses: $${fixedExpenses.toFixed(2)}`);

  let remainingBalance = income - fixedExpenses;
  console.log(`Remaining balance: $${remainingBalance.toFixed(2)} before monthly expenses`);

  let variableExpenses = monthlyExpenses();
  console.log(`Total monthly expenses: $${variableExpenses.toFixed(2)}`);

  let moneyLeft = income - fixedExpenses - variableExpenses;
  console.log(`Money left: $${moneyLeft.toFixed(2)}`);
}

budget();