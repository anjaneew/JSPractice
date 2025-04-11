//Callbacks

//Example 1
// hello(greet);
//
// function hello(callback){
//      setTimeout(function(){
//          console.log("Hello!");
//          setTimeout(function(){
//              callback();
//          }, 5000)
//      }, 3000)
//
//
// }
//
// function greet(){
//     console.log("good day!");
// }

//Example 2
hello(leave);

function hello(callback){
        console.log("Hello!");
        callback();
}

function leave(){
    console.log("leave");
}

//Example 3
// sum(displayResult, 5, 3);
//
// function sum(callback, x, y){
//     let result = x + y ;
//     callback(result);
// }
//
// function displayResult(result){
//     console.log(result); // 8
// }


// //Example 4
sum(displayDOM, 5, 3);

function sum(callback, x, y){
    let result = x + y ;
    callback(result);
}

function displayResult(result){
    console.log(result);
}

function displayDOM(result){
    document.getElementById("myH1").textContent = result;
}

//Example 5

buyFish(dish, "cuttlefish");
buyFish(dish, "mutton");
buyFish(dish, "dogfish");

function buyFish(callback, fish){
    let cookedFish = `Here is the cooked ${fish} for you.`;
    callback(cookedFish);
}

function dish(cookedFish){
    document.getElementById("p1").textContent += cookedFish;
}