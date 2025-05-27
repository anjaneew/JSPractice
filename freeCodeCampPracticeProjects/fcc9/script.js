const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date  = new Date();//create date object
const day = date.getDate();
const month = date.getMonth() + 1; //0 to 11
const year = date.getFullYear();
const hours = date.getHours();//0 to 23
const minutes = date.getMinutes();//0 to 59

const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch(dateOptionsSelectElement.value){
        case "dd-mm-yyyy" :
            `${day}-${month}-${year}`;
            break;
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            // `${year}-${month}-${day}`;
             break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
             break;
        default:
             currentDateParagraph.textContent = formattedDate;
    }
});

/* "change" event 

change event is used to detect when the value of an HTML element has changed:
        ex:
            element.addEventListener("change", () => {
                
            });
*/

/* split() method 
    split() method is used to divide a string into substrings based on a specified separator. It then returns these substrings as elements of an array. takes in a parameter known as a separator. 

    Example Code
        const greeting = "Hello";
        greeting.split(""); // returns ["h", "e", "l", "l", "o"]

*/

/* reverse() method
    reverse an array of elements 

        Example Code
            [1, 2, 3, 4, 5].reverse();
            // returns [5, 4, 3, 2, 1]
*/

/* join() method 
join() method takes an array of elements and joins them into a string. also takes an optional separator. If you don't provide a separator, the default separator is a comma.
        Example Code
            [1, 2, 3, 4, 5].join("-"); 
            //returns "1-2-3-4-5"
*/

/* split().reverse().join() Method chain Example 

    Example Code
        const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
        console.log(exampleSentence);
*/
