//Decimal to Binary Converter

/**  Recursion
 * Recursion is a programming concept where a function calls itself. 
 * This can reduce a complex problem into simpler sub-problems, 
 * until they become straightforward to solve.
 */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
// const  = document.getElementById("");

const checkUserInput = () => {
    console.log(numberInput.value);
};

convertBtn.addEventListener("click",  checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    console.log(e);
} );

/**
 * The keydown event fires every time a user presses a key on their keyboard, 
 * and is a good way to add more interactivity to input elements.
 *  The event listener should listen for keydown events and take 
 * an empty arrow function as a callback.
 */