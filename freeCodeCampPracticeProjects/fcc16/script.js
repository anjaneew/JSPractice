//Statistics Calculator

/**setting inital value for accumiliator
 * The .reduce() method takes a second argument that is used as 
 * the initial value of the accumulator. Without a second 
 * argument, the .reduce() method uses the first element of the 
 * array as the accumulator, which can lead to unexpected results.
 * Example Code setting the initial value to an empty string:
         array.reduce((acc, el) => acc + el.toLowerCase(), "");
 */

const getMean = (array) => array.reduce((acc, el) => acc + el, 0)/array.length;
    //Method 2 - implicit return 
    
    /**Method 1 */
    // const sum =  array.reduce((acc, el)=>  acc + el, 0);
    // const mean = sum/array.length;
    // return mean;
    
const calculate = () => {
    const value = document.querySelector("#numbers").value;
    // const array = value.split(",");

    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el =>!isNaN(el));
    // const filtered = numbers.filter(el => !isNaN(el));
};


