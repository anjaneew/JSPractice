let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashInput = document.getElementById("cash");
const btn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

const units = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

btn.addEventListener("click", () => {
  const cash = Number(cashInput.value);
  const change = Number((cash - price).toFixed(2));

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }

  let totalCid = Number(
    cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2)
  );

  if (change > totalCid) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let result = [];
  let remaining = change;

  for (let i = units.length - 1; i >= 0; i--) {
    let unitName = units[i][0];
    let unitValue = units[i][1];
    let unitAvailable = cid[i][1];
    let unitUsed = 0;

    while (remaining >= unitValue && unitAvailable >= unitValue) {
      remaining = Number((remaining - unitValue).toFixed(2));
      unitAvailable = Number((unitAvailable - unitValue).toFixed(2));
      unitUsed = Number((unitUsed + unitValue).toFixed(2));
    }

    if (unitUsed > 0) {
      result.push([unitName, unitUsed]);
    }
  }//end of for

  if (remaining > 0) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let resultTotal = Number(result.reduce((sum, [, amt]) => sum + amt, 0).toFixed(2));

  if (resultTotal === totalCid) {
    let msg = "Status: CLOSED";
    result.forEach(([name, amt]) => {
      msg += ` ${name}: $${amt.toFixed(2)}`;
    });
    changeDue.innerText = msg;
  } else {
    let msg = "Status: OPEN";
    result.forEach(([name, amt]) => {
      msg += ` ${name}: $${amt.toFixed(2)}`;
    });
    changeDue.innerText = msg;
  }
});