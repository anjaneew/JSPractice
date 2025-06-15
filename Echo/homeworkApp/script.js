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
// const searchNumBtn = document.getElementById("search-num-btn");
const updateBtn= document.getElementById("update-btn");
const searchBtn = document.getElementById("search-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");

const displayTasks = document.getElementById("display-tasks");

let tasks =  JSON.parse(localStorage.getItem('taskList')) || [];
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

    displayTasks.innerHTML = ` <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Details</th>
                    <th>Due date</th>
                            </tr>`;

    //update tasks
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


const update = () => {
    currentIndex = updateTaskNum.value -1;

    currentTitle = updateTaskTitle.value;
    currentDetails = updateTaskDetails.value;
    currentDate = updateTaskDate.value;

    currentTask = {"title": currentTitle , "details": currentDetails, "date": currentDate};
    console.log(currentTask);

    tasks[currentIndex] = currentTask;
    console.log(tasks);

    localStorage.setItem('taskList', JSON.stringify(tasks));
    console.log(localStorage.getItem('taskList'));
    display();
};

const smartSearch = () => {
    currentTask = searchTitle.value;
       
    const getIndex = () => {
       for(let i = 0; i < tasks.length ; i++){
        if(tasks[i].title === currentTask){
            return i;
        }
       }
    }
      
    currentIndex = getIndex();

    if(currentIndex > 0) {
        updateTitle.value = tasks[currentIndex].title;
        updateDetails.value = tasks[currentIndex].details;
        updateDate.value = tasks[currentIndex].date;
    }  

    else {
        return alert("task not found.");
    }

};

const save = () => {
    currentTitle = updateTitle.value;
    currentDetails = updateDetails.value;
    currentDate = updateDate.value;

    currentTask = {"title": currentTitle , "details": currentDetails, "date": currentDate};
    console.log(currentTask);

    tasks[currentIndex] = currentTask;
    console.log(tasks);

    localStorage.setItem('taskList', JSON.stringify(tasks));
    console.log(localStorage.getItem('taskList'));
    display();
    clearInput();
};

const deleteTask = () => {
    currentTask = deleteInput.value;

    const getIndex = () => {

    if(!isNaN(currentTask)){
        return Number(currentTask)-1;
    }
    
    else{
      for(let i = 0 ; i < tasks.length; i++){
        if(tasks[i].title === currentTask){
            return i;
        }
      }  
      return; 
    }

    }

  currentIndex = getIndex();
  
  let firstArray = tasks.slice(0, currentIndex);
  let secondArray = tasks.slice(currentIndex+1, tasks.length);

  updatedArray = firstArray.concat(secondArray);
  tasks = updatedArray;

  console.log(tasks);

    localStorage.setItem('taskList', JSON.stringify(tasks));
    console.log(localStorage.getItem('taskList'));
    display();
    clearInput();

};

const clear = () => {
    tasks = [];
    localStorage.removeItem('taskList');
    display();
    clearInput();
};

const clearInput = () =>  {
    const inputList = document.querySelectorAll(".input");
    for(let i = 0 ; i < inputList.length; i++){
        inputList[i].value = '';
    }
   
};

display();

addBtn.addEventListener("click", addTask);
updateBtn.addEventListener("click", update);
searchBtn.addEventListener("click", smartSearch);
saveBtn.addEventListener("click", save);
deleteBtn.addEventListener("click", deleteTask);
clearBtn.addEventListener("click", clear);

// // incase to remove
// localStorage.removeItem('taskList');



//Notes on array methods
// let myArray = ['🍇', '🍉', '🍊', '🍎', '🍍']
// console.log(myArray);


// myArray[1] = '🌹';
// console.log(myArray);// ['🍇', '🌹', '🍊', '🍎', '🍍']

// const sub1 = myArray.slice(0,1);
// const sub2 = myArray.slice(2, myArray.length);
// console.log(sub1);//['🍇']
// console.log(sub2);//['🍊', '🍎', '🍍']

// newArray = sub1.concat(sub2);
// console.log(newArray);// ['🍇', '🍊', '🍎', '🍍']
// myArray = newArray;
// console.log(myArray);// ['🍇', '🍊', '🍎', '🍍']