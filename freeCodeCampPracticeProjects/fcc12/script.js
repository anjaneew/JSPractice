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

const decimalToBinary = (input) => {
   
    const inputs = [];
    const quotients = [];
    const remainders = [];

    while (input > 0){
        const quotient = Math.floor(input/2);
        const remainder = input%2;
      input = quotient;
    }  
};

/**dividend, divisor, & quotient.
 * 
 * To divide numbers in JavaScript, use the division operator (/)
    * Example Code
        * const quotient = 5 / 2; // 2.5
        * 
    * 5 is the dividend, or the number to be divided, 
    * 2 is the divisor, or the number to divide by. 
    * The result, 2.5, is called the quotient.
 */

/**isNaN()
 * Next, you need to check if the value returned by the parseInt() 
 * function is a number or not.
 * To do that, you can use the isNaN() function. This function takes in 
 * a string or number as an argument, and returns true if it evaluates 
 * to NaN. 
        * Example Code
            * isNaN("test"); // true
            * isNaN(2); // false
            * isNaN("3.5"); // false
 * Update the second condition in your if statement to use the isNaN(
 * function to check if the value returned by parseInt() is NaN.
 * 
 * correct answer: isNaN(parseInt(numberInput.value))
 * 
 * // Only methods returning chainable objects (like arrays, strings, etc.) can be chained. Numbers & booleans like premitives cant be
 */



const checkUserInput = () => {
    if(!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0){
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};

/**parseInt()
 * 
 * Because the input type="number" element allows special 
 * characters like ., +, and e, users can input floats like 2.2,
 *  equations like 2e+3, or even just e, which you don't want to allow
 * 
 * A good way to check and normalize numbers in JavaScript is to 
 * use the built-in parseInt() function, which converts a string 
 * into an integer or whole number. parseInt() takes at least 
 * one argument, a string to be converted into an integer, 
 * and returns either an integer or NaN which stands for 
 * Not a Number. 
 * 
    * Example Code
        * parseInt(2.2); // 2
        * parseInt("2e+3"); // 2
        * parseInt("e") // NaN
    */

convertBtn.addEventListener("click",  checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkUserInput(); //this allows enter to act as convert
    }
} );

/**
 * The keydown event fires every time a user presses a key on their keyboard, 
 * and is a good way to add more interactivity to input elements.
 *  The event listener should listen for keydown events and take 
 * an empty arrow function as a callback.
 */