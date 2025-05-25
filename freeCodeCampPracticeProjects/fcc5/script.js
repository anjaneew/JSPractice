const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown =  document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str){
    const regex = /\+-\s/;
    /*  REGEX 
    
    BACKSLASH TO ESCAPE 
        "\+" need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions. 
    
    SHORTHAND character classes 
         preceded with a backslash (\). 
            \s  any whitespace     /\+-\s/; 
            \d  any digit          /\d+e\d+/i;
    CHARACTER CLASS
        match each of these characters individually, you need to turn them into a character class. This is done by wrapping the characters you want to match in brackets.
            /[helo]/
            /[+-\s]/
            [0-9] - match any digit between 0 and 9.
    FLAGS 
        alter the pattern matching behavior.   after the closing /
            /hello/g  - The g flag, which stands for "global", 
            /[+-\s]/g
            /Hello/i  -  the i flag, which stands for "insensitive".
    + MODIFIER 
        one or more times
            [0-9]+	

    */        
   
    return str.replace(regex, "");
}

function isInvalidInput(str){
    const regex = /\d+e\d+/i;
    return str.match(regex);
} 

// console.log(isInvalidInput("1e3")); 

/* ['1e3', index: 0, input: '1e3', groups: undefined]
        "1e3"  
            matched value against the /\d+e\d+/i regex.
        index: 0 
            index of the matched value in the string.
        input: '1e3' 
            original string that was matched.   
        groups: undefined
            matched groups, which are not used in this case.
*/

// console.log(isInvalidInput("10")); //null
        /*null - no match found  
        In a boolean context, false */

function addEntry(){
    const targetInputContainer = document.querySelector( `#${entryDropdown.value} .input-container`);

    /* # means ID selector
        entryDropdown.value = "breakfast"→ #breakfast .input-container
        entryDropdown.value = "lunch"→ #lunch .input-container
        entryDropdown.value = "dinner"→ #dinner .input-container
        entryDropdown.value = "snacks"→ #snacks .input-container
        entryDropdown.value = "exercise"→ #exercise .input-container

        # means ID selector

        ' .input-container'
            The space means “descendant.” 
            It selects .input-container inside the element with ID ${entryDropdown.value}.  
            Without space (#breakfast.input-container), it means an element with both ID breakfast and class input-container,
 */

     const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;  
     //This will return a NodeList of all the text inputs in the form.     
     let HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
     <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
     <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
     <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">`;

    /* innerHTML 

    //  targetInputContainer.innerHTML += HTMLString; //using innerHTML

    If you want to add another label and input element inside the form, then you can use the innerHTML property as shown below:

    Example Code

        const formElement = document.getElementById("form");
        const formContent = `<label for="last-name">Last name</label>
                            <input id="last-name" type="text">`;
        formElement.innerHTML += formContent; 
*/ 
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
    
    /* insertAdjacentHTML() 
    inserts HTML code into a specified position.

       element.insertAdjacentHTML(position, html)
       node.insertAdjacentHTML(position, html)

        Legal positions:

        Value	       Description
        "afterbegin"   After the beginning of the element (first child)
        "afterend"	   After the element
        "beforebegin"  Before the element
        "beforeend"	   Before the end of the element (last child)
    */
}    

function calculateCalories(e){
    /* e - parameter e - 
        common usage for event listener */

    e.preventDefault(); //prevents the page from resetting when submit is clicked   
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if(isError){
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

    const remainingCalories =  budgetCalories - consumedCalories + exerciseCalories;

    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit"; 

    /*${} -  interpolation  */

    output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr></hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>`;
    output.classList.remove("hide");
}
 
function getCaloriesFromInputs(list){
    let calories = 0;
    for(const item of list){
       const currVal =  cleanInputString(item.value);
       const invalidInputMatch = isInvalidInput(currVal);
       if(invalidInputMatch){
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
       }

       calories += Number(currVal);

    }
    return calories;
}

/*Array.from() 
    returns an array from any iterable object.
    Create an array from a string:
    ex: Array.from(document.querySelectorAll(".input-container"));
*/

function clearForm(){
    const inputContainers = Array.from(document.querySelectorAll(".input-container"));

    for(const container of inputContainers){
        container.innerHTML = "";
    }

    budgetNumberInput.value = "";
    output.innerText = "";
    output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit",calculateCalories);
clearButton.addEventListener("click",clearForm);


