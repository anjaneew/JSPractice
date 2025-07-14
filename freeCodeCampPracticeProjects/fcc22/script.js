//Project 22 Cash Register 

const sale = document.getElementById("purchase-btn");
const change = document.getElementById("change-due");
const cash = document.getElementById("cash");

const messages = ["Status: INSUFFICIENT_FUNDS", "Status: CLOSED", "Status: OPEN"];
let price = 19.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]; // cash-in-drawer

let currencyUnits = [
  ['PENNY', .01],
  ['NICKEL', .05],
  ['DIME', .1],
  ['QUARTER', .25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
]; 


sale.addEventListener("click", ()=>{
    
    const cashValue = parseFloat(cash.value);
    console.log(cashValue);
    const changeDue = cashValue - price; 

    if(cashValue < price){
        alert("Customer does not have enough money to purchase the item");
        console.log("sale");
    }

    if(cashValue === price){
      change.innerText = "No change due - customer paid with exact cash"; 
    }
});

const getChange = (changeDue, cid) =>{
  //                          ignore name - use amount        initial value
  let totalCid = parseFloat(cid.reduce((sum, [_, amount])=> sum + amount, 0).toFixed(2));
  console.log(totalCid);
  if(totalCid < changeDue){
    //  console.log("INSUFFICIENT_FUNDS");
    return {status: "INSUFFICIENT_FUNDS", change: []};
   
  }
}; //end of getChange()

//console.log(getChange(400, cid));
//22.45 min











// const calculate = () => {

//     const cash = Number(document.getElementById("cash").value);
//     console.log(cash);

//     let index;

//     if(price > cash){
//         index = 0;
//         console.log(index);
//         return;
//     }
//     else if(price === cash){
//         index = 1;
//         console.log(index);
//         return;
//     }
//     else{
//         index = 2;
//         console.log(index);
//         const change = price - cash;
//         console.log(change);
//         giveBalance(change);
//         display(index);
//         return;
//     }

// };

// const giveBalance = () => {
//     const change = 10

//     for(let i = 0; i > billsAndCoins.length ; i++){
//         if(change < billsAndCoins[i].key){
            
//         }
//     }

// };

// const display = (index) => {
//     changeDue.innerHTML += `${messages[index]}`;
// };


