/**LocalStorage
     *  LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
     * 
     * Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.
    
    CRUD
    In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.
 */

/** modal
    A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.

    The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

    Example Code
    dialogElement.showModal(); 
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

const taskData = [];
let currentTask = {};

//--------------Modal-------------//

openTaskFormBtn.addEventListener("click", ()=> {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click",() => {
    confirmCloseDialog.showModal(); 
    //This will display a modal with the Discard and Cancel buttons.
});

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
});

//---------------input fields-----------//

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataArrIndex = taskData.findIndex( item => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value, 
    };
});

//stoppimg at 21 