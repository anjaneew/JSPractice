let rowCount = 10; 
// const character = "🍉";
// const emptyCharacter = " ";
let string = [];
let upright = true;


// for(i = 1; i < rowCount; i++){
//     string = character.repeat(i);
//     console.log(string);
// }

// for(i = 10; i > 0; i--){
//     string = emptyCharacter.repeat(i);
//     console.log(string);
// }


// for(i = 1; i < rowCount; i++){
//     string = emptyCharacter.repeat((rowCount-i)) + character.repeat(i) + emptyCharacter.repeat((rowCount-i));
//     console.log(string);
// }

const addLine = (rowCount, rowNumber, character, emptyCharacter)=>{
    return emptyCharacter.repeat((rowCount - rowNumber)) + character.repeat(rowNumber) + emptyCharacter.repeat(rowCount-rowNumber);
}

const isUpright = (up) => {
    for(let i = 1; i <= rowCount; i++){
        if(up){
            string.unshift(addLine(rowCount,i, "🍉", " "));
        }
        else{
            string.push(addLine(rowCount,i, "🍉", " "));
        }
    }

    // console.log(string);
    // console.log(string.join());
    console.log(string.join("\n"));
}

isUpright(false);