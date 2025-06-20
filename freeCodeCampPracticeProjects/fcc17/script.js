//Project 17 spreadsheet

/**Functional Programming 
 * Functional Programming is a popular approach to software development. 
 * In Functional Programming, developers organize code into smaller functions, 
 * then combine those functions to build complex programs. */

/**  infix
 * In mathematics, an infix is a mathematical operator that appears between its
 *  two operands. For example, 1 + 2 is an infix expression.
 * Object values do not have to be primitive types, like a string or a number. 
 * They can also be functions.
*/

const infixToFunction = {
  //Object values are functions here
  '+': (x , y) => x + y , 
  '-': (x , y) => x - y , 
  '*': (x , y) => x * y , 
  '/': (x , y) => x / y , 
};

//doing calcuations in the spreadsheet
const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2)=> infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

//order of operations
const highPrecedence  = str => {
  
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  //pattern number  * or / operator another number.
  //  . means decimal point or literal dot  
  //so  10.99 is a match

   const str2 = infixEval(str, regex);
  // return regex.test(str);

  return str === str2 ? str : highPrecedence(str2);
  /**recursive approach
   * Your infixEval function will only evaluate the first 
   * multiplication or division operation, because regex 
   * isn't global. This means you'll want to use a recursive 
   * approach to evaluate the entire string.
   * If infixEval does not find any matches, it will return 
   * the str value as-is. Using a ternary expression, check 
   * if str2 is equal to str. If it is, return str, otherwise
   *  return the result of calling highPrecedence() on str2.
   */

};

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
  "": function (args){return args;},
  sum,
  average, 
  median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0,2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  random :([x,y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums)],
};                 

// function parsing logic to a string
const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);

  //                   look for function calls like sum(1, 4)
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;

  /**Negative lookahead:  (?!.*\()  
   * Fails the match if there’s any ( later in the string.
   * .* → anything
   * \( → a literal open parenthesis (
   */

  const toNumberList = args => args.split(',').map(parseFloat);

  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));


  /**hasOwnProperty()
   * To check if a property on a given object exists or not, you can use the 
   * hasOwnProperty() method. The hasOwnProperty() method returns true or false 
   * depending on if the property is found on the object or not.
   * Here is an example of how to use the hasOwnProperty() method:

          Example Code
          const developerObj = {
            name: 'John',
            age: 34,
            }

      developerObj.hasOwnProperty('name'); // true
      developerObj.hasOwnProperty('salary'); // false
   */
   
  return str2.replace(functionCall, (match, fn, args)=> 
  spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match);
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

  /**function reference
   * 
   * You can pass a function reference as a callback parameter. 
   * A function reference is a function name without the parentheses. For 
    * Example Code
        * const myFunc = (val) => `value: ${val}`;
        * const array = [1, 2, 3];
        * const newArray = array.map(myFunc);]
        *                  //[value: 1, value: 2, value: 3]
        * 
   * The .map() method here will call the myFunc function, passing the same 
   * arguments that a .map() callback takes. The first argument is the value of 
   * the array at the current iteration, so newArray would be 
   * [value: 1, value: 2, value: 3].
   */

    const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
    const rangeExpanded = x.replace(rangeRegex,  (_match,  char1, num1, char2, num2)=> rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
    const cellRegex = /[A-J][1-9][0-9]?/gi;
    const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));
    const functionExpanded = applyFunction(cellExpanded);
    return x === functionExpanded ?  functionExpanded : evalFormula( functionExpanded, cells);  
};

/**unused parameter
 *  it is common convention to prefix an unused parameter with an underscore _. 
 * You could also leave the parameter empty like so: (, char1) but it is often
 *  clearer to name the parameter for future readability.
 * Prefix your match parameter with an underscore.  _match
 */

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

  const element = event.target;
  const value = element.value.replace(/\s/g, "");
    if(!value.includes(element.id) && value.startsWith('=')){

     // the contents start with an = character to trigger the function, 
     // so you need to pass the substring of value starting at index 1.
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children)); 
    }
}
