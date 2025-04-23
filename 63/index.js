//DOM - DOCUMENT OBJECT MODEL

//Example 1
console.log("Example 1");
console.log(document);//views the Document object
console.log("________________________");

//Example 2
console.log("Example 2");
console.dir(document);//views all document properties

document.title = "My home";
document.body.style.backgroundColor = "grey";
console.log("________________________");

//Example 3
console.log("Example 3");
const username = "Anjanee"
const myH1 = document.getElementById("myH1");

myH1.textContent += username === "" ? 'Guest' : username;
console.log("________________________");