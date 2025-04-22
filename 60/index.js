//Asynchronous Code

//code performed concurrently without blocking the execution flow
//I/O operations, network requests, fetching data,
//handled with : callbacks, Promises, Async/Await

//Example1
console.log("Example 1");
setTimeout(() => console.log("Task 1 delayed "), 1000);
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
console.log("Task 5");
//2 , 3, 4, 5, 1

//Example1

function func1(callback){
    setTimeout(() => {
        console.log("Example 2");
        console.log("Task 6 here we go");
        callback()}, 3000);
}

function func2(){
    console.log("Task 7");
    console.log("Task 8");
    console.log("Task 9");
    console.log("Task 10");
}

func1(func2);




