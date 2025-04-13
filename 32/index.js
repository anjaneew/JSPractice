//forEach() Method
//element, index, array

//Example 5 Taking up cz its easy

let fruits = ['🍎','🥭','🍍','🍌','🍐','🍏','🍊','🍉','🍇'];

fruits.forEach(display);

function display(element){
    console.log(element);
}

console.log("-------------------");
//----------------------------------------
let numbers = [1, 2, 3, 4, 5];

//Example 1
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2 ;
// }


//Example 2
// numbers.forEach(triple);
// numbers.forEach(display);
//
// function triple(element, index, array){
//     array[index] = element * 3 ;
// }
//


// //Example 3
// numbers.forEach(square);
// numbers.forEach(display);
//
// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }
//

//Example 4
numbers.forEach(cube);
numbers.forEach(display);
console.log("-------------------");
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}


//---------------------------------------
//Example 6

let fruitNames = ["apple", "banana", "watermelon", "grapes" ];

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

fruitNames.forEach(upperCase);
fruitNames.forEach(display);
console.log("-------------------");

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

fruitNames.forEach(lowerCase);
fruitNames.forEach(display);
console.log("-------------------");

function capitalize (element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruitNames.forEach(capitalize);
fruitNames.forEach(display);
console.log("-------------------");