
const accountTracker = {
    name: "Liudmyla",
    expenses: [],
    income: [],

    addExpenses: function () {
    this.expenses.push();
    },

    addIncome: function () {
    this.income.push();
    },

    listAllExpenses: function () {
    //for (let i = 0; i < 100; i++)
    },

    getSummary: function () {
     const resSummary = this.income - this.listAllExpenses;
    },
}

addExpenses();
addIncome();
listAllExpenses();
getSummary();

console.log(accountTracker);
function menu () {
    const choice = parseFloat(
        prompt (
            `Please select from the menu:
            1) Add income
            2) Add expense
            3) List all your expences
            4) See your total balance`
            )
        );
}
menu();