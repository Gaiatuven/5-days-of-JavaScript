
const balance = 1000;

function depositMoney(amount, balance) {
    let newAmount = amount;
    return balance += newAmount;
}

function withdrawMoney(amount, balance) {
    let withdrawAmount = amount;
    if (withdrawAmount > balance) {
        return balance += withdrawAmount;
    }
}

let newAmountDeposit = depositMoney(100, balance);
console.log(newAmountDeposit)
let withDrawMoney = withdrawMoney(100, balance)
console.log(withDrawMoney)