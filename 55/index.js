//.toLocaleString("locale", {style:"currency", currency:"USD"})

let number1 = 1234567.89;
let number2 = 1234567.89;
let number3 = 1234567.89;
let number4 = 1234567.89;
let number5 = 1234567.89;
let number6 = 1234567.89;
let number7 = 1234567.89;
let number8 = 1234567.89;
let number9 = 1234567.89;

//locale
number1 = number1.toLocaleString("en-US");//1,234,567.89
number2 = number2.toLocaleString("de-DE");//1.234.567,89
number3 = number3.toLocaleString("hi-IN");//12,34,567.89
number4 = number4.toLocaleString("si-LK");//1,234,567.89
number5 = number5.toLocaleString(undefined);//1,234,567.89

//locale + currency
number6 = number6.toLocaleString("en-US", {style:"currency", currency:"USD"});
number7 = number7.toLocaleString("hi-IN", {style:"currency", currency:"INR"});
number8 = number8.toLocaleString("de-DE",{style:"currency", currency:"EUR"});
number9 = number9.toLocaleString("si-LK", {style:"currency", currency:"LKR"});

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);
console.log(number8);
console.log(number9);