//NodeList

//--------Example 1 Create NodeList-----------
let buttons = document.querySelectorAll(".myButtons");
console.log(buttons); //NodeList(4)


//--------Example 2 changing HTML/CSS Properties-----------
buttons.forEach(button => {
    button.style.backgroundColor = "hsl(136, 54%, 63%)";
    button.textContent += "😌";
})

// //--------Example 3 add event listener-----------
//
// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor= "hsl(136, 54%, 43%)";
//         event.target.textContent = "Button 😊";
//     });
// });
//
// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "hsl(136, 54%, 53%)";
//         event.target.textContent = "Button 🙂";
//     });
// });
//
// buttons.forEach(button =>{
//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "hsl(136, 54%, 63%)";
//         event.target.textContent = "Button 😌";
//     });
// });

//--------Example 4 add to NodeList-----------
const newButton = document.createElement("button");//Step 1
newButton.textContent = "Button 😌";//Step 2
newButton.className = "myButtons";
// newButton.classList.add("myButton");//Step 2.
document.getElementById("btnContainer").appendChild(newButton);//Step 3

buttons = document.querySelectorAll(".myButtons");
console.log(buttons); //NodeList(5)

//--------Example 5 Remove Element from Nodelist-----------

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});















