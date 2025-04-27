//EventListeners

//click, mouseover, mouseout
//.addEventListener(event, callback);

//--------------Example 1 --------------

const myBox = document.getElementById("myBox");

myBox.addEventListener("click",changeColor);
myBox.addEventListener("mouseover", addBait);
myBox.addEventListener("mouseout", beg);

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "You clicked me !😄";
}

function addBait(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it ! 😋";
}

function beg(event){
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Noo! Don't go !🥺";
}

//--------------Example 2 anonymous function--------------

const myP = document.getElementById("myP");

myP.addEventListener("click", function(event){
    event.target.style.backgroundColor = "#7019f3";
    event.target.textContent = "Is it me you looking for?";
});

//--------------Example 3 arrow function--------------

const myBox2 = document.getElementById("myBox2");
myBox2.addEventListener("click", event => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Thanks. 🥰";
})

//--------------Example 4 button changes elements--------------
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "You clicked me !😄";
    myP.style.backgroundColor = "#7019f3";
    myP.textContent = "Is it me you looking for?";
    myBox2.style.backgroundColor = "lightblue";
    myBox2.textContent = "Thanks. 🥰";
})
