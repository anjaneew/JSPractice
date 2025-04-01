// Window prompt
//
// let username;
// username = window.prompt("What's your username? ");
// console.log(username);
//
// let email = window.prompt("What's your email address?");
// console.log(email);

//HTML Textbox
let username;
document.getElementById("mySubmit").onclick = function(){
    username =  document.getElementById("myText").value;
    // console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
}