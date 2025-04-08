// Variable Scope
//Example 1
//global scope

let x = 3;
function1(); //1 - global scope is ignored and we print the local variable

//local scope
function function1(){
    let x = 1;
    console.log(x);//1 - global scope is ignored and we print the local variable
}

//Example 2
let y = 3;
function2(); //3 because there is no local variable. the global variable is printed

//local scope
function function2(){
    console.log(y);//3 because there is no local variable. the global variable is printed
}