//setTimeout(callback, delay)

//Example 1
console.log("Example 1");
function sayHello(){
    window.alert("Hello my name is java script")
}

setTimeout(sayHello, 3000)

console.log("____________________");

//Example 2 Anonymous Function
console.log("Example 2 Anonymous Function");

setTimeout(function(){window.alert
                ("Hello my name is alien");},
                  8000)

console.log("____________________");

// //Example 3 Arrow Function
console.log("Example 3 Arrow Function");

setTimeout(() =>
        window.alert ("Hello my name is preditor"), 3000)

console.log("____________________");

//Example 4 Using clearTimeout(timeId) function
console.log("Example 4 Using clearTimeout() function");

const timeId= setTimeout(() =>
    window.alert ("Hello my name is preditor"), 3000)
clearTimeout(timeId);

console.log("____________________");

//Example 5 Using clearTimeout(timeId) buttons
console.log("Example 5 Using clearTimeout() buttons");
//

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("hello"), 3000);
    console.log("timer started");
//

}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("timer cancelled");
}

console.log("____________________");