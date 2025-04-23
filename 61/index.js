//Error Handling

//caused by
//     network errors, promise rejection, security errors
// can use:
        //  try{}
        // catch(){}
        // finally{}

//Example 1
console.log("Example 1 try catch finally");
try{
    // console.lag("hello");
    console.log(x);
}
catch(error){
    console.error(error);
}
finally{
    console.log("Tasks that always get executed");
    // close files
    // close connections
    // release resources
}
console.log("You have reached the end!");
console.log("________________");

//Example 2

console.log("Example 2 throw new error");

try{
    //I/O senario:
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor === 0){
        throw new Error("You cannot divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Not a valid number");
    }

    const result = dividend / divisor;
    console.log(result);

}
catch(error){
    console.error(error);
}
finally{

}



console.log("You have reached the end!");
console.log("________________");
