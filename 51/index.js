//Date Object

//Example 1 Today's Date
console.log("Example 1 Today's Date");
const date1 = new Date();
console.log(date1);
console.log("_________________");

//Example 2 customized date
console.log("Example 2 customized date");
console.log("Order: Date(year, month, day, minute, second, ms)");
const date2 = new Date(1987,0,1,12,34,5,52);
console.log(date2);
console.log("_________________");

//Example 3 using String
console.log("Example 3 using String");
const date3 = new Date("2024-01-24T12:05:08Z");
console.log(date3);
console.log("_________________");

//Example 4
console.log("Example 4 milliseconds since epic -start of time in 1969");
const date4 = new Date(1745080000000);
console.log(date4);
console.log("_________________");

//Example 5
console.log("Example 5 extracting individual values");
const date5 = new Date();
const year = date5.getFullYear();
const month = date5.getMonth();
const date = date5.getDate();
const day = date5.getDay();
const hour = date5.getHours();
const minutes = date5.getMinutes();
const seconds = date5.getSeconds();
const milliSeconds = date5.getMilliseconds();

console.log(`Today's date is ${date5}`);
console.log(`It is ${day}`);//array - 0 Sunday 1 Monday
console.log(`Year: ${year} Month: ${month} Date: ${date} Time: ${hour} : ${minutes} : ${seconds} : ${milliSeconds}`);
console.log("_________________");

//Example 6
console.log("Example 6 setting individual values");
const date6 = new Date();

date6.setFullYear(2009);
date6.setMonth(4);
date6.setDate(18);
date6.setHours(3);
date6.setMinutes(5);
date6.setSeconds(6);
date6.setMilliseconds(45);

console.log(`The victory day is ${date6}`);
console.log("_________________");

//Example 7
console.log("Example 7 Compare the dates");
const arrivalDate = new Date("2022-08-22");
const date8 = new Date();

if(date8 > arrivalDate){
    console.log("You have arrived!")
}
console.log("_________________");