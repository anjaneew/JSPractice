let students = 30;

//operators + - * /

students = students + 1;

// Exponents - to the power of
// students = students ** 3;

//modulus
 let extraStudents = students  % 2;

 //increament and decrement

students++;
students --;

console.log(students);
console.log(extraStudents);


/*Operator Presidence

()
exponents
* / %
+ -

*/

let result = 1 + 2 * 3 + 4 ** 2;
//
//1 + 2 * 3 + 16
// 1 + 6 + 16
// 23

console.log(result);

let result2 = 12 % 5 + 8 / 2;
 /*
 2 + 4
 6
  */
console.log(result2);

let result3 = 6 / 2 ** (2 + 5);

/*
 = 6 / 2 ** (2 + 5);
 = 6 / 2 ** 7;
 = 6 / 128;
 = 0.046875;
 */

console.log(result3);



