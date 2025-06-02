//Spam Filter

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");
// const  = document.getElementById("");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
const stockRegex = /(?:\s|^)[s5][7t][o0][c{([]k [a@4]l[e3]r[7t](?:\s|$)/i;
const dearRegex = /(?:\s|^)d[e3][a@4]r fr[i|1][e3]nd(?:\s|$)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

checkMessageButton.addEventListener("click",()=> {
    if(messageInput.value === ""){
        alert("Please enter a message.");
        return;
    }

    result.textContent =  isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";

    messageInput.value = "";
});

//implicitly return means no {} and no 'return' word.

// const isSpam = (msg) => msg.match(helpRegex); 
// const isSpam = (msg) => helpRegex.test(msg); 
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));


/**.some()
 * Arrays have a .some() method. Like the .filter() method, .some() 
 * accepts a callback function which should take an element of the array 
 * as the argument. The .some() method will return true if the callback 
 * function returns true for at least one element in the array.
 * 
 * Here is an example of a .some() method call to check if any element in the array is an uppercase letter.
 * 
 * Example Code
    const arr = ["A", "b", "C"];
    arr.some(letter => letter === letter.toUpperCase());
 */

/**Regex 
 * 
 * '|'
 * alternate sequence | can be used to match 
 * either the text on the left or the text on the right of the |. 
 * For example, the regular expression /yes|no/ will match either yes or no.
 * 
 * flag 'i' - case insensitive
 * 
 * [0-9] character class 
 * A character class is defined by square brackets, and matches any character within 
 * the brackets. For example, [aeiou] matches any character in the list aeiou.
 *  You can also define a range of characters to match using a hyphen. 
 * For example, [a-z] matches any character from a to z.
 * 
 * - or + 
 * The dollar value may be more than one digit. To match this, 
 * the + quantifier can be used
 *  - this matches one or more consecutive occurrences. 
 * For example, the regular expression /a+/ 
 * matches one or more consecutive a characters.
 * 
 * A capture group /h(i|ey) camper/
 * A capture group is a way to define a part of the expression that should be captured
 *  and saved for later reference. You can define a capture group by wrapping 
 * a part of your expression in parentheses. 
 * For example, /h(i|ey) camper/ would match either hi camper or hey camper, 
 * and would capture i or ey in a group.
 * 
 * ? optional match
 * you can mark the entire pattern as an optional match. The ? quantifier matches 
 * zero or one occurrence of the preceding character or group. For example, 
 * the regular expression /colou?r/ matches both color and colour, 
 * because the u is optional.
 * 
 * \s*
 * The \s character class matches whitespace, such as spaces, tabs, and new lines. 
 * The * quantifier means "match the previous character 0 or more times".
 * 
 * ?: non-capturing group  (?:a|b)
 * a non-capturing group. This will allow you to group the characters together 
 * without preserving the result. To create a non-capturing group in a regular
 * expression, you can add ?: after the opening parenthesis of a group. 
 * For instance, (?:a|b) will match either a or b, but it will not capture the result.
 * 
 * ^ anchor.
 * To match the beginning of the text, you can use the ^ anchor. 
 * This asserts that your pattern match starts at the beginning of the full string.
 * 
 * $ 
 * Like the ^ anchor, you can use the $ anchor to match the end of the string.
*/


