/**LocalStorage
     *  LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
     * 
     * Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.
    
    CRUD

    In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.

    localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

    For instance,
    
    setItem() method is used to save an item, 
    getItem() method retrieves the item. 
    removeItem() To delete a specific item
    clear() delete all items in the storage

    Here's how you can save an item:
        Example Code
            localStorage.setItem("key", value);
                // value could be string, number, or any other data type

    Example Code             

        const myTaskArr = [
            { task: "Walk the Dog", date: "22-04-2022" },
            { task: "Read some books", date: "02-11-2023" },
            { task: "Watch football", date: "10-08-2021" },];

        localStorage.setItem("data", myTaskArr);

    //If you check the "Application" tab of your browser console, you'll notice a series of [object Object]. This is because everything you save in localStorage needs to be in string format.

    //To resolve the issue, wrap the data you're saving in the JSON.stringify() method. Then, check local storage again to observe the results.

                            ("key", value);             
        localStorage.setItem("data", JSON.stringify(myTaskArr));

        const getTaskArr = localStorage.getItem("data");
        const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
        localStorage.removeItem("data");
        localStorage.clear();
        console.log(getTaskArr);
        console.log(getTaskArrObj);            
 */

/** modal
    A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.

    The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

    Example Code
    dialogElement.showModal(); 

    confirmCloseDialog.showModal(); 
    //This will display a modal with the Discard and Cancel buttons.
 */

 /** HTML Dialog Element <dialog> 
  * ### *Methods*  
    1. *.showModal()* → Forces open (modal, blocks page)  
    2. *.show()* → Opens (non-modal, no backdrop)  
    3. *.close([returnValue])* → Closes (optionally sets return value)  

    ### *Properties*  
    1. *.open* → Boolean (true if dialog is open)  
    2. *.returnValue* → String (gets/sets return value)  

    ### *Events*  
    1. *close* → Fires when dialog closes  
    2. *cancel* → Fires when ESC pressed  

    ### *CSS Pseudo-elements*  
    1. *::backdrop* → Styles the modal overlay
  * 
  */   

/** findIndex()
     * The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing callback function. If no such element is found, the method returns -1. The callback should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.

        Example Code
            const numbers = [3, 1, 5, 6];
            const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);

            console.log(firstNumLargerThanThree); // prints index 2
 */ 

/** this
 * 
 * this is a keyword that refers to the current context. In this case, this points to the element that triggers the event – the buttons. 
 *  ex: onclick="editTask(this)">Edit</button>
 * */            
            
/**splice() 
 * 
    * splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements.
    *  
    * It can take up to three arguments: 
        * the first one is the mandatory index at which to start, 
        * the second is the number of items to remove, 
        * and the third is an optional replacement element. 

        Example Code
            const fruits = ["mango", "date", "cherry", "banana", "apple"];

            // Remove date and cherry from the array starting at index 1
            const removedFruits = fruits.splice(1, 2);

            console.log(fruits); // [ 'mango', 'banana', 'apple' ]
            console.log(removedFruits); // [ 'date', 'cherry' ]
*/

/** REGEX removing all special characters
 * 
 * 
 * const removeSpecialChars = (str) => {
    return str.trim().replace(/[^0-9a-zA-Z ]/g, "");
} */

const taskForm = document.getElementById("task-form");//
const confirmCloseDialog = document.getElementById("confirm-close-dialog");//Dialog
const openTaskFormBtn = document.getElementById("open-task-form-btn");//
const closeTaskFormBtn = document.getElementById("close-task-form-btn");//
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");//
const discardBtn = document.getElementById("discard-btn");//
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};


//--------------Submit-------------//

const removeSpecialChars = (str) => {
    return str.trim().replace(/[^0-9a-zA-Z ]/g, "");
}

const addOrUpdateTask = () => {

    if(!titleInput.value.trim()){
        alert("Please provide a title");
        return;
    }
    const dataArrIndex = taskData.findIndex( item => item.id === currentTask.id);
    const taskObj = {
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: dateInput.value,
        description: removeSpecialChars(descriptionInput.value), 
    };
    if(dataArrIndex === -1){
        taskData.unshift(taskObj);
    } 
    else {
        taskData[dataArrIndex]= taskObj;
    }

    localStorage.setItem("data", JSON.stringify(taskData));

    updateTaskContainer();
    reset();

};

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
    taskData.forEach(({id, title, date, description})=> {
            tasksContainer.innerHTML += `<div class="task" id="${id}">
            <p><strong>Title:</strong>${title}</p>
            <p><strong>Date:</strong>${date}</p>
            <p><strong>Description:</strong>${description}</p>
            <button type="button" class="btn" onclick="editTask(this)">Edit</button>
            <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
            </div>`;
        });
};

const deleteTask = (buttonEl) => {
    const dataArrIndex  = taskData.findIndex( item => 
        item.id === buttonEl.parentElement.id 
    );
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);

    localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex( item => 
        item.id === buttonEl.parentElement.id
    );

    currentTask = taskData[dataArrIndex]; 
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";
    taskForm.classList.toggle("hidden");
};

//--------------Clear Input Fields-------------//

const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = "";
    dateInput.value  = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

//--------------Modal-------------//

if(taskData.length){
    updateTaskContainer();
}

openTaskFormBtn.addEventListener("click", ()=> {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click",() => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value  !==  currentTask.date || descriptionInput.value !== currentTask.description;

    if(formInputsContainValues && formInputValuesUpdated){
        confirmCloseDialog.showModal();
    } else{
        
        reset();
    }
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    // taskForm.classList.toggle("hidden");  //replaced by reset
    reset();
});

//---------------input fields-----------//

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addOrUpdateTask();
});


//-------------CRUD---------------------//



