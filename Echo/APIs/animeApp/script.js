//Anime Details App
// @ts-check
const form =  document.getElementById("input-form");
const input =  document.getElementById("input");
const cardContainer =  document.getElementById("card-container");

// const  =  document.getElementById("");
// const  =  document.getElementById("");

const loadEditorsChoice = () => {
        console.log("Load Editors choice");
};


const fetchData = (event) => {
    event.preventDefault();
    const animeName = input.value.trim().toLowerase();
    
    if(animeName){
            console.log("anime name found");
    } 
    else{
        console.log("Enter a valid name");
    }
};

form.addEventListener("submit", fetchData);


