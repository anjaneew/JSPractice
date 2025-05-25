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
