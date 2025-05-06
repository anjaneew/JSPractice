//Promises     object that manages asynchronous code
//             new Promise((resolve, reject) => {asynchronous code})

// ---------callbacks - callback hell----------
// function walkDog(callback){
//
//     setTimeout(()=>{
//         console.log("You walked the dog 🐕");
//         callback();
//     }, 1500);
// }
//
// function cleanKitchen(callback){
//
//     setTimeout(()=>{
//         console.log("You cleaned the kitchen 🧼🧽🧹");
//         callback();
//     }, 2500);
// }
//
// function takeOutTrash(callback){
//
//     setTimeout(()=>{
//         console.log("You took the trash out 🗑️♻️");
//         callback();
//     }, 500);
// }
// // callback hell
// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("All tasks are complete.");
//         });
//     });
// });

// ---------Promise----------
//
// function walkElephant(){
//
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("You walked the elephant 🐘");
//         }, 5500);
//     });
// }
//
// function washFloor(){
//
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve ("You wash the floor 🧹🧼🧽");
//         }, 2500);
//     });
// }
//
// function emptyTrash(){
//
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("You empty trash 🗑️♻️");
//         }, 1000);
//     });
// }
//
// walkElephant().then(value => {console.log(value); return washFloor()})
//               .then(value => {console.log(value); return emptyTrash()})
//               .then(value => {console.log(value); console.log("All are done")});


//----------Promise with reject ------


function walkElephant(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const elephantWalked = true;

            if(elephantWalked){
                resolve("You walked the elephant 🐘");
            }
            else{
                reject("You didn't walk the elephant ‼️");
            }
        }, 5500);
    });
}

function washFloor(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const washed = false;

            if(washed){
                resolve ("You wash the floor 🧹🧼🧽");
            }
            else {
                reject("You didn't do the washing! ⛔")
            }
        }, 2500);
    });
}

function emptyTrash(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{

            const trashEmpty = true;

            if(trashEmpty){
                resolve("You empty trash 🗑️♻️");
            }
            else{
                reject("You didn't empty trash 🛑");
            }
        }, 1000);
    });
}

walkElephant().then(value => {console.log(value); return washFloor()})
    .then(value => {console.log(value); return emptyTrash()})
    .then(value => {console.log(value); console.log("All are done")})
    .catch(error => console.error(error));

//when the first promise rejects, nothing else works