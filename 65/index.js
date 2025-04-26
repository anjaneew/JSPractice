//DOM Navigation
const ulElement1 = document.getElementById("fruits");
const  ulElement2 = document.getElementById("tomato");
const ulElement3 = document.getElementById("drinks");
const ulElements = document.querySelectorAll("ul");

//...............firstElementChild...............
console.log(".firstElementChild");
const firstChild = ulElement1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

//using query selector all to access all 1st children

ulElements.forEach(ulElement => {
    const child1 = ulElement.firstElementChild;
    child1.style.color = "blue";
})
console.log("____________________");

//................lastElementChild...............
console.log(".lastElementChild");
const lastChild = ulElement1.lastElementChild;
lastChild.style.backgroundColor = "lightblue";
console.log("____________________");

ulElements.forEach(ulElement => {
    const lastKid = ulElement.lastElementChild;
    lastKid.style.color = "green";
})

//................nextElementSibling...............
console.log(".nextElementSibling");
const nextSibling = ulElement2.nextElementSibling;
nextSibling.style.backgroundColor = "lightgreen";
console.log("____________________");

//................previousElementSibling...............
console.log(".previousElementSibling");
const previousSibling = ulElement2.previousElementSibling;
previousSibling.style.backgroundColor = "orange";
console.log("____________________");

//................parentElement...............
console.log(".parentElement");
const parent = ulElement2.parentElement;
parent.style.fontWeight = "bold";
console.log("____________________");

//................children...............
console.log(".children");
const children = ulElement3.children;
//Turn it into an array
Array.from(children).forEach(child => {
    child.style.backgroundColor = "pink";
})

children[1].style.color = "red";

for(let drink of children){
    drink.style.fontStyle = "italic";
}
console.log("____________________");