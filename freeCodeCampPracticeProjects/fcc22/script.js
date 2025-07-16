//Project 22 Cash Register 
let price = 19.5;
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

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

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

const messages = ["No change due - customer paid with exact cash", "Status: INSUFFICIENT_FUNDS", "Status: CLOSED", "Status: OPEN"];

const sale = () => {
  const cash = Number(cashInput.value);
  // const change = Number(cash - price).toFixed(2);
  const change = Number(cash - price);

  if(cash < price){
    alert("Customer does not have enough money to purchase the item");
    return
  }
  else if(cash === price){
    display(0);
  }
  else{
    calculate(change);
  }
};//end of sale

//---------------Main calculate method--------
const calculate = (change) => {
  const totalCid = calculateTotalHelper();//✔️
  if(totalCid < change){
    display(1);//✔️
  }


  calculateBalance(change, totalCid);


};//end of calculate
    
//-------------------Helper Methods -----------------

const calculateTotalHelper = () => {
  //                              ⬇️skipped first element. 
  return cid.reduce((accumilator, [, currentValue])=> 
    accumilator + currentValue, 0).toFixed(2);

};//end of calculateTotalHelper

const calculateBalance = (change, totalCid) => {
  let result = []; //final answers
  let remaining = change;//ithuru

  for(let i = currencyUnits.length - 1; i >= 0; i--){
    let unitName = currencyUnits[i][0];
    let unitValue = currencyUnits[i][1];
    let unitAvailable = cid[i][1];
    let unitUsed = 0;

    while(remaining >= unitValue && unitAvailable >= unitValue){
      remaining = Number((remaining - unitValue).toFixed(2));
      unitAvailable = Number((unitAvailable - unitValue).toFixed(2));
      unitUsed = Number((unitUsed + unitValue).toFixed(2));
    }

    if(unitUsed > 0){
      result.push([unitName, unitUsed]);
    }
  }//end of for

  console.log(result);

  if(remaining > 0){
    display(1);
    return;
  }

  let resultTotal = Number(result.reduce((accumilator, [, amount])=> accumilator += amount, 0)).toFixed(2);
  // console.log(resultTotal);

  if(resultTotal === totalCid){
    let msg = `Status: CLOSED`;
    result.forEach(([unit, amount])=>{
        msg += `\n ${unit}: $${Number(amount).toFixed(2)}`;
    });
    changeDue.innerText = msg;
    console.log(msg);
  } 
  else{
    let msg = `Status: OPEN`;
    result.forEach(([unit, amount])=>{
        msg += `\n ${unit}: $${Number(amount).toFixed(2)}`;
    });
    changeDue.innerText = msg;
    console.log(msg);
  }

};//end of calculateBalance

const display = (index) => {
  changeDue.innerText = messages[index];//✔️
};//end of display

purchaseBtn.addEventListener("click", sale);

    