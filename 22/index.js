//Funtions are easy

// function happyBirthday(){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear you!");
//     console.log("Happy Birthday to you!");
// }
//
// happyBirthday();

function happyBirthday( username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old.`);
}

happyBirthday("Amara", 5);

//example 3
function add(x,y){
    return x + y;
}
console.log(add(3,5));

//example 4
function subtract(x,y){
    return x - y;
}
console.log(subtract(3,5));

//example 5
function multiply(x,y){
    return x * y;
}
console.log(multiply(3,5));

//example 6
function divide(x,y){
    return x / y;
}
console.log(divide(3,5));

//example 7
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// console.log(isEven(11));


//example 8 (7 version II)
function isEven(number){
    return number % 2 === 0 ? true : false;
}

console.log(isEven(20));

//example 9

function isValidEmail(email){

    // Version 1  if-else statement
    // if(email.includes("@")){
    //     return true;
    // }
    // else {
    //     return false;
    // }

    // Version 2  Ternary operator
    // return email.includes("@") ? true : false;

    // Version 3 #cleanest
    return email.includes("@")
}

console.log(isValidEmail("Brolindalanga"));