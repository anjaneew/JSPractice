//While Loop

// //Example 1
//let username = "";
// while (username === "" || username === null){
//     username = window.prompt(`Enter your username: `);
// }
// console.log(`Hello ${username}`);

// //Example 2 DO while loop

// let username;
//
// do {
//     username = window.prompt(`Enter your username: `);
// } while (username === "" || username === null)
//
// console.log(`Hello ${username}`);

//Example 3
let loggedIn = false;
let username;
let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username: `);
//     password = window.prompt(`Enter your password: `);
//
//     if(username === "robin" && password === "Hood" ){
//         loggedIn = true;
//         console.log("You are logged in.");
//     }
//     else{
//         console.log("Credential are invalid. try again.");
//     }
// }

loggedIn = true; // even if this is true, the prompt runs once

do {
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(username === "robin" && password === "Hood" ){
        loggedIn = true;
        console.log("You are logged in.");
    }
    else{
        console.log("Credential are invalid. try again.");
    }
} while(!loggedIn)