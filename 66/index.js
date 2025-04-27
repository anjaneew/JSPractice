//Add and Change HTML elements using JS

//---------STEP 1 CREATE---------

const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");
const newP1 = document.createElement("p");
const newP2 = document.createElement("p");
const newP3 = document.createElement("p");
const newP4 = document.createElement("p");
const newH3 = document.createElement("h3");
const newH4 = document.createElement("h3");

//---------STEP 2 ADD attributes & properties ---------

newH1.textContent = "Knight Rider";
newH1.id = "myH1";
newH1.style.color = "#171760";
newH1.style.textAlign = "center";
newH2.textContent = "One man can make a difference";
newH2.style.textAlign = "center";
newP1.textContent = "A shadowy flight into the dangerous world of a man who does not exist. ";
newP2.textContent = "a young loner on a crusade, to champion the cause of the innocent, the helpless, the powerless. ";
newP3.textContent = "Michael Knight, ";
newP4.textContent = "In a world of criminals who operate above the law…";
newH3.textContent = "Knight Rider is an American action crime drama television series created and produced by Glen A. Larson."
newH4.textContent = "The show stars David Hasselhoff as Michael Knight, a sleek and modern crime fighter assisted by KITT, an advanced, artificially intelligent, self-aware, and nearly indestructible car. "

//---------STEP 3 APPEND element to DOM---------
document.body.prepend(newH1);
document.body.append(newH2);
document.getElementById("box1").append(newP1);
document.getElementById("box2").prepend(newP2);


const box2 = document.getElementById("box2");
document.body.insertBefore(newP3, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newP4, boxes[2]);

document.body.append(newH3);//but was removed
document.getElementById("box4").append(newH4);//but was removed

//---------STEP 4 REMOVE HTML element---------
document.body.removeChild(newH3);
document.getElementById("box4").removeChild(newH4);

//---------Example 2---------
const newListItem1 = document.createElement("li");
const newListItem2 = document.createElement("li");
const newListItem3 = document.createElement("li");
const newListItem4 = document.createElement("li");
const newListItem5 = document.createElement("li");
const newListItem6 = document.createElement("li");

newListItem1.textContent = "coconut 🥥";
newListItem1.id = "coconut";
newListItem2.textContent = "grapes 🍇";
newListItem3.textContent = "pineapple 🍍";
newListItem4.textContent = "mango 🥭";
newListItem5.textContent = "watermelon 🍉";
newListItem6.textContent = "pear 🍐";

//Version 1 append()
document.getElementById("fruits").append(newListItem1);
//Version 2 prepend()
document.getElementById("fruits").prepend(newListItem2);
//Version 3 insertBefore() - my way - made by me
document.getElementById("fruits").insertBefore(newListItem3, fruits[2]);
//Version 4 insertBefore()
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem4, orange);
//Version 5 .querySelectorAll
const fruitList = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem5, fruitList[1]);
//Version 6 removeChild()
document.getElementById("fruits").append(newListItem6);//later removed
document.getElementById("fruits").removeChild(newListItem6);



