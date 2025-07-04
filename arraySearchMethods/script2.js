//Array Search Methods

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");
const resultsContainer = document.getElementById("results-container");

const submitBtn = document.getElementById("submit-btn");
const methodChoice = document.getElementById("method-choice");
const jsFile = document.getElementById("js-file");
const notes = document.getElementById("notes");


const students = [];

const addInfo = () => {
    if(nameInput.value.trim() !== "" && numberInput.value !== ""){
        const newName = nameInput.value.trim();
        const studentId = numberInput.value;
        const student = {name: newName, id: studentId};
        students.push(student);
        display();
        clearInputs();
        console.log(students);
    } 
    else{
        console.log("Not valid input")
    }
};

const choose = () => {
    const method = methodChoice.value;

    switch(method){
        case "find":  
            notes.innerHTML = `
                <h1>Array.find()</h1>
                <img  src="images/1.png" alt="array method">
            `;
            break;
        case "filter":     
            notes.innerHTML = `
                <h1>Array.filter()</h1>
                <img  src="images/2.png" alt="array method">
            `;
            break;
        case "for...of":     
            notes.innerHTML = `
                <h1>for...of</h1>
                <img  src="images/3.png" alt="array method">
            `;
            break;
        case "findIndex":     
            notes.innerHTML = `
                <h1>Array.findIndex()</h1>
                <img  src="images/4.png" alt="array method">
            `;
            break;
        case "Map":     
            notes.innerHTML = `
                <h1>Map</h1>
                <img  src="images/5.png" alt="array method">
            `;
            break;
        case "reduce":     
            notes.innerHTML = `
                <h1>Array.reduce()</h1>
                <img  src="images/6.png" alt="array method">
            `;
            break; 
        default:                    
             notes.innerHTML = `<ol>
             <li>Array.find()</li>
             <li>Array.filter()</li>
             <li>for...of</li>
             <li>Array.findIndex()</li>
             <li>Map</li>
             <li>Array.reduce()</li>
             </ol>`;
    }

};


//Helper Functions

const display = () => {

    resultsContainer.innerHTML = "";
    for(let i = 0; i< students.length; i++){
        resultsContainer.innerHTML += `<p>${i+1} Name: ${students[i].name} ID: ${students[i].id}</p>`;
    }
};

const clearInputs = () => {
    searchInput.value = "";
    numberInput.value = "";
    nameInput.value = "";
};

//search methods

//Method 2 -Array.filter() (Best for Multiple Matches)
const search = () => {
    const editStudent = students.filter(
        
           (student)=> student.name === searchInput.value.trim()); //✔️

    if(editStudent.length > 0){
       for (let i = 0; i < editStudent.length; i++){
            resultsContainer.innerHTML = `<h3>METHOD: Array.filter(callback function)</h3> <br> 
             <strong> Data: </strong> student ID: ${editStudent[i].id} Name: ${editStudent[i].name} ✔️`
       }
    }  
    else{
        console.log("not found");
        resultsContainer.innerHTML = `not found 🙅‍♂️🙅‍♀️🙅`;
    }  
};


//Event Listeners
addBtn.addEventListener("click", addInfo);
searchBtn.addEventListener("click", search);
submitBtn.addEventListener("click", choose);


