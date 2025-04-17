//sort() works in an array lexicographic order

//Example 1
let fruits = ["apple", "orange", "banana", "pineapple", "watermelon", "mango"];

fruits.sort();
console.log(fruits);//['apple', 'banana', 'mango', 'orange', 'pineapple', 'watermelon']

//Example 2 - numbers (originally treated as strings)

let numbers = [1, 9, 8, 5, 3, 2, 6, 7, 10, 4];
numbers.sort();
console.log(numbers);//[1, 10, 2, 3, 4, 5, 6, 7, 8, 9] lexicographically not in alphabetical order

//Example 3 - Sorting numbers using custom comparison alphabetically

numbers.sort((a, b) => a - b);
console.log(numbers);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Example 4 - Sorting numbers using custom comparison - reverse alphabetically

numbers.sort((a, b) => b - a);
console.log(numbers);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Example 3 - Sorting objects by given property
//REMEMBER - sort replaces the new order so only one check you can do at a time

const people = [{name:"Robin Hood" , age:30, gpa:3.0 },
                                             {name:"Tuck", age:35, gpa: 4.0},
                                             {name:"March", age: 15, gpa: 1.0 },
                                             {name:"William", age: 45, gpa: 4.0},
                                             {name:"Little John", age:29 , gpa: 2.0 }];

// people.sort((a, b) => a.age - b.age); //alphabetical (small to big number)
// console.log(people);//0 March 1 Little John 2 Robin Hood 3 Tuck 4 Whilliam
//
// // people.sort((a, b) => b.age - a.age); //reverse order (big to small)
// console.log(people);//0 Whilliam 1 Tuck 2 Robin Hood 3 Little John  4 March

// //GPA
// people.sort((a, b) => a.gpa - b.gpa);
// console.log(people);

// //reverse order - if u want you need to
// people.sort((a, b) => b.gpa - a.gpa);
// console.log(people);

// //Name - a property as a string
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);

//Name - reverse order - a property as a string
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);


