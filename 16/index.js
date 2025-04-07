let userName = window.prompt("Enter the username: ");
let familyName = window.prompt("Enter the family name: ");

userName = userName.trim();
console.log(userName);


//Without method chaining
let letter = userName.charAt(0);
letter = letter.toUpperCase();
console.log(letter);

let extra = userName.slice(1);
extra = extra.toLowerCase();
console.log(extra);

userName = letter + extra;
console.log(letter + extra);


//Method chaining

familyName = familyName.trim().charAt(0).toUpperCase() + familyName.trim().slice(1).toLowerCase();
console.log(familyName);