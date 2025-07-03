//bankAccount App -  closures with module pattern
const newUserInput = document.getElementById("new-user-input");
const usernameInput = document.getElementById("username-input");
const amountInput = document.getElementById("amount-input");
const createBtn = document.getElementById("create-btn");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const display = document.getElementById("display");

const transactions = () => {
    let balance = 0.00;
    let username;
    let userAccounts = [];
    display.textContent = "";
    

    const createAccount = () => {
        username = newUserInput.value; 
        display.textContent = `New user registered`;
        newUserInput.value = "";
        userAccounts.push({holder: username, balance: 0.00})
    };

    const deposit = () => {
        username = usernameInput.value; 
        if(userAccounts.holder.includes(username)){
            let amount = parseFloat(amountInput.value);
            balance += amount;
            console.log(`${username} has deposited ${amount}. 
                \n The new balance is ${balance}`);
            display.textContent =    `${username} has deposited ${amount}. 
            \n The new balance is ${balance}`; 
        }
        else{
            display.textContent = "Account not found";
        }
        
        usernameInput.value = "";
        amountInput.value = "";
    };

    const withdraw = () => {
        username = usernameInput.value;
        let amount = parseFloat(amountInput.value);

        if(userAccounts.holder.includes(username)){
            if( amount < balance){
                balance -= amount;
                console.log(`${username} has withdrawn ${amount}. 
                \n The new balance is ${balance}`);
                display.textContent =  `${username} has withdrawn ${amount}. 
                \n The new balance is ${balance}`;
                
            }
            else{
                console.log(`${username} has insufficient fonds for this transaction.\n The account balance available is ${balance}`);
                display.textContent = `${username} has insufficient fonds for this transaction.\n The account balance available is ${balance}`;
            }
        }        
        usernameInput.value = "";
        amountInput.value = "";
        
    };

    return {createAccount, deposit, withdraw};

};

//calling the factory function
const newAccount = transactions();

createBtn.addEventListener("click", newAccount.createAccount);
depositBtn.addEventListener("click", newAccount.deposit);
withdrawBtn.addEventListener("click", newAccount.withdraw);


//version 1

// const transactions = (username) => {
//     let balance = 0.00;

//     const deposit = (amount) => {
        
//         balance += amount;
//         console.log(`${username} has deposited ${amount}. 
//             \n The new balance is ${balance}`);
//     };

//     const withdraw = (amount) => {
//         if( amount < balance){
//             balance -= amount;
//             console.log(`${username} has withdrawn ${amount}. 
//             \n The new balance is ${balance}`);
//         }
//         else{
//             console.log(`${username} has insufficient fonds for this transaction.\n The account balance available is ${balance}`);
//         }
        
//     };

//     return {deposit, withdraw};

// };

// const account1 = transactions("Amara");
// const account2 = transactions("Pandu");

// account1.deposit(200.00);
// account1.deposit(400.00);
// account2.deposit(2000.20);
// account1.withdraw(500.00);
// account2.withdraw(1200.50);

