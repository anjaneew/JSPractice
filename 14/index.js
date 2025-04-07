let username = "Anjanee Sewvandika Wijewardana";
console.log("username = \"Anjanee Sewvandika Wijewardana\"");

//char At - location of a character
username.charAt(0);
console.log("character of the index 0 in username");
console.log(username.charAt(0)); //A

//Index of a character
console.log("index of the character j in username");
console.log(username.indexOf("j")); // 2

//length - not a method
console.log("length of the username");
console.log(username.length); // 30

//Trim - remove whitespace at begining or end
username = "    Anjanee Sewvandika Wijewardana  ";
username = username.trim();
console.log("Trim/removes whitespaces at he beginging or end = \"    Anjanee Sewvandika Wijewardana  \"");
console.log(username);

//toUpperCase
username = username.toUpperCase();
console.log("Turns to uppercase");
console.log(username);

//toLowerCase
username = username.toLowerCase();
console.log("Turns to lowercase");
console.log(username);

//Repeat - how many times
username = username.repeat(3);
console.log(".repeat(3) repeats 3 times");
console.log(username);

//Starts with a specific character
username = "Anjanee Sewvandika Wijewardana"
let result = username.startsWith("A");
console.log("Does your string starts with A?");
console.log(result);

//Ends with a specific character
result = username.endsWith("a");
console.log("Does your string ends with a?");
console.log(result);

//Include method
result = username.includes("");
console.log("Does your string includes an empty space?");
console.log(result);

let phoneNumber = "123-456-789";

console.log("phoneNumber = \"123-456-789\";");

//Replace all
phoneNumber = phoneNumber.replaceAll("-","");
console.log("phoneNumber.replaceAll(search value\"-\",replace value\"\")");
console.log(phoneNumber);

//PadStart & PadEnd - make the string long
console.log(".padStart(how long, what to put)");
phoneNumber = phoneNumber.padStart(15,"0");
console.log(phoneNumber);
console.log(".padEnd(how long, what to put)");
phoneNumber = "123-456-789";
phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber);
