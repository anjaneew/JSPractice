//Fetch - function for HTTP requests
//        JSON Style data, images, files
//        used for interacting with APIs for send receive data asynchronously over web
//        fetch(url, {options})
//                   {method:"GET"} - default
//                   PUT, POST, DELETE

//-------usual way ------
//
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

//-------using JSON method------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));


// //-------if the data does not exist------
// fetch("https://pokeapi.co/api/v2/pokemon/robinhood")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// //  404 (Not Found)
// //  /SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON

// //----check if the status is OK--------
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("The resource not found");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//
// fetch("https://pokeapi.co/api/v2/pokemon/robinhood")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("The resource is not found");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// //------------async & await-------------------
// fetchData();
//
// async function fetchData(){
//     try{
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/Charmander");
//         if(!response.ok){
//             throw new Error("The resource is not found");
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

//------------async & await with API-------------------

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // const pokemanSprite = document.getElementById(pokemanSprite);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("The resource is not found");
        }
        const data = await response.json();
        console.log(data);
        const pokemanSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemanSprite");

        imgElement.src = pokemanSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}





























