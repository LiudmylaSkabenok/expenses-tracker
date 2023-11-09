const accountTracker = {
    name: "Liudmyla",
    expenses: [],
    income: [],
  
    addExpenses: function () {
      const expensesDesc = prompt("Describe your expense");

      const amountOfMoney2 = parseFloat(prompt("How much was your expense?"));

      this.expenses.push({ expensesDesc, amountOfMoney2 });

      //console.log(this.expenses);

      menu();
    },
  
    addIncome: function () {
      const incomeDesc = prompt("Describe your income?");
      // paste the code from your menu function choice 1
      const amountOfMoney1 = parseFloat(prompt("How much was your income?"));
      // for saving only a value not an object
      //this.income.push(amountOfMoney1);
  
      // saved income as an object which has two properties one for dexription and one for amount
      this.income.push({ incomeDesc, amountOfMoney1 });
  
      //console.log(this.income);
      // get the menu back
      menu();
    },
    
    listAllIncomes: function () {
        //for (let i = 0; i < this.expenses.length; i++) {
        //   this.expenses.push(this.listAllExpenses[i]);
        //}
    
        /* this.expenses.forEach(function () {
          this.expenses.push();
        }); */
        let message = "";
        // list incomes for now and you can change later
        this.income.forEach(function (incomeObject) {
          // we want to build our message in here
          message +=
            "Income description: " +
            incomeObject.incomeDesc +
            " Income amount: " +
            incomeObject.amountOfMoney1 +
            "\n";
        });
        // but the alert outside so we only show ONE alert with all incomes
        alert(message);
    
        menu();
    },
  
    listAllExpenses: function () {
    
    let message = "";
    
    this.expenses.forEach(function (expensesObject) {
      
      message +=
        "Expense description: " +
        expensesObject.expensesDesc +
        "Expense amount: " +
        expensesObject.amountOfMoney2 +
        "\n";
    });
    
    alert(message);

    menu();

    
  },

  getSummary: function () {
   
        let totalIncome = 0;
        let totalExpenses = 0;
      
        this.income.forEach(function (incomeObject) {
          totalIncome += incomeObject.amountOfMoney1;
        });

        this.expenses.forEach(function (expensesObject) {
          totalExpenses += expensesObject.amountOfMoney2;
        });
      
        const balance = totalIncome - totalExpenses;
      
        alert(
        `Total Income: ${totalIncome}
        Total Expenses: ${totalExpenses}
        Total Balance: ${balance}`);
      },
};
menu();
//prompt() is a built-in function that is used to display a dialog box that asks the user to input some text.
//This pop-up box will appear and takes user input before entering the web page. It waits until the user enters
//any value in the text box or we can also cancel the dialog box.
//The parseFloat() function is used to accept a string and convert it into a floating-point number.
//If the input string does not contain a numeral value or If the first character of the string is not a number
//then it returns NaN i.e, not a number.

function menu() {
    let choice = parseFloat(
      prompt(
        `Please select from the menu:
                      1) Add income
                      2) Add expenses
                      3) List all incomes
                      4) List all expences
                      5) See your total balance
                      6) Exit`
      )
    );
    //  if ((choice = 1))
    // ((choice = 1))
  
    // in JS you can == or ===
    // BUT always use ===
    // "1" === 1 = false
  
    if (choice === 1) {
      //const amountOfMoney1 = parseFloat(prompt("How much was your income?"));
      accountTracker.addIncome();
    } else if (choice === 2) {
        accountTracker.addExpenses();
    } else if (choice === 3) {
        accountTracker.listAllIncomes();
    } else if (choice === 4) {
      accountTracker.listAllExpenses();
    } else if (choice === 5) {
      accountTracker.getSummary();
    } else if (choice === 6) {
        return;
    } else {
        alert("Invalid choice. Please choose a valid option.");
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
        case 5:
            return;
            break;
        default:
            alert('Invalid choice. Please choose a valid option.');
     }*/
}

menu();

// For me it doesn't matter what statement to use "switch" or "if/else" only if we use "if/else' we need to use let (not const)
//variable
// I have added listOfIncomes to the menu and Exit
