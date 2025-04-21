//console.time()

//Example 1

console.time("test1");

for (let i = 0; i < 100; i++){
    console.log("hello");
}

console.timeEnd("test1");

//Example 1

function loadData(){

    console.time("loadData");

    for(let i = 0; i < 1000; i++){
        console.log("loading data"); //loading data
    }

    console.timeEnd("loadData");
}

function processData(){
    console.time("processData");

    for (let i = 0; i < 40000; i++){
        console.log("data processing");
    }

    console.timeEnd("processData");
}

loadData();
processData();