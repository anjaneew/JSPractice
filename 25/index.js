//Array

let fruits = ["apple", "orange", "pear", "watermelon"];

console.log(fruits);//['apple', 'orange', 'pear', 'watermelon']
console.log(fruits[0]);//apple

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("apple");
console.log(index);
index = fruits.indexOf("mango");
console.log(index);//it will say -1 if it's not there.

//loops 1
console.log("This is the first method, correct order")
for (let i = 0; i < fruits.length - 1 ; i++){
    console.log(fruits[i]);
}

console.log("This is the second method, reverse order")
for (let i = fruits.length - 1; i >= 0  ; i--){
    console.log(fruits[i]);
}

//Loops 2
console.log("This is the cool method")
for ( let fruit of fruits){
    console.log(fruit);
}



//replace or add an element in a specific index
fruits[0] = "rose";
console.log(fruits); //['ROSE', 'orange', 'pear', 'watermelon']
fruits[0] = "apple";
console.log(fruits); //['apple', 'orange', 'pear', 'watermelon']

//Array built in methods

fruits.push("strawberry");
console.log(fruits);//['apple', 'orange', 'pear', 'watermelon', 'STRAWBERRY']

fruits.pop();
console.log(fruits); //['apple', 'orange', 'pear', 'watermelon'              ]

fruits.unshift("coconut");
console.log(fruits);//['COCONUT', 'apple', 'orange', 'pear', 'watermelon']

fruits.shift();
console.log(fruits);//[           'apple', 'orange', 'pear', 'watermelon']

//sort
fruits.push("strawberry");
fruits.push("coconut");
console.log(fruits); //['apple', 'orange', 'pear', 'watermelon', 'strawberry', 'coconut']
console.log("Lets sort this in alphabetical order");
fruits.sort();
console.log(fruits);//['apple', 'coconut', 'orange', 'pear', 'strawberry', 'watermelon']
console.log("Lets sort this in reverse alphabetical order");
fruits.sort().reverse();
console.log(fruits);//['watermelon', 'strawberry', 'pear', 'orange', 'coconut', 'apple']


