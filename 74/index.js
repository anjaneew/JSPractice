//   Callback Hell -
//                  old pattern used to handle asynchronous functions
//                  situation in JS callbacks are nested in other callbacks
//                  that code is difficult to read

//usual code
console.log(".............usual code............");
function task1(){
    console.log("Task 1 is complete.");
}
function task2(){
    console.log("Task 2 is complete.");
}
function task3(){
    console.log("Task 3 is complete.");
}
function task4(){
    console.log("Task 4 is complete.");
}
task1();
task2();
task3();
task4();
console.log("Task 1-4 are complete")
console.log(".....................................")

//asynchronous code
console.log(".............asynchronous code............");

function task5(){
    setTimeout(()=>{
        console.log("Task 5 is complete.");
    }, 2000);
}

function task6(){
    setTimeout(()=>{
        console.log("Task 6 is complete.");
    }, 1000);
}

function task7(){
    setTimeout(()=> {
        console.log("Task 7 is complete.");
    }, 3000);
}

function task8(){
    setTimeout(()=>{
        console.log("Task 8 is complete.");
    }, 1500);
}

task5();
task6();
task7();
task8();
console.log("Task5-8 are complete")
console.log(".....................................")

//using callbacks
console.log(".............using callbacks............");

function taskA(callback){
    setTimeout(()=>{
        console.log("Task A is complete.");
        callback();
    }, 4000);
}

function taskB(callback){
    setTimeout(()=>{
        console.log("Task B is complete.");
        callback();
    }, 1000);
}

function taskC(callback){
    setTimeout(()=> {
        console.log("Task C is complete.");
        callback();
    }, 3000);
}

function taskD(callback){
    setTimeout(()=>{
        console.log("Task D is complete.");
        callback();
    }, 1500);
}

taskA(()=>{
    taskB(()=>{
        taskC(()=>{
            taskD(()=>{
                console.log("Tasks A, B, C & D are complete");
            });
        });
    });
});
