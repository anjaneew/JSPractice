//Array of Objects

const fruits = [{name:"apple", color: "red", calories: 95},
                                          {name:"orange", color: "orange", calories: 45 },
                                          {name:"banana", color: "yellow", calories: 105},
                                          {name:"mango", color: "green", calories: 159},
                                          {name:"pineapple", color: "orange", calories:37 }];

console.log("all details");
console.log("________________");
console.log(fruits);//all details - 5 objects
console.log(fruits[0].name);//apple
console.log("________________");

//push - add a new object at the end
console.log("push - add a new object at the end");
fruits.push({name:"grapes", color: "purple", calories:52 });
console.log(fruits);//all details - 6 objects
console.log("________________");

//pop - removes the last object
console.log("pop - removes the last object");
fruits.pop();
console.log(fruits);//all details - 5 objects
fruits.push({name:"grapes", color: "purple", calories:52 });
console.log("________________");

//splice() - removing elements in specific index
console.log("splice - removing elements in specific index");
fruits.splice(1 , 2) //cutting 1, 2,
console.log(fruits);//left details - apple 0  mango 3 pinaple 4  grapes 5
console.log("________________");
fruits.push({name:"orange", color: "orange", calories: 45 });
fruits.push({name:"banana", color: "yellow", calories: 105});
console.log(fruits);
console.log("________________");

//forEach
console.log("forEach()");
fruits.forEach(fruit => console.log(fruit));
console.log("forEach() with one property");
fruits.forEach(fruit => console.log(fruit.calories));
console.log("________________");

//Map()
console.log("map");
console.log("making a new array of fruit names");
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
console.log("making a new array of fruit colors");
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);
console.log("making a new array of fruit calories");
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);
console.log("________________");

//fileter()
console.log("fileter() - checking a condition and making a new array");
const orangeFruits = fruits.filter( fruit => fruit.color === "orange");
const lowCalFruits = fruits.filter( fruit => fruit.calories < 85);
const highCalFruits = fruits.filter( fruit => fruit.calories >= 85);
console.log("orange fruits:");
console.log(orangeFruits);
console.log("low calorie fruits:");
console.log(lowCalFruits);
console.log("high calorie fruits:");
console.log(highCalFruits);
console.log("________________");


//reduce()
console.log("reduce() - return single value");
console.log("max calorie fruit:");
const maxCalorieFruit = fruits.reduce( (max, fruit) =>
                                             fruit.calories > max.calories ? fruit : max);
console.log(maxCalorieFruit);
console.log("max calorie fruit:");
const minCalorieFruit = fruits.reduce((min, fruit) =>
                                            fruit.calories < min.calories ? fruit : min);
console.log(minCalorieFruit);
console.log("________________");