Math.PI;
console.log(Math.PI);
console.log(Math.E); //Euler's Number

//Methods
let x = 3.21;
let y = 2;
let z;

console.log("Round Method");
console.log("3.21");
z = Math.round(x);
console.log(z);

console.log("Floor - round down")
console.log("5.99");
x = 5.99;
z = Math.floor(x);
console.log(z);

console.log("Ceiling - rounded up");
console.log("6.25");
x = 6.25;
z = Math.ceil(x);
console.log(z);

console.log("Trunc - eliminate any decimal points");
console.log("4.25");
x = 4.25;
z = Math.trunc(x);
console.log(z);

console.log("Power Method");
console.log("3 to the power of 2");
x = 3;
y = 2;
z = Math.pow(x, y);
console.log(z);

console.log("Square root");
console.log("81");
x = 81;
z = Math.sqrt(x);
console.log(z);

console.log("log function - natural algorithm of a number");
console.log("how many times u need to multiply e by itself to get this number");
console.log("10");
x = 10;
z = Math.log(x);
console.log(z);



console.log("Trigonometry");

console.log("Sin function");
console.log("x (radians) = 45");
x = 45;
z = Math.sin(x);
console.log(z);

console.log("Cosin function");
console.log("x (radians) = 45");
x = 45;
z = Math.cos(x);
console.log(z);

console.log("Tangin function");
console.log("x (radians) = 45");
x = 45;
z = Math.tan(x);
console.log(z);

console.log("Absolute Value of a number - gives the positive value");
console.log("z = Math.abs(x);");
console.log(z);
x = -3.21;
z = Math.abs(x);
console.log(z);

console.log("Define the sign of a number - if its positive, negative or zero");
console.log("x = -3.21 ");
x = -3.21;
z = Math.sign(x);
console.log("z = Math.sign(x);");
console.log(z);console.log("x = 3.21 ");
x = 3.21;
z = Math.sign(x);
console.log("z = Math.sign(x);");
console.log(z);
console.log("x = 0");
x = 0;
z = Math.sign(x);
console.log("z = Math.sign(x);");
console.log(z);


console.log("Max Min functions");
console.log("x = 3 , y = 2 , z = 1 ");
x = 3;
y = 2;
z = 1;
let max = Math.max(x,y,z);
console.log("Math.max(x,y,z)");
console.log(max);
//Array
let arr = [51,24,85,92,15];
max = Math.max(...arr);
console.log(max);

let min = Math.min(x,y,z);
console.log("Math.min(x,y,z)");
console.log(min);
//Array
min = Math.min(...arr);
console.log(min);
