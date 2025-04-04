const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const submitResult = document.getElementById("submitResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){

    if(myCheckbox.checked){
        submitResult.textContent = `You are subscribed.`;
    }
    else{
        submitResult.textContent = `You are NOT subscribed.`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `Thank you for your payment via Visa card.`;
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = `Thank you for your payment via Master card.`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `Thank you for your payment via PayPal.`;
    }
    else{
        paymentResult.textContent = `Invalid. A payment method is not selected.`;
    }
}
