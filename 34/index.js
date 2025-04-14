//.filter() method
//This will save any elements that marked as true
// from a function into a new array

//Example 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(`Example 1`);
console.log(`The array of numbers are ${numbers}.`);
console.log(`The even numbers are ${evenNums}.`);
console.log(`The odd numbers are ${oddNums}.`);
console.log(`______________`);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

//Example 2

const ages = [12, 13, 18, 18, 16, 17, 55, 24, 64];
const adults = ages.filter(isAdult);
const minors = ages.filter(isMinor);

console.log(`Example 2`);
console.log(`The array of ages are ${ages}.`);
console.log(`The adults are ${adults}.`);
console.log(`The minors are ${minors}.`);
console.log(`______________`);

function isAdult(element){
    return element >= 18;
}

function isMinor(element){
    return element < 18;
}

//Example 3

const words = ["apple", "orange", "banana", "kiwi",
                        "pomegranate", "coconut"];
const shortWords = words.filter(isShort);
const longWords = words.filter(isLong);

console.log(`Example 3`);
console.log(`The array of words are :`);
console.log(words);
console.log(`The short words are :`);
console.log(shortWords);
console.log(`The long words are :`);
console.log(longWords);
console.log(`______________`);


function isShort(element){
    return element.length <= 6;
}

function isLong(element){
    return element.length > 6;
}