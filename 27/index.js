//Spread Operator ...

console.log("Spread Operator ...");
//Example 1
console.log("Example 1 - how it unpacks");
let fruits = ["apple", "banana", "mango"];
console.log(fruits); //['apple', 'banana', 'mango']
//using the spread operator
console.log(...fruits); //apple banana mango

//Example 2
console.log("Example 2 working with numbers");
let numbers = [1, 5, 8, 3, 7, 9, 6, 4];
console.log(numbers);
let maximum = Math.max(numbers);
console.log(maximum);//NaN - can't do maths cz this is a string and together
console.log("Math.max");
maximum = Math.max(...numbers);
console.log(maximum);//9
console.log("Math.min");
let minimum = Math.min(...numbers);
console.log(minimum);//1

//Example 3
console.log("Example 3 working with strings into letters");
let username = "Wijewardana";
let letters = [...username];
console.log(letters);//['W', 'i', 'j', 'e', 'w', 'a', 'r', 'd', 'a', 'n', 'a']

//Example 4
console.log("Example 4 joining strings");
let newLetters = [...username].join("-");
console.log(newLetters);

//Example 5
console.log("Example 5 Making a shallow copy");
let fruitBasket = [...fruits];
console.log(fruitBasket);//['apple', 'banana', 'mango']

//Example 6
console.log("Example 6 Joining Arrays");
let vegetables = ["pumpkin", "leeks", "beets"]
let foods = [...fruits,...vegetables]
console.log(foods);//['apple', 'banana', 'mango', 'pumpkin', 'leeks', 'beets']

//Example 7
console.log("Example 7 append - (add something to the end of a written document.)");
let shoppingList = [...fruits, "sugar" , ...vegetables, "eggs", "milk"]
console.log(shoppingList);//['apple', 'banana', 'mango', 'sugar', 'pumpkin', 'leeks', 'beets', 'eggs', 'milk']


