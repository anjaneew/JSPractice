//classList
    //add()
    //remove()
    //toggle(remove if present, add if not)
    //replace(oldClass, newClass)
    //contains() - boolean
//--------------------Example 1 -----------------
const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event =>{
//     event.target.classList.add("hover");
// });
//
// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.remove("hover");
// });

myButton.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
});

myButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🚛";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
});

//--------------------Example 2 -----------------
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");

myH1.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
});

myH1.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
})

myH1.addEventListener("click",event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🛻";
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }
});

//--------------------Example 3 -----------------

let buttons = document.querySelectorAll(".buttons");

buttons.forEach(button =>{
    button.classList.add("enabled");
});

// buttons.forEach(button => {
//     button.classList.remove("enabled");
// })

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
       event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "👹";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});


