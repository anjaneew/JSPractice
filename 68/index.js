//eventListener = keydown, keyup
//                document.addEventListener(event, callback);
//                                                 anonymous function
//                                                 arrow function

// //--------------------Example 1 Keydown ---------------
// document.addEventListener("keydown", event => {
//     console.log(event);//keyboard event
//     console.log(`Key down = ${event.key}`);//k or f or o
// });
//
// //--------------------Example 2 Keyup ---------------
// document.addEventListener("keyup", event =>{
//     console.log(event);
//     console.log(`Key up = ${event.key}`);
// })

//--------------------Example 3 key event to change HTML element ---------------
// const myBox = document.getElementById("myBox");
//
// document.addEventListener("keydown", event =>{
//    myBox.textContent = "🐲";
//     myBox.style.fontSize = "8rem";
//    myBox.style.backgroundColor = "blue";
// });
//
// document.addEventListener("keyup", event =>{
//     myBox.textContent = "🐉";
//     myBox.style.fontSize = "5rem";
//     myBox.style.backgroundColor = "darkblue";
// });


//--------------------Example 4 mini project ---------------
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
   myBox.textContent = "🐲";
    myBox.style.fontSize = "8rem";
   myBox.style.backgroundColor = "blue";
});

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        // event.preventDefault();//can move beyond visible screen. annoying.

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "🐉";
    myBox.style.fontSize = "5rem";
    myBox.style.backgroundColor = "darkblue";
});
