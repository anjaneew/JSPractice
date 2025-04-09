//2D Arrays

let fruits = [["apple", "banana", "mango"],
                     ["strawberry", "watermelon", "sugarcane"],
                     ["pear", "grapes", "orange"]];

//Example 1
console.log("Example 1");
console.log(fruits); // ['apple', 'banana', 'mango']
                     // ['strawberry', 'watermelon', 'sugarcane']
                     // ['pear', 'grapes', 'orange']

//Example 2
console.log("Example 2");
for (let shelf of fruits){
    console.log(shelf); //["apple"1: "banana"2: "mango"]
                        // ['strawberry', 'watermelon', 'sugarcane']
                        // ['pear', 'grapes', 'orange']
}

// //Example 3
console.log("Example 3");
for (let shelf of fruits){
    const shelfString = shelf.join(',');
    console.log(shelfString); //apple,banana,mango
                              //strawberry,watermelon,sugarcane
                              //pear,grapes,orange
}

//Example 4
console.log("Example 4");
fruits[0][0] = 'X' ;
console.log(fruits);  //0 ['X', 'banana', 'mango']
                      // ['strawberry', 'watermelon', 'sugarcane']
                      // ['pear', 'grapes', 'orange']
fruits[0][0] = "apple" ;