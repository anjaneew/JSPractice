// .map() - Map method saves into a new array

//Example 1
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(squares); //[1, 4, 9, 16, 25]

const cubes = numbers.map(cube);
console.log(cubes); //[1, 8, 27, 64, 125]

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

//Example 2

const students = ["booruwa", "gona", "mayina"];
const studentsUpperCase = students.map(upperCase);
console.log(studentsUpperCase);

const studentsLowerCase = studentsUpperCase.map(lowerCase);
console.log(studentsLowerCase);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

// Example 3

const dates = ["1/10/2024", "2/20/2025", "3/30/2026" ];
const formattedDates = dates.map(formatDates);
console.log(dates);
console.log(formattedDates); //['2024-1-10', '2025-2-20', '2026-3-30']

function formatDates(element){
    const parts = element.split("/");
    return `${parts[2]}-${parts[0]}-${parts[1]}`
}