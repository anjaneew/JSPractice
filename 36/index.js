// Function Expressions - function as a value or a variable

//Example of a function declaration
//function declaration = a block of a reusable code


function hello(){
    console.log("hello. This is a function declaration");
}

hello();

//function expression Example 1
// function expression as a variable

const greet = function(){
    console.log("HELLO ...! This is a function expression");
}

greet();

//function expression Example 2
// function expression as a value

setTimeout(hello, 3000);

setTimeout(function(){
    console.log("this is a function expression put as an argument.");
}, 3000);

//function expression Example 3

const numbers = [1, 2, 3, 4, 5, 6];

// function squares(element){
//     return Math.pow(element, 2);
// }

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubes);

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = numbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(oddNumbers);

const total = numbers.reduce(function(accumulator , element){
    return accumulator + element;
});
console.log(total);