//Array Search

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");
const resultsContainer = document.getElementById("results-container");

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

//Method 1 -Array.find() (Best for Single Match)
const search = () => {
    const editStudent = students.find(
        //TWO Ways ✔️ 
        // (student)=> {return student.name === searchInput.value.trim()}); ✔️
           (student)=> student.name === searchInput.value.trim()); //✔️
    if(editStudent){
        console.log(editStudent.id);
        resultsContainer.innerHTML = `Student ID: ${editStudent.id} Name: ${editStudent.name}`;
    }  
    else{
        console.log("not found");
    }  
};


//Event Listeners
addBtn.addEventListener("click", addInfo);
searchBtn.addEventListener("click", search);


