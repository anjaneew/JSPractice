//Homework App
//Inputs
const addTitle = document.getElementById("add-title");
const addDetails = document.getElementById("add-details");
const addDate = document.getElementById("add-date");

const updateTaskNum = document.getElementById("update-task-num");
const updateTaskTitle = document.getElementById("update-task-title");
const updateTaskDetails = document.getElementById("update-task-details");
const updateTaskDate = document.getElementById("update-task-date");

const searchTitle = document.getElementById("search-by-title");
const updateTitle = document.getElementById("update-title");
const updateDetails = document.getElementById("update-details");
const updateDate = document.getElementById("update-date");

const deleteInput = document.getElementById("delete-input");

//Btn
const addBtn = document.getElementById("add-btn");
const updateBtn= document.getElementById("update-btn");
const searchBtn = document.getElementById("search-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");

const displayTasks = document.getElementById("display-tasks");

const tasks =  JSON.parse(localStorage.getItem('taskList')) || [];
console.log(tasks);

let currentIndex = null;
let currentTask;
let currentTitle;
let currentDetails;
let currentDate;

const addTask = (title, details , date) =>{
    let obj = {};
    title = addTitle.value.trim();
    details = addDetails.value.trim();
    date = addDate.value.trim();
    obj = {"title": title , "details": details, "date": date};
    console.log(obj);
    tasks.push(obj);
    localStorage.setItem('taskList', JSON.stringify(tasks));
    console.log(localStorage.getItem('taskList'));
    
    clearInput();
    display();
};

const display = () => {
    for(let i = 0; i < tasks.length ; i++){
        displayTasks.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${tasks[i].title}</td>
            <td>${tasks[i].details}</td>
            <td>${tasks[i].date}</td>
        </tr>
        `;
        
    }
    return;
   
};

const clearInput = () =>  {
    const inputList = document.querySelectorAll(".input");
    for(let i = 0 ; i < inputList.length; i++){
        inputList[i].value = '';
    }
   
};
display();

addBtn.addEventListener("click", addTask);


// incase to remove
// localStorage.removeItem('taskList');

