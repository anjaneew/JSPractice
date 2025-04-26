//Element Selectors

//Example 1 document.getElementById()
console.log("Example 1");
console.log("document.getElementById()");
const myHeading = document.getElementById("myH1");
myHeading.style.backgroundColor = "lightgreen";
myHeading.style.textAlign = "center";
myHeading.style.fontSize = "5em";
console.log(myHeading); //null if there is no such element
console.log("___________________");

//Example 2 document.getElementsByClassName()
console.log("Example 2");
console.log("document.getElementsByClassName()");//HTML Collection
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
fruits[0].style.backgroundColor = "yellow";

for(let fruit of fruits){
    fruit.style.fontSize = "5em";
    fruit.style.textAlign = "right";
}

//No forEach method - so typecasting
Array.from(fruits).forEach(fruit => {
    fruit.style.color = "darkblue";
    fruit.style.fontFamily = "monospace","sansSerif";
});
console.log("___________________");

//Example 3 document.getElementsByTagName()
console.log("Example 3");
console.log("document.getElementsByTagName()");
const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.fontSize = "2em";
h4Elements[1].style.fontSize = "2em";
//Apply to all elements - enhanced for loop
const liElements = document.getElementsByTagName("li");
for(let list of liElements){
    list.style.fontSize = "2em";
    list.style.color = "brown";
}

//typecasting
Array.from(h4Elements).forEach( h4Element => {
    h4Element.style.color = "brown";
});
console.log("___________________");


//Example 4 document.querySelector()
console.log("Example 4");
console.log("document.querySelector()");

//it selects the first of its class/tag
const classElement = document.querySelector(".fruits");
classElement.style.color = "red";

const tagElement = document.querySelector("ul");
tagElement.style.fontStyle = "italic";

console.log("___________________");

//Example 5 document.querySelectorAll()
console.log("Example 5");
console.log("document.querySelectorAll()");

const tagElements = document.querySelectorAll("h4");
tagElements[0].style.fontStyle = "italic";

//can apply for each to cover all elements. no typecasting needed
const tag = document.querySelectorAll("ul");
tag.forEach( tag => {
    tag.style.fontFamily = "monospace";
    tag.style.marginLeft = "500px";
})

console.log("___________________");

//QUESTION ! HTML Elements VS nodelist ?? static VS live?? WTF?



