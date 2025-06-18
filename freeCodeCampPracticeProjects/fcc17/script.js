//A spreadsheet

/**Functional Programming 
 * Functional Programming is a popular approach to software development. 
 * In Functional Programming, developers organize code into smaller functions, 
 * then combine those functions to build complex programs. */



//SPREADSHEET functions
const isEven = num => num % 2 === 0 ;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a,b)=> a - b );
  const length = sorted.length;
  const middle = length / 2 - 1; 

  //terinary operator
    return isEven(length)? average([sorted[middle], sorted[middle+1]]) 
                           : sorted[Math.ceil(middle)] ; 
};

/**Object properties - shorthand
 * 
 * Object properties consist of key/value pairs. 
 * You can use shorthand property names when declaring an object literal. 
 * When using the shorthand property name syntax, the name of the variable
 *  becomes the property key and its value the property value.
 * 
                * Example Code
                    const userId = 1;
                    const firstName = "John";
                    const loggedIn = true;

                    const user = {
                    userId,
                    firstName,
                    loggedIn,
                    };

                    console.log(user); // { userId: 1, firstName: 'John', loggedIn: true }
 */

//To keep track of all of your spreadsheet's functions
const spreadsheetFunctions = {
  sum,
  average, 
  median,
};                 

//HELPER FUNCTIONS: 
// 1 generate range of numbers
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

/**2 generate range of letters
 * 
 * Inbuilt Methods:
 * 
 * array.map(callback)
 * Return a new array with suitable things
 * ex: const numbers = [65, 44, 12, 4];
 *     const newArr = numbers.map((num) => num * 2)
 *                    //[130, 88, 24, 8]  
 * 
 * .charCodeAt(0)
 * Get the Unicode of the first character in a string: 
 *          ex: "A".charCodeAt(0)  > 65
 * 
 * String.fromCharCode() 
 * static method returns a string created from the specified sequence of 
 * UTF-16 code units. 
 *          ex: String.fromCharCode(65) > "A"
 * */
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0));

/**currying &  closure
 * 
 * currying
 * The concept of returning a function within a function is called currying.
 *  This approach allows you to create a variable that holds a function to 
 * be called later, but with a reference to the parameters of the outer
 *  function call.

            For example:

            Example Code
            const innerOne = elemValue(1);
            const final = innerOne("A");

  *closure
  *innerOne would be your inner function, with num set to 1, and 
  final would  have the value of the cell with the id of "A1". This is possible because functions have access to all variables declared at their creation. This is called closure.
 */

  /** implicitly return a function
   * 
            * Example Code
            * const curry = soup => veggies => {};
   * 
   * curry is a function which takes a soup parameter and returns a function
   *  which takes a veggies parameter. Using this syntax, update your 
   * addCharacters function to return an empty function which takes
   *  a character2 parameter.
   * 
   *  Using this syntax, update your addCharacters function to return 
   * an empty function which takes a character2 parameter.
   * 
   * Answer: 
   *        const addCharacters = character1 => character2 => {}
   * 
   * Your inner functions can also return a function. Using the same arrow 
   * syntax, update your addCharacters function to return a third function
   *  which takes a num parameter.
   * 
   * Answer :  
   *        const addCharacters = character1 => character2 => num => {}
   */

const evalFormula = (x , cells) => {
    const idToText = id => cells.find(cell => cell.id === id).value ;
    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
    const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
    // const elemValue = num => {
    //     const inner = character => {return idToText(character + num);};
    //     return inner;
    //   };
    const elemValue = num =>  character =>  idToText(character + num);

    const addCharacters = character1 => character2 => num => charRange(character1, character2).map();
};

/**window.onload
 * The global window object represents the browser window (or tab). 
 * It has an onload property which allows you to define behavior 
 * when the window has loaded the entire page, including stylesheets and scripts.
 * 
 * 
 * HTML DOM Element setAttribute()
 * Add a class attribute to an element:
 *        ex: element.setAttribute("class", "democlass");
 */

window.onload = () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };
    const letters = charRange("A", "J");
    letters.forEach(createLabel);
    range(1,99).forEach(number=>{
            createLabel(number);
             letters.forEach(letter=> {
                      const input = document.createElement("input");
                        input.type = "text";
                        input.id = letter + number;
                        input.ariaLabel = letter + number;
                        //onchange
                        // input elements to call the update function when the value changes
                        input.onchange = update;
                        container.appendChild(input);
             });
    });
};


const update = event => {

/**change event - 
 * Since your update event is running as a change event listener, 
 * the event parameter will be a change event.
 * The target property of the change event represents the 
 * element that changed. Assign the target property to a 
 * new variable called element. */

const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
    if(!value.includes(element.id) && value.startsWith('=')){
    
  }
}

};