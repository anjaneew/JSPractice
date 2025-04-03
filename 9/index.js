// //Random function
//
// let randomNum = Math.random();
// console.log(randomNum); // random number between 0 -1
//
// //Random dice
//
// randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum); // random number between 0 - 6
//
//
// //Random range 50-100
//
// randomNum = Math.floor(Math.random() * (100 - 50)) + 50;
// console.log(randomNum); // random number between 50 - 100
//
// const max = 100;
// const min = 50;
// randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum); // random number between 50 - 100


const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}
