//async & await

function walkDog(){
   return new Promise((resolve, reject) => {
       setTimeout(()=>{

           const walkDog = true;

           if(walkDog){
               resolve("You walked the dog 🐕");
           }
           else{
               reject("You didn't walk the dog ⛔");
           }
       }, 1500);
   });
}

function cleanKitchen(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cleanKitchen = true;
            if(cleanKitchen){
                resolve("You cleaned the kitchen 🧼🧽");
            }
            else{
                reject("You didn't clean the kitchen ‼️");
            }
        },2000);
    });
}

function takeoutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const takeoutTrash = true;
            if(takeoutTrash){
                resolve("You took the trash out. 🗑️♻️");
            }
            else{
                reject("You didn't take the trash out.");
            }
        },500);
    });
}

// //usual way to work with promises
// walkDog().then(value =>{console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value);return takeoutTrash()})
//          .then(value => {console.log(value); console.log("All chores are done")})
//          .catch(error=> console.error(error));

//using async & await
async function doChores(){

    try{

        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeoutTrashResult = await takeoutTrash();
        console.log(takeoutTrashResult);

        console.log("All chores are done! ✔️")
    }
    catch(error){
        console.error(error);
    }

}

doChores();