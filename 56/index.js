//Compound Interest Calculator

//my version (alone and proud) - the interest here is simple interest
// function calculate(){
//     const principal = Number(document.getElementById("principal").value);
//     const rate = Number(document.getElementById("rate").value);
//     const years = Number(document.getElementById("years").value);
//     let calculate = principal * (rate/100) * years;
//     calculate += principal;
//     document.getElementById("total-amount").textContent = calculate;
// }

function calculate(){

    //inputs
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const totalAmount = document.getElementById("total-amount");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value/100);
    let years = Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }

    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }


    // the interest here is compound interest
    const result = principal * Math.pow((1 + rate), years) ;
    totalAmount.textContent = result.toLocaleString("lv-LV",{style:"currency", currency:"EUR"});
}

