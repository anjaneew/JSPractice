//.reduce method

//Example 1
const numbers = [100, 20, 52, 85, 63];
const sumNumbers = numbers.reduce(sum);

console.log(`$${sumNumbers}`);
console.log(`$${sumNumbers.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

//Example 2

const grades = [54, 55, 75, 85, 25];
const maxGrade = grades.reduce(maximum);
const lowestGrade = grades.reduce(minimum);

console.log(`The highest grade is ${maxGrade}.`);
console.log(`The lowest grade is ${lowestGrade}.`);

function maximum(accumulator, element){
    return Math.max(accumulator, element);
}

function minimum(accumulator, element){
    return Math.min(accumulator, element);
}
