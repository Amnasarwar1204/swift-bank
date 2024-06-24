#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
{
    let userInfo = await inquirer.prompt([{
            name: "userFrstName",
            message: "Enter your name",
            type: "input"
        }, {
            name: "userLastName",
            message: "Enter your last name",
            type: "input"
        },
        {
            name: "userAccount",
            message: "Enter your bank account number",
            type: "input"
        }
    ]);
    class Customer {
        userFrstName;
        userLastName;
        account;
        constructor(userFrstName, userLastName, account) {
            this.userFrstName = userFrstName;
            this.userLastName = userLastName;
            this.account = account;
        }
        method() {
            return console.log(chalk.hex('#FF1493')(`Welcome Mr/Miss ${this.userFrstName.toLocaleUpperCase() + " " + this.userLastName.toLocaleUpperCase()}`));
        }
    }
    let customer = new Customer(userInfo.userFrstName, userInfo.userLastName, userInfo.userAccount);
    customer.method();
    class BankAccount {
        AccountBalance;
        constructor() {
            this.AccountBalance = Math.floor(Math.random() * 100000);
        }
        showBalance() { console.log(chalk.rgb(255, 69, 0)(`your current Balance is ${this.AccountBalance}`)); }
        debitAmount(amount) {
            if (amount <= 0) {
                console.log(chalk.hex('#967bb6')("The amount you entered is wrong!"));
            }
            if (this.AccountBalance > amount) {
                this.AccountBalance -= amount;
                console.log(chalk.hex('#967bb6')(`Transiation successfull new account balance is ${this.AccountBalance}`));
            }
            else {
                "you dont have enough money for this transiation!";
            }
        }
        creditAmount(amount) {
            if (amount > 0) {
                this.AccountBalance += amount;
                console.log(chalk.hex('#967bb6')(`Your account has been Credit successfully ${this.AccountBalance}`));
            }
        }
    }
    let Bankaccount = new BankAccount();
    Bankaccount.showBalance();
    while (true) {
        let select = await inquirer.prompt([{
                name: "select1",
                type: "list",
                message: "plz select what u want",
                choices: ["debit", "credit", "Check Balance", "Exit"]
            }]);
        if (select.select1 === "debit") {
            let amount = await inquirer.prompt({
                name: "enteramount",
                type: "input",
                message: "Enter amount to debit"
            });
            Bankaccount.debitAmount(amount.enteramount);
        }
        else if (select.select1 === "credit") {
            let amount = await inquirer.prompt({
                name: "enterAmount",
                type: "input",
                message: "Enter amount to credit"
            });
            let amountt = parseFloat(amount.enterAmount);
            Bankaccount.creditAmount(amountt);
        }
        else if (select.select1 === "Check Balance") {
            Bankaccount.showBalance();
        }
        else if (select.select1 === "Exit") {
            console.log(chalk.rgb(255, 69, 0)("Exiting..."));
            break;
        }
    }
}
