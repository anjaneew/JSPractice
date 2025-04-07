// //String Slicing
// let myName = "Robert Hungtingdon";
//
// console.log(myName);
//
// let length = myName.length;
// console.log(length);
//
// let wordBoundary = myName.indexOf(" ");
// console.log(wordBoundary);
//
// let firstName = myName.slice(0,wordBoundary);
// console.log(`Your first name is: ${firstName}`);
//
// let lastName = myName.slice((wordBoundary+1), length);
// console.log(`Your last name is: ${lastName}`);


const myName = document.getElementById("myName");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let fullName;
let wordBoundary;
let firstName;
let lastName;


mySubmit.onclick = function(){

    fullName = myName.value;
    wordBoundary = fullName.indexOf(" ");

    firstName = fullName.slice(0,wordBoundary);
    lastName = fullName.slice(wordBoundary+1);
    result.textContent = `Your full name is ${fullName}.  
    Your first name is ${firstName}. Your first name is ${lastName}.` ;
}


