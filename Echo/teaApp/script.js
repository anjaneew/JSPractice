//Tea making App

const getGroceries = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        const groceries = true;
        if(groceries){
            resolve("Lets make tea. get the groceries. 🍵");
        }
        else{
            reject("No groceries to make tea 🍵✖️");
        }
        },3000);      
    });
};

const waterBoil = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const boiledWater = true;
        if(boiledWater){
            resolve("Water is boiled 🍵");
        }
        else{
            reject("Water is NOT boiled 🍵 ✖️");
        }
        },3000);
    });
};

const addTeaBag = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const addTea = true;
        if(addTea){
            resolve("Now the tea is added ☕");
        }
        else{
            reject("No tea is added ☕ ✖️");
        }
        },3000); 
    });
};

const pourTea = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        const teaReady = true;
        if(teaReady){
            resolve("Tea is ready! 🍵☕");
        }
        else{
            reject("Tea is NOT ready! 🍵☕✖️");
        }
        },3000); 
    });
};


// getGroceries().then(value => {console.log(value); return waterBoil()})
//               .then(value => {console.log(value); return addTeaBag()})
//               .then(value => {console.log(value); return pourTea()})
//               .then(value => {console.log(value); console.log("Tea is served 🫖")})
//               .catch(error => console.log(error));

async function makeTea() {
    
    try{

        const getGroceriesResult = await getGroceries();
        console.log(getGroceriesResult);

        const waterBoilResult = await waterBoil();
        console.log(waterBoilResult);

        const addTeaBagResult = await addTeaBag();
        console.log(addTeaBagResult);

        const pourTeaResult = await pourTea();
        console.log(pourTeaResult);

        console.log("Tea is served 🫖");

    }

    catch(error){
        console.error(error);    
    }
}

makeTea();
