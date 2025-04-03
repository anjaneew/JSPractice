// let time = 20;
//
// if(time < 12){
//     console.log("good morning!");
// }
// else if (time === 12){
//     console.log("It's Midday!");
// }
// else {
//     console.log("good evening!");
// }
//
// let isStudent = true;
//
// if (isStudent){
//     console.log("You are a student");
// }
// else {
//     console.log("You are not a student");
// }
//
// let age = 25;
// let hasLicense = false;
//
// if (age > 16) {
//     console.log("You are old enough to drive");
//     if(hasLicense){
//         console.log(" great! You can drive");
//     } else {
//         console.log("but you can't drive without a license");
//     }
// }
// else {
//     console.log("You need to be 16 to get the license");
// }

const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age < 0){
        resultElement.textContent = `Please Enter a valid age to continue`;
    }
    else if (age === 0){
        resultElement.textContent = `No babies allowed`;
    }
    else if (age < 18) {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
    else {
        resultElement.textContent = `You can enter the site`;
    }
}



