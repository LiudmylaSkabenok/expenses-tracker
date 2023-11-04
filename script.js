
const accountTracker = {
    name: "Liudmyla",
    expenses: [],
    income: [],

    addExpenses: function () {
    this.expenses.push();
    //do we need to return here smth and do we need to call the function;
    },

    addIncome: function () {
    this.income.push();
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
    


    //prompt() is a built-in function that is used to display a dialog box that asks the user to input some text.
    //This pop-up box will appear and takes user input before entering the web page. It waits until the user enters 
    //any value in the text box or we can also cancel the dialog box.
    //The parseFloat() function is used to accept a string and convert it into a floating-point number. 
    //If the input string does not contain a numeral value or If the first character of the string is not a number 
    //then it returns NaN i.e, not a number.
    
        function menu () {
            let choice = parseFloat(
                prompt (
                    `Please select from the menu:
                    1) Add income
                    2) Add expenses
                    3) List all expences
                    4) See your total balance`
                    )
                );
        if (choice = 1) {
            const amountOfMoney1 = parseFloat(prompt('How much was your income?')); 
        } else if (choice = 2) {
            const amountOfMoney2 = parseFloat(prompt('How much was your expense?')); 
        } else if (choice = 3) {
            const amountOfMoney3 = accountTracker.listAllExpenses;
        } else if (choice = 4) {
            const amountOfMoney4 = accountTracker.getSummary;
        } else {
            alert('Invalid choice. Please choose a valid option.');
        }
     /*switch (choice) {
        case 1 : 
            const amountOfMoney1 = parseFloat(prompt('How much was your income?'));
        // I need to send it to income how?????
             break;
        case 2:
            const amountOfMoney2 = parseFloat(prompt('How much was your expense?'));
            // I need to send it to expenses how????? 
            break;
        case 3: 
            const amountOfMoney3 = accountTracker.listAllExpenses
           // to show all expenses the same as  listAllExpenses
           break;
        case 4:
            // to show the same as getSummary
            break;
        default:
            alert('Invalid choice. Please choose a valid option.');
     }*/
    }

menu();

