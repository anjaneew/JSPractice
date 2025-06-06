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
    
    /****Method 1 
     * const sum =  array.reduce((acc, el)=>  acc + el, 0);
     * const mean = sum/array.length;
     * return mean;*/

const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);

    

     /**Method 2 terinary operator */
    const median = sorted.length % 2 === 0 ? 
                   getMean([sorted[sorted.length/2-1], sorted[sorted.length/2]]) 
                   : sorted[Math.floor(sorted.length/2)];
    return median;


    /**Method 1 if statements
     if(sorted.length % 2 === 0){
            return (sorted[sorted.length/2-1]+ sorted[sorted.length/2])/2;
        } 
        else{
            return sorted[Math.floor(sorted.length/2)];
        }**/

};    
    
 /**array.sort() 
  * for sorting numbers  array.sort((a,b) => a-b);
 * By default, the .sort() method converts the elements of an array 
 * into strings, then sorts them alphabetically. The .sort() method 
 * mutates the original array. This works well for strings, but not so 
 * well for numbers. For example, 10 comes before 2 when sorted as 
 * strings, but 2 comes before 10 when sorted as numbers.
 * To fix this, you can pass in a callback function to the .sort() 
 * method. This function takes two arguments, which represent the two 
 * elements being compared. The function should return a value less 
 * than 0 if the first element should come before the second element, 
 * a value greater than 0 if the first element should come after the 
 * second element, and 0 if the two elements should remain in their 
 * current positions.
 * To sort your numbers from smallest to largest, pass a callback 
 * function that takes parameters a and b, and returns the result of 
 * subtracting b from a.
 * 
 *              array.sort((a,b) => a-b);
 */

const getMode = (array) => {
    const counts = {};
    array.forEach(el => counts[el] = counts[el] ? counts[el]+ 1 : 1 );


    /**Method 1 if statement
     * if(counts[el]){
            counts[el] += 1;
        }
        else {
            counts[el] = 1;
        }
     */
};

/**Calcuate occurences
 * To calculate the occurrence you can use the following approach:

Example Code
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});
Check if the current number is already in the counts object. If it is, increment it by 1. If it is not, set it to 1.

Resulting object. The keys are the numbers from the array and the values are the number of times each number appears in the list:

Example Code
{ 1: 3, 2: 3, 3: 3, 4: 3, 5: 2 }
 */

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    // const array = value.split(",");

    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el =>!isNaN(el));
    // const filtered = numbers.filter(el => !isNaN(el));

    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean;

    const median = getMedian(numbers);
    document.querySelector("#median").textContent = median;
};

/**array is odd or even  modulus operator %
 * To check if a number is even or odd, you can use the modulus operator %. 
 * The modulus operator returns the remainder of the division of two 
 * numbers. Here is an example checking if an array length is even or odd:

    Example Code
    // check if array length is even
    arr.length % 2 === 0;

    // check if array length is odd
    arr.length % 2 === 1;
    
 *  If the remainder is 0, the number is even. If the remainder is 1, the *  number is odd.
*/

const testArr1 = [1, 2, 3, 4, 5];
const isEven = (testArr2.length % 2 === 0);
console.log(isEven);

/***middle number
 * -------------------odd number of elements----------------------
 * To get the median of an array with an odd number of elements, you will 
 * need to find and return the middle number.
 * Here is how to find the middle number of an array with an odd number of elements:
 * Example Code
        arr[Math.floor(arr.length / 2)];
 * Here is a longer example finding the middle number of an array with 5 elements:

        Example Code
        const numbers = [1, 2, 3, 4, 5];
        const middleNumber = numbers[Math.floor(numbers.length / 2)];
        console.log(middleNumber); // 3
 * The reason why you use Math.floor is because the result of dividing an  * odd number by 2 will be a decimal. Math.floor will round down to the
 nearest whole number.
 
 /**--------------------even list of numbers--------------------------
  * To find the median of an even list of numbers, you need to find the
  *  two middle numbers and calculate the mean of those numbers.
  * Here is how to find the two middle numbers of an even list of items:
  * 
  * Example Code
        // first middle number
        arr[arr.length / 2];
        // second middle number
        arr[(arr.length / 2) - 1];
        To find the median, you can use the getMean function which adds the middle numbers and divides the sum by 2.

        Example Code
        const numbers = [1, 2, 3, 4];
        const firstMiddleNumber = numbers[numbers.length / 2];
        const secondMiddleNumber = numbers[(numbers.length / 2) - 1];
        // result is 2.5
        getMean([firstMiddleNumber, secondMiddleNumber]);
  * */


/*** 
 const testArr2 = [1, 2, 3, 4, 5, 6];
const oddListMedian = testArr1[Math.floor(testArr1.length/2)];
console.log(oddListMedian);

const evenListMedian = getMean([testArr2[testArr2.length/2], testArr2[(testArr2.length/2 )- 1]]);  
 console.log(evenListMedian);
 */

// const firstMiddleNum = testArr2.length/2;
// const secondMiddleNum = (testArr2.length/2 )- 1;
// getMean(testArr2[firstMiddleNum], testArr2[secondMiddleNum]);
