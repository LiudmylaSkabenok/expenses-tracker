
const accountTracker = {
    name: "Liudmyla",
    expenses: [],
    income: [],

    addExpenses: function (amountOfMoney1) {
    this.expenses.push(amountOfMoney1);
    //do we need to return here smth and do we need to call the function;
    },

    addIncome: function (amountOfMoney2) {
    this.income.push(amountOfMoney2);
    //do we need to return here smth and do we need to call the function;
    },

    listAllExpenses: function () {
    for (let i = 0; i < this.expenses.length; i++);
    //this.expenses.forEach(function() => console.log(element));
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   // code from the site above do we need to return here smth and do we need to call the function;
    },

    getSummary: function () {
     return `Total Income: ${this.addIncome}
     Total Expenses: ${this.listAllExpenses}
     Total balance:  ${this.addIncome} - ${this.listAllExpenses}`;
    },
    
}
    console.log(accountTracker.getSummary());
    


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