//Cleaning App - practicing promises

const cleanRoom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const roomCleaned = true;

            if(roomCleaned){
                resolve("Room is cleaned 🧼🧽🫧");
            }
            else{
                reject("Room not cleaned 🧼🧽🫧✖️");
            }

        }, 1500);
    });

};
const sweepFloor = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            const floorClean = true;
            if(floorClean){
                resolve("Room is sweapt 🧹");
            }
            else{
                reject("Room not sweapt 🧹✖️");
            }
        },3000);
    });
};
const washDishes = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            const cleanDishes = true;
            if(cleanDishes){
                resolve("Washing dishes done 🍽️🧼🫧");
            }else{
                reject("Dirty dishes 🍽️🧼🫧✖️");
            }
        }, 5000);

    });
};


// cleanRoom().then(value => {console.log(value); return sweepFloor()})
//            .then(value => {console.log(value); return washDishes()})
//            .then(value => {console.log(value); console.log("All Done!!!")})
//            .catch(error => console.log(error));

async function cleaning(){

    try{

        const cleanRoomResult = await cleanRoom();
        console.log(cleanRoomResult);

        const sweepResult = await sweepFloor();
        console.log(sweepResult);

        const dishwashResult = await washDishes();
        console.log(dishwashResult);

        console.log("All done!");

    }
    catch(error){
        console.error(error);
    }
}

cleaning();