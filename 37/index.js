//Arrow Functions
// for simple functions you use only once
// (parameters) => some code

//The syntax - Example 1
//function declaration

function hello(){
    console.log("hello");
}

hello();

//function expression

const greet = function(){
    console.log("hello");
}

greet();

//arrow function

const greeting = () => console.log("Hello!");

greeting();

//____________________________________
//Example 2
// arrow function with parameters

const greetings = (name, age) => {console.log(`Hello! ${name}`)
                                        console.log(`You are ${age} years old`)};

greetings("BroCode", 25);

//Example 3
//version 1 function declaration
setTimeout(goodMorning, 100);

function goodMorning(){
    console.log("Hi!");
}

//version 2 function expression
setTimeout(function(){
    console.log("Good morning!");
}, 150);

//version 3 arrow function
setTimeout(() => console.log("How are you? "), 180) ;

// Example 4 Math functions

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const evens  = numbers.filter((element) => element % 2 === 0);
const  odds= numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(numbers);
console.log(squares);
console.log(cubes);
console.log(evens);
console.log(odds);
console.log(total);

