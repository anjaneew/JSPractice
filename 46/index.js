//Destructuring
// extract values and assign to variables
// [] - array
// {} - object

//Example 1
console.log("Example 1");
console.log("Swap the value of two variables");

let a = 3;
let b = 5;

console.log(`a is ${a}`);//a is 3
console.log(`b is ${b}`);//b is 5

[a, b] = [b, a];

console.log(`a is ${a}`);//a is 5
console.log(`b is ${b}`);//b is 3

console.log("_____________________");

//Example 2
console.log("Example 2");
console.log("Swap two elements in an array");

let fruits = ['🍇', '🍉', '🍎', '🍍', '🍊',];
console.log(fruits); //['🍇', '🍉', '🍎', '🍍', '🍊']

[fruits[0], fruits[2]] = [fruits[2], fruits[0]];

console.log(fruits);//['🍎', '🍉', '🍇', '🍍', '🍊']
console.log("_____________________");

//Example 3
console.log("Example 3");
console.log("Assign array elements to variables");
fruits = ['🍎', '🍉', '🍇', '🍍', '🍊'];
const [apple, watermelon, grapes,...others] = fruits;

console.log(`an apple: ${apple}, a watermelon: ${watermelon} some grapes: ${grapes} and other fruits: ${others} .`);

console.log("_____________________");

//Example 4
console.log("Example 4");
console.log("Extract values from objects");

// const person1 = {
//     firstName: "Knight",
//     lastName: "Rider",
//     age: 30,
//     job: "driver",
// }

const person2 = {
    firstName: "Robin",
    lastName: "Hood",
    age: 30,
}

// console.log(person1); //as the object
// const {firstName, lastName, age, job} = person1;

console.log(person2); //as the object
const {firstName, lastName, age, job = "Unemployed"} = person2;

//as variables
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log("_____________________");

//Example 5
console.log("Example 5");
console.log("Destructuring in function parameters");

function displayPerson({myName, myLastName, myAge, myJob="unemployed"}){
    console.log(`name: ${myName}  ${myLastName} age: ${myAge} employment: ${myJob}.`);
}

const person1 = {
    myName: "Knight",
    myLastName: "Rider",
    myAge: 30,
    // myJob: "driver",
}

displayPerson(person1);

console.log("_____________________");
