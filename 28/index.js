//Rest Parameters
console.log("Rest Parameters - ... - Bundling elements into arrays");

const food1 = "milkrice";
const food2 = "kottu";
const food3 = "kadala";
const food4 = "appa";
const food5 = "cake";

//Example 1
console.log("Example 1");
console.log("Bundeling seperate string elements into an array of strings");

function openFridge (...foods){
    console.log(foods);
}
openFridge(food1,food2,food3,food4,food5); //['milkrice', 'kottu', 'kadala', 'appa', 'cake']


//Example 2
console.log("Example 2");
console.log("Using rest parameters and spread operator");

function listFridge (...foods){
    console.log(...foods); //spread operator > now all are in a list seperated
}
listFridge(food1,food2,food3,food4,food5);//milkrice kottu kadala appa cake

//Example 3
console.log("Example 3");
console.log("Saving the elements into an array");

function getFoods(...foods){
    return foods;
}
const foods = getFoods(food1,food2,food3,food4,food5);
console.log(foods);//['milkrice', 'kottu', 'kadala', 'appa', 'cake']

//Example 4
console.log("Example 4");
console.log("Sum of numbers");

function sum(...numbers){
    let result = 0
    for(let number of numbers){
       result += number;
    }
    return result;
}
// console.log(sum(1,2,3,4,2,10,100,1250)); //alternative -still works
const total = sum(1,2,3,4,2,10,100,1250);
console.log(`Your total is $${total}. Please pay.`);

//Example 5
console.log("Example 5");
console.log("Calculate the average");

function getAverage(...numbers){
    let result = 0
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const average = getAverage(75, 100, 85, 90, 50);
console.log(`The class average score is ${average}.`);

//Example 6
console.log("Example 6");
console.log("combine Strings using JOIN function");

function combineStrings(...strings){
    return strings.join(" ");
}

const description = combineStrings("amara", "meena", "5", "supermarket");
console.log(description);