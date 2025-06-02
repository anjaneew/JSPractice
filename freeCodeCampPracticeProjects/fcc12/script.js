//Decimal to Binary Converter

/**  Recursion
 * Recursion is a programming concept where a function calls itself. 
 * This can reduce a complex problem into simpler sub-problems, 
 * until they become straightforward to solve.
 */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

const decimalToBinary = (input) => {
   if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }

    /** Method #1 solve binary
     * 
     * const inputs = [];
     * const quotients = [];
     * const remainders = [];
     * 
     * if(input === 0){
        * result.innerText = "0";
        *  return;
     * }
     * 
     * while (input > 0){
        * const quotient = Math.floor(input/2);
        * const remainder = input%2;
        * inputs.push(input);
        * quotients.push(quotient);
        * remainders.push(remainder);
        * input = quotient;
     * }  
     * 
     * console.log("Inputs: ", inputs);
     * console.log("Quotients: ", quotients);
     * console.log("Remainders:", remainders);
     * result.innerText = remainders.reverse().join("");
     */

    /** Method #2 solve binary
     *     let binary = "";

    if(input === 0){
        binary = "0";
        return;

    }

    while(input > 0){
        input = Math.floor(input/2);
        binary = (input%2) + binary;
    }

    result.innerText = binary;
     */

    /**Method #2 Recursion
     *
     * const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};

countDownAndUp(3);
     */
};

/**call stack and recursion
    * Example:
        const a = () => {
        return "freeCodeCamp " + b();
        };

        const b = () => {
        return "is " + c();
        };

        const c = () => {
        return "awesome!";
        };

        console.log(a());
    * 
    * a stack 
    * In computer science, a stack is a data structure where items are stored i
    * a LIFO (last-in-first-out) manner. If you imagine a stack of books, the
    * last book you add to the stack is the first book you can take off the
    * stack. Or an array where you can only .push() and .pop() elements.
    * 
    * call stack
    * The call stack is a collection of function calls stored in a stack 
    * structure. When you call a function, it is added to the top of the 
    * tack, and when it returns, it is removed from the top / end of the stack.
 */


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

const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
result.textContent = decimalToBinary(5);
  }, 20000);
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
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

/**keydown event 
 * The keydown event fires every time a user presses a key on their keyboard, 
 * and is a good way to add more interactivity to input elements.
 *  The event listener should listen for keydown events and take 
 * an empty arrow function as a callback.
 */